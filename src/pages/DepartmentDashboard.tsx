import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequests } from '../context/RequestContext';
import { 
  Building, Users, FileText, MessageCircle, TrendingUp, 
  Clock, CheckCircle, AlertCircle, LogOut, Eye, Send, 
  Calendar, MapPin, Filter, Download, BarChart3, 
  PieChart, Activity, Bell, Search, Tag
} from 'lucide-react';

const DepartmentDashboard = () => {
  const navigate = useNavigate();
  const { requests, updateRequest } = useRequests();
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [responseText, setResponseText] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDepartment, setCurrentDepartment] = useState('');

  const departments = [
    { id: 'education', name: 'Education Department', icon: '🎓' },
    { id: 'infrastructure', name: 'Infrastructure Department', icon: '🏗️' },
    { id: 'health', name: 'Health Department', icon: '🏥' },
    { id: 'legal', name: 'Legal Affairs', icon: '⚖️' },
    { id: 'safety', name: 'Public Safety', icon: '🚨' },
    { id: 'environment', name: 'Environment', icon: '🌱' },
    { id: 'revenue', name: 'Revenue Department', icon: '💰' },
    { id: 'transport', name: 'Transport', icon: '🚗' }
  ];

  useEffect(() => {
    // Check if department is logged in
    const loggedInDept = localStorage.getItem('departmentLoggedIn');
    if (!loggedInDept) {
      navigate('/department-login');
    } else {
      setCurrentDepartment(loggedInDept);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('departmentLoggedIn');
    navigate('/department-login');
  };

  const handleRespondToRequest = async (requestId: string) => {
    if (!responseText.trim()) return;

    setIsResponding(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    updateRequest(requestId, {
      status: 'responded',
      response: responseText,
      responseDate: new Date().toISOString(),
      department: currentDepartment
    });

    setResponseText('');
    setSelectedRequest(null);
    setIsResponding(false);
  };

  const handleStatusUpdate = async (requestId: string, newStatus: string) => {
    await updateRequest(requestId, { 
      status: newStatus,
      department: currentDepartment 
    });
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

  const getDepartmentRequests = () => {
    return requests.filter(request => {
      const assignedDept = assignToDepartment(request.category);
      return assignedDept === currentDepartment || currentDepartment === 'admin';
    });
  };

  const filteredRequests = getDepartmentRequests().filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    const matchesDepartment = filterDepartment === 'all' || assignToDepartment(request.category) === filterDepartment;
    const matchesSearch = searchTerm === '' || 
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesDepartment && matchesSearch;
  });

  const getStatusStats = () => {
    const deptRequests = getDepartmentRequests();
    return {
      total: deptRequests.length,
      pending: deptRequests.filter(r => r.status === 'pending').length,
      inReview: deptRequests.filter(r => r.status === 'in-review').length,
      responded: deptRequests.filter(r => r.status === 'responded').length,
      closed: deptRequests.filter(r => r.status === 'closed').length
    };
  };

  const stats = getStatusStats();
  const currentDeptInfo = departments.find(d => d.id === currentDepartment);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-review':
        return 'bg-blue-100 text-blue-800';
      case 'responded':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {currentDeptInfo?.icon} {currentDeptInfo?.name || 'Department'} Dashboard
                </h1>
                <p className="text-gray-600">Manage citizen requests and departmental tasks</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                {stats.pending > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {stats.pending}
                  </span>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Review</p>
                <p className="text-2xl font-bold text-gray-900">{stats.inReview}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Responded</p>
                <p className="text-2xl font-bold text-gray-900">{stats.responded}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-gray-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Closed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.closed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-review">In Review</option>
              <option value="responded">Responded</option>
              <option value="closed">Closed</option>
            </select>

            {currentDepartment === 'admin' && (
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            )}

            <div className="flex items-center space-x-2 flex-1 min-w-64">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm flex-1"
              />
            </div>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Department Requests ({filteredRequests.length})
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Citizen Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{request.title}</p>
                          <p className="text-sm text-gray-500 line-clamp-2">{request.description}</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {request.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{request.name}</p>
                        <p className="text-sm text-gray-500">{request.email}</p>
                        <p className="text-sm text-gray-500">{request.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {request.category.replace('-', ' ')}
                        </span>
                        <Tag className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {departments.find(d => d.id === assignToDepartment(request.category))?.icon}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(request.urgency)}`}>
                        {request.urgency?.toUpperCase() || 'MEDIUM'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={request.status}
                        onChange={(e) => handleStatusUpdate(request.id, e.target.value)}
                        className={`text-xs font-medium rounded px-2 py-1 border-0 ${getStatusColor(request.status)}`}
                      >
                        <option value="pending">PENDING</option>
                        <option value="in-review">IN REVIEW</option>
                        <option value="responded">RESPONDED</option>
                        <option value="closed">CLOSED</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(request.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {request.status !== 'responded' && request.status !== 'closed' && (
                          <button
                            onClick={() => {
                              setSelectedRequest(request);
                              setResponseText('');
                            }}
                            className="text-green-600 hover:text-green-800 text-sm"
                            title="Respond"
                          >
                            <MessageCircle className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Request Details</h3>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedRequest.title}</h4>
                  <p className="text-sm text-gray-600">{selectedRequest.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Citizen Information</p>
                    <p className="text-sm text-gray-600">{selectedRequest.name}</p>
                    <p className="text-sm text-gray-600">{selectedRequest.email}</p>
                    <p className="text-sm text-gray-600">{selectedRequest.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Request Information</p>
                    <p className="text-sm text-gray-600">Category: {selectedRequest.category}</p>
                    <p className="text-sm text-gray-600">Priority: {selectedRequest.urgency}</p>
                    <p className="text-sm text-gray-600">Location: {selectedRequest.location}</p>
                    <p className="text-sm text-gray-600">Date: {new Date(selectedRequest.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                {selectedRequest.response && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 className="font-medium text-green-900 mb-2">Department Response:</h5>
                    <p className="text-sm text-green-800">{selectedRequest.response}</p>
                    <p className="text-xs text-green-600 mt-2">
                      Responded on: {new Date(selectedRequest.responseDate).toLocaleString()}
                    </p>
                  </div>
                )}

                {selectedRequest.status !== 'responded' && selectedRequest.status !== 'closed' && (
                  <div className="mt-6">
                    <label htmlFor="response" className="block text-sm font-medium text-gray-700 mb-2">
                      Department Response
                    </label>
                    <textarea
                      id="response"
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your response to this citizen request..."
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Close
                </button>
                {selectedRequest.status !== 'responded' && selectedRequest.status !== 'closed' && (
                  <button
                    onClick={() => handleRespondToRequest(selectedRequest.id)}
                    disabled={!responseText.trim() || isResponding}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-md flex items-center space-x-2"
                  >
                    {isResponding ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Response</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentDashboard;