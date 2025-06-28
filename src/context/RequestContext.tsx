import React, { createContext, useContext, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export interface Request {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  category: string;
  description: string;
  location: string;
  status: 'pending' | 'in-review' | 'responded' | 'closed';
  createdAt: string;
  response?: string;
  responseDate?: string;
  attachments?: File[];
  urgency: 'low' | 'medium' | 'high';
  department?: string;
  verifiedBy?: {
    name: string;
    empId: string;
    phone: string;
    department: string;
  };
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  type: 'feedback' | 'suggestion' | 'bug' | 'compliment';
  message: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}

interface RequestContextType {
  requests: Request[];
  feedbacks: Feedback[];
  addRequest: (request: Omit<Request, 'id' | 'createdAt' | 'status' | 'urgency'>) => Promise<string>;
  updateRequest: (id: string, updates: Partial<Request>) => Promise<void>;
  getRequestsByEmail: (email: string) => Request[];
  addFeedback: (feedback: Omit<Feedback, 'id' | 'createdAt' | 'status'>) => Promise<void>;
  getAllFeedbacks: () => Feedback[];
}

const RequestContext = createContext<RequestContextType | undefined>(undefined);

export const useRequests = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error('useRequests must be used within a RequestProvider');
  }
  return context;
};

// Enhanced sample requests with verification details
const sampleRequests: Request[] = [
  {
    id: 'req-001',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '9876543210',
    title: 'Road Infrastructure Development in Ernakulam',
    category: 'infrastructure',
    description: 'The main road connecting Kakkanad to Infopark has severe potholes and drainage issues. During monsoon season, the road becomes completely waterlogged, causing major traffic disruptions and vehicle damage. Local residents and IT professionals face daily commuting challenges. We request immediate attention to repair the road surface and improve drainage systems.',
    location: 'Ernakulam District, Kerala',
    status: 'responded',
    createdAt: '2024-01-15T10:30:00Z',
    response: 'Thank you for bringing this critical infrastructure issue to my attention. I have personally inspected the road conditions and immediately allocated ₹2.5 crores from the emergency infrastructure fund. The Public Works Department has been directed to begin repairs within 48 hours. A dedicated project team will oversee the work, including proper drainage installation. Expected completion: 15 days. I will personally monitor the progress.',
    responseDate: '2024-01-16T14:20:00Z',
    urgency: 'high',
    department: 'infrastructure',
    verifiedBy: {
      name: 'Rajesh Kumar Nair',
      empId: 'INF001',
      phone: '9447123456',
      department: 'Infrastructure Department'
    }
  },
  {
    id: 'req-002',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@email.com',
    phone: '9988776655',
    title: 'Corruption in Public Distribution System',
    category: 'corruption',
    description: 'I want to report serious irregularities in the PDS system at Fair Price Shop No. 147, Thrissur. The shop owner is selling government rice and wheat in the black market at higher prices. Poor families are being denied their rightful rations. I have photographic evidence and witness statements. This has been ongoing for 6 months.',
    location: 'Thrissur District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-18T09:15:00Z',
    urgency: 'high',
    department: 'legal'
  },
  // Add 18 more sample requests with different email addresses
  {
    id: 'req-003',
    name: 'Meera Nair',
    email: 'meera.nair@email.com',
    phone: '9123456789',
    title: 'Government School Infrastructure Crisis',
    category: 'education',
    description: 'Government Higher Secondary School, Munnar, is in deplorable condition. The building has leaking roofs, broken windows, and no proper drinking water facility. 450 students are studying in these conditions.',
    location: 'Idukki District, Kerala',
    status: 'responded',
    createdAt: '2024-01-20T11:45:00Z',
    response: 'Your concern about the school infrastructure has been addressed. We have allocated ₹50 lakhs for immediate repairs and upgrades.',
    responseDate: '2024-01-22T10:30:00Z',
    urgency: 'high',
    department: 'education',
    verifiedBy: {
      name: 'Dr. Sunitha Menon',
      empId: 'EDU002',
      phone: '9447234567',
      department: 'Education Department'
    }
  },
  {
    id: 'req-004',
    name: 'Arun Menon',
    email: 'arun.menon@email.com',
    phone: '9555444333',
    title: 'Illegal Land Encroachment by Private Parties',
    category: 'land-rights',
    description: 'A 5-acre government land in Kottayam district has been illegally occupied by a private construction company.',
    location: 'Kottayam District, Kerala',
    status: 'responded',
    createdAt: '2024-01-12T16:20:00Z',
    response: 'Legal action has been initiated. The land will be recovered within 30 days.',
    responseDate: '2024-01-14T10:30:00Z',
    urgency: 'high',
    department: 'revenue',
    verifiedBy: {
      name: 'Adv. Krishnan Pillai',
      empId: 'REV003',
      phone: '9447345678',
      department: 'Revenue Department'
    }
  },
  {
    id: 'req-005',
    name: 'Lakshmi Pillai',
    email: 'lakshmi.pillai@email.com',
    phone: '9876543221',
    title: 'Healthcare Accessibility in Remote Areas',
    category: 'healthcare',
    description: 'Wayanad district remote villages lack basic healthcare facilities.',
    location: 'Wayanad District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-19T13:10:00Z',
    urgency: 'high',
    department: 'health'
  },
  // Additional 15 sample requests with different emails
  {
    id: 'req-006',
    name: 'Suresh Babu',
    email: 'suresh.babu@email.com',
    phone: '9444555666',
    title: 'Digital Literacy Program for Rural Areas',
    category: 'development',
    description: 'Rural areas in Palakkad district lack digital literacy programs.',
    location: 'Palakkad District, Kerala',
    status: 'responded',
    createdAt: '2024-01-10T08:30:00Z',
    response: 'Digital literacy centers approved for 15 locations.',
    responseDate: '2024-01-12T16:45:00Z',
    urgency: 'medium',
    department: 'infrastructure'
  },
  {
    id: 'req-007',
    name: 'Anitha Krishnan',
    email: 'anitha.krishnan@email.com',
    phone: '9876543222',
    title: 'Water Contamination in Kollam District',
    category: 'environment',
    description: 'Industrial waste from nearby factories is contaminating groundwater.',
    location: 'Kollam District, Kerala',
    status: 'pending',
    createdAt: '2024-01-22T14:30:00Z',
    urgency: 'high',
    department: 'environment'
  },
  {
    id: 'req-008',
    name: 'Ravi Chandran',
    email: 'ravi.chandran@email.com',
    phone: '9876543223',
    title: 'Public Transport Safety Concerns',
    category: 'safety',
    description: 'Private bus operators are violating safety norms.',
    location: 'Thiruvananthapuram District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-21T16:45:00Z',
    urgency: 'high',
    department: 'transport'
  },
  {
    id: 'req-009',
    name: 'Deepa Nair',
    email: 'deepa.nair@email.com',
    phone: '9876543224',
    title: 'Women Safety Issues in Public Places',
    category: 'safety',
    description: 'Inadequate lighting and security in public areas.',
    location: 'Kochi, Kerala',
    status: 'responded',
    createdAt: '2024-01-18T12:00:00Z',
    response: 'Additional security measures and lighting have been arranged.',
    responseDate: '2024-01-20T14:00:00Z',
    urgency: 'high',
    department: 'safety',
    verifiedBy: {
      name: 'Inspector Ramesh Kumar',
      empId: 'SAF004',
      phone: '9447456789',
      department: 'Public Safety Department'
    }
  },
  {
    id: 'req-010',
    name: 'Vinod Kumar',
    email: 'vinod.kumar@email.com',
    phone: '9876543225',
    title: 'Farmer Subsidy Delay Issues',
    category: 'development',
    description: 'Agricultural subsidies have been delayed for 6 months.',
    location: 'Thrissur District, Kerala',
    status: 'pending',
    createdAt: '2024-01-23T09:30:00Z',
    urgency: 'medium',
    department: 'agriculture'
  },
  {
    id: 'req-011',
    name: 'Sita Devi',
    email: 'sita.devi@email.com',
    phone: '9876543226',
    title: 'Pension Scheme Implementation Issues',
    category: 'development',
    description: 'Elderly citizens facing difficulties in pension enrollment.',
    location: 'Alappuzha District, Kerala',
    status: 'responded',
    createdAt: '2024-01-17T11:20:00Z',
    response: 'Simplified enrollment process has been implemented.',
    responseDate: '2024-01-19T15:30:00Z',
    urgency: 'medium',
    department: 'social-welfare',
    verifiedBy: {
      name: 'Mrs. Radha Krishnan',
      empId: 'SW005',
      phone: '9447567890',
      department: 'Social Welfare Department'
    }
  },
  {
    id: 'req-012',
    name: 'Manoj Varma',
    email: 'manoj.varma@email.com',
    phone: '9876543227',
    title: 'Illegal Mining Activities',
    category: 'environment',
    description: 'Unauthorized sand mining in river beds causing environmental damage.',
    location: 'Pathanamthitta District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-21T14:15:00Z',
    urgency: 'high',
    department: 'environment'
  },
  {
    id: 'req-013',
    name: 'Geetha Menon',
    email: 'geetha.menon@email.com',
    phone: '9876543228',
    title: 'Child Education Support Request',
    category: 'education',
    description: 'Request for scholarship and educational support for underprivileged children.',
    location: 'Kannur District, Kerala',
    status: 'responded',
    createdAt: '2024-01-16T10:45:00Z',
    response: 'Scholarship program has been approved for 50 children.',
    responseDate: '2024-01-18T12:00:00Z',
    urgency: 'medium',
    department: 'education',
    verifiedBy: {
      name: 'Prof. Sunil Kumar',
      empId: 'EDU006',
      phone: '9447678901',
      department: 'Education Department'
    }
  },
  {
    id: 'req-014',
    name: 'Ramesh Pillai',
    email: 'ramesh.pillai@email.com',
    phone: '9876543229',
    title: 'Public Toilet Facility Request',
    category: 'infrastructure',
    description: 'Urgent need for public toilet facilities in market area.',
    location: 'Kasaragod District, Kerala',
    status: 'pending',
    createdAt: '2024-01-24T08:30:00Z',
    urgency: 'medium',
    department: 'infrastructure'
  },
  {
    id: 'req-015',
    name: 'Kavitha Nair',
    email: 'kavitha.nair@email.com',
    phone: '9876543230',
    title: 'Healthcare Equipment Shortage',
    category: 'healthcare',
    description: 'Primary Health Center lacks basic medical equipment.',
    location: 'Malappuram District, Kerala',
    status: 'responded',
    createdAt: '2024-01-15T13:20:00Z',
    response: 'Medical equipment worth ₹10 lakhs has been sanctioned.',
    responseDate: '2024-01-17T16:00:00Z',
    urgency: 'high',
    department: 'health',
    verifiedBy: {
      name: 'Dr. Ajith Kumar',
      empId: 'HLT007',
      phone: '9447789012',
      department: 'Health Department'
    }
  },
  {
    id: 'req-016',
    name: 'Biju Thomas',
    email: 'biju.thomas@email.com',
    phone: '9876543231',
    title: 'Street Light Installation Request',
    category: 'infrastructure',
    description: 'Dark streets causing safety concerns for residents.',
    location: 'Kozhikode District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-22T17:30:00Z',
    urgency: 'medium',
    department: 'infrastructure'
  },
  {
    id: 'req-017',
    name: 'Suma Devi',
    email: 'suma.devi@email.com',
    phone: '9876543232',
    title: 'Waste Management Issues',
    category: 'environment',
    description: 'Improper waste disposal causing health hazards.',
    location: 'Ernakulam District, Kerala',
    status: 'responded',
    createdAt: '2024-01-19T09:45:00Z',
    response: 'New waste management system will be implemented next month.',
    responseDate: '2024-01-21T11:30:00Z',
    urgency: 'medium',
    department: 'environment',
    verifiedBy: {
      name: 'Mr. Prakash Nair',
      empId: 'ENV008',
      phone: '9447890123',
      department: 'Environment Department'
    }
  },
  {
    id: 'req-018',
    name: 'Ajay Kumar',
    email: 'ajay.kumar@email.com',
    phone: '9876543233',
    title: 'Employment Scheme Information',
    category: 'employment',
    description: 'Need information about government employment schemes.',
    location: 'Idukki District, Kerala',
    status: 'pending',
    createdAt: '2024-01-25T10:15:00Z',
    urgency: 'low',
    department: 'employment'
  },
  {
    id: 'req-019',
    name: 'Latha Menon',
    email: 'latha.menon@email.com',
    phone: '9876543234',
    title: 'Senior Citizen Welfare Programs',
    category: 'development',
    description: 'Request for more senior citizen welfare programs in the area.',
    location: 'Kottayam District, Kerala',
    status: 'responded',
    createdAt: '2024-01-14T14:30:00Z',
    response: 'New senior citizen programs will be launched next quarter.',
    responseDate: '2024-01-16T10:45:00Z',
    urgency: 'low',
    department: 'social-welfare',
    verifiedBy: {
      name: 'Mrs. Priya Nair',
      empId: 'SW009',
      phone: '9447901234',
      department: 'Social Welfare Department'
    }
  },
  {
    id: 'req-020',
    name: 'Krishnan Nair',
    email: 'krishnan.nair@email.com',
    phone: '9876543235',
    title: 'Road Safety Measures',
    category: 'safety',
    description: 'Need speed breakers and warning signs on highway.',
    location: 'Thiruvananthapuram District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-23T16:00:00Z',
    urgency: 'high',
    department: 'transport'
  }
];

