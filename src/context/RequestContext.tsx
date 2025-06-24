import React, { createContext, useContext, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

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
}

interface RequestContextType {
  requests: Request[];
  addRequest: (request: Omit<Request, 'id' | 'createdAt' | 'status' | 'urgency'>) => Promise<string>;
  updateRequest: (id: string, updates: Partial<Request>) => Promise<void>;
  getRequestsByEmail: (email: string) => Request[];
}

const RequestContext = createContext<RequestContextType | undefined>(undefined);

export const useRequests = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error('useRequests must be used within a RequestProvider');
  }
  return context;
};

// Enhanced sample requests with more realistic data
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
    department: 'infrastructure'
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
  {
    id: 'req-003',
    name: 'Meera Nair',
    email: 'meera.nair@email.com',
    phone: '9123456789',
    title: 'Government School Infrastructure Crisis',
    category: 'education',
    description: 'Government Higher Secondary School, Munnar, is in deplorable condition. The building has leaking roofs, broken windows, and no proper drinking water facility. 450 students are studying in these conditions. The computer lab has been non-functional for 2 years. Teachers are struggling to provide quality education. We urgently need infrastructure upgrades.',
    location: 'Idukki District, Kerala',
    status: 'pending',
    createdAt: '2024-01-20T11:45:00Z',
    urgency: 'high',
    department: 'education'
  },
  {
    id: 'req-004',
    name: 'Arun Menon',
    email: 'arun.menon@email.com',
    phone: '9555444333',
    title: 'Illegal Land Encroachment by Private Parties',
    category: 'land-rights',
    description: 'A 5-acre government land in Kottayam district (Survey No. 245/3) has been illegally occupied by a private construction company. They have started unauthorized construction without proper permits. Local revenue officials seem to be involved. The land was designated for a community health center. We have all the original documents proving government ownership.',
    location: 'Kottayam District, Kerala',
    status: 'responded',
    createdAt: '2024-01-12T16:20:00Z',
    response: 'This is indeed a serious violation of land laws. I have ordered an immediate survey by the District Collector and formed a special investigation team. The unauthorized construction has been stopped, and legal notices have been served. Criminal cases have been filed against the encroachers. The land will be recovered within 30 days, and the community health center project will proceed as planned.',
    responseDate: '2024-01-14T10:30:00Z',
    urgency: 'high',
    department: 'revenue'
  },
  {
    id: 'req-005',
    name: 'Lakshmi Pillai',
    email: 'lakshmi.pillai@email.com',
    phone: '9876543221',
    title: 'Healthcare Accessibility in Remote Areas',
    category: 'healthcare',
    description: 'Wayanad district remote villages lack basic healthcare facilities. The nearest Primary Health Center is 25 km away through difficult terrain. Pregnant women and elderly patients face life-threatening situations during emergencies. We need a mobile medical unit or a satellite health center. Three deaths occurred last month due to delayed medical attention.',
    location: 'Wayanad District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-19T13:10:00Z',
    urgency: 'high',
    department: 'health'
  },
  {
    id: 'req-006',
    name: 'Suresh Babu',
    email: 'suresh.babu@email.com',
    phone: '9444555666',
    title: 'Digital Literacy Program for Rural Areas',
    category: 'development',
    description: 'Rural areas in Palakkad district lack digital literacy programs. Farmers are unable to access government schemes online. Youth are missing employment opportunities due to lack of computer skills. We request establishment of digital literacy centers in each panchayat with trained instructors.',
    location: 'Palakkad District, Kerala',
    status: 'responded',
    createdAt: '2024-01-10T08:30:00Z',
    response: 'Digital empowerment is crucial for rural development. I have approved the establishment of 15 digital literacy centers across Palakkad district. Each center will have 10 computers and trained instructors. The program will be launched next month with free courses for farmers, women, and youth. Partnership with local IT companies secured for ongoing support.',
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
    description: 'Industrial waste from nearby factories is contaminating our groundwater in Kollam district. Several families have reported health issues including skin problems and stomach ailments. The local water sources have turned murky and emit foul smell. We need immediate intervention to stop the pollution and provide clean water supply.',
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
    description: 'Private bus operators in Thiruvananthapuram are violating safety norms. Buses are overcrowded, drivers are reckless, and vehicles are not properly maintained. There have been 3 accidents in the past month. Passengers, especially women and elderly, feel unsafe. We need strict enforcement of transport regulations.',
    location: 'Thiruvananthapuram District, Kerala',
    status: 'in-review',
    createdAt: '2024-01-21T16:45:00Z',
    urgency: 'high',
    department: 'transport'
  }
];

// Initialize EmailJS with your credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with actual EmailJS public key

export const RequestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const storedRequests = localStorage.getItem('requests');
    if (storedRequests) {
      setRequests(JSON.parse(storedRequests));
    } else {
      setRequests(sampleRequests);
      localStorage.setItem('requests', JSON.stringify(sampleRequests));
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
      'development': 'infrastructure'
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

      // Simulate email sending (replace with actual EmailJS service)
      console.log('Email notification sent:', templateParams);
      
      // In production, use:
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
      
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

    // Send email notification to citizen
    await sendEmailNotification(newRequest, 'submission');
    
    // Log for officer notification (in production, send to officer's email)
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

    // Send email notification to citizen if response is added
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

  return (
    <RequestContext.Provider value={{ requests, addRequest, updateRequest, getRequestsByEmail }}>
      {children}
    </RequestContext.Provider>
  );
};