// Sample feedback data
const sampleFeedbacks: Feedback[] = [
  {
    id: 'fb-001',
    name: 'Arjun Nair',
    email: 'arjun.nair@email.com',
    type: 'feedback',
    message: 'The portal is very user-friendly and responsive. Great work on the design!',
    createdAt: '2024-01-20T10:30:00Z',
    status: 'reviewed'
  },
  {
    id: 'fb-002',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    type: 'suggestion',
    message: 'Please add a mobile app version of this portal for better accessibility.',
    createdAt: '2024-01-21T14:15:00Z',
    status: 'new'
  },
  {
    id: 'fb-003',
    name: 'Rajesh Kumar',
    email: 'rajesh.k@email.com',
    type: 'compliment',
    message: 'Excellent response time from the departments. Very satisfied with the service.',
    createdAt: '2024-01-22T09:45:00Z',
    status: 'reviewed'
  }
];

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

export const RequestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const storedRequests = localStorage.getItem('requests');
    const storedFeedbacks = localStorage.getItem('feedbacks');
    
    if (storedRequests) {
      setRequests(JSON.parse(storedRequests));
    } else {
      setRequests(sampleRequests);
      localStorage.setItem('requests', JSON.stringify(sampleRequests));
    }

    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    } else {
      setFeedbacks(sampleFeedbacks);
      localStorage.setItem('feedbacks', JSON.stringify(sampleFeedbacks));
    }
  }, []);

  const determineUrgency = (category: string, description: string): 'low' | 'medium' | 'high' => {
    const urgentKeywords = ['emergency', 'urgent', 'critical', 'death', 'corruption', 'illegal', 'contamination', 'accident'];
    const highPriorityCategories = ['corruption', 'healthcare', 'safety', 'environment'];
    
    if (highPriorityCategories.includes(category) || 
        urgentKeywords.some(keyword => description.toLowerCase().includes(keyword))) {
      return 'high';
    }
    
    if (category === 'infrastructure' || category === 'education') {
      return 'medium';
    }
    
    return 'low';
  };

  const assignToDepartment = (category: string) => {
    const categoryToDepartment = {
      'education': 'education',
      'infrastructure': 'infrastructure',
      'healthcare': 'health',
      'corruption': 'legal',
      'safety': 'safety',
      'environment': 'environment',
      'land-rights': 'revenue',
      'development': 'infrastructure',
      'employment': 'employment',
      'agriculture': 'agriculture'
    };
    return categoryToDepartment[category] || 'general';
  };

  const sendEmailNotification = async (request: Request, type: 'submission' | 'response') => {
    try {
      const templateParams = {
        to_email: request.email,
        to_name: request.name,
        request_title: request.title,
        request_id: request.id,
        officer_name: 'Dr. Raju Narayana Swamy, IAS',
        message: type === 'submission' 
          ? `Your request "${request.title}" has been successfully submitted and assigned ID: ${request.id}. It has been forwarded to the ${request.department} department. You will receive updates as your request is processed.`
          : `The ${request.department} department has responded to your request "${request.title}". Response: ${request.response}`,
        from_email: 'srinurao1902@gmail.com'
      };

      console.log('Email notification sent:', templateParams);
      
    } catch (error) {
      console.error('Failed to send email notification:', error);
    }
  };

  const addRequest = async (requestData: Omit<Request, 'id' | 'createdAt' | 'status' | 'urgency'>): Promise<string> => {
    const urgency = determineUrgency(requestData.category, requestData.description);
    const department = assignToDepartment(requestData.category);
    
    const newRequest: Request = {
      ...requestData,
      id: `req-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'pending',
      urgency,
      department
    };

    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));

    await sendEmailNotification(newRequest, 'submission');
    
    console.log('New request submitted - Officer notification:', {
      title: newRequest.title,
      category: newRequest.category,
      urgency: newRequest.urgency,
      department: newRequest.department,
      citizen: newRequest.name
    });

    return newRequest.id;
  };

  const updateRequest = async (id: string, updates: Partial<Request>) => {
    const updatedRequests = requests.map(req =>
      req.id === id ? { ...req, ...updates } : req
    );
    setRequests(updatedRequests);
    localStorage.setItem('requests', JSON.stringify(updatedRequests));

    if (updates.response) {
      const updatedRequest = updatedRequests.find(req => req.id === id);
      if (updatedRequest) {
        await sendEmailNotification(updatedRequest, 'response');
      }
    }
  };

  const getRequestsByEmail = (email: string) => {
    return requests.filter(req => req.email.toLowerCase() === email.toLowerCase());
  };

  const addFeedback = async (feedbackData: Omit<Feedback, 'id' | 'createdAt' | 'status'>) => {
    const newFeedback: Feedback = {
      ...feedbackData,
      id: `fb-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    const updatedFeedbacks = [...feedbacks, newFeedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
  };

  const getAllFeedbacks = () => {
    return feedbacks;
  };

  return (
    <RequestContext.Provider value={{ 
      requests, 
      feedbacks, 
      addRequest, 
      updateRequest, 
      getRequestsByEmail, 
      addFeedback, 
      getAllFeedbacks 
    }}>
      {children}
    </RequestContext.Provider>
  );
};