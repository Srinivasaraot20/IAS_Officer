import React, { useState } from 'react';
import { useRequests } from '../context/RequestContext';
import { Search, Clock, CheckCircle, AlertCircle, MessageCircle, User, Phone, Building } from 'lucide-react';

const TrackRequest = () => {
  const { getRequestsByEmail } = useRequests();
  const [email, setEmail] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // 20+ sample email addresses for testing
  const sampleEmails = [
    'priya.sharma@email.com',
    'rajesh.k@email.com',
    'meera.nair@email.com',
    'arun.menon@email.com',
    'lakshmi.pillai@email.com',
    'suresh.babu@email.com',
    'anitha.krishnan@email.com',
    'ravi.chandran@email.com',
    'deepa.nair@email.com',
    'vinod.kumar@email.com',
    'sita.devi@email.com',
    'manoj.varma@email.com',
    'geetha.menon@email.com',
    'ramesh.pillai@email.com',
    'kavitha.nair@email.com',
    'biju.thomas@email.com',
    'suma.devi@email.com',
    'ajay.kumar@email.com',
    'latha.menon@email.com',
    'krishnan.nair@email.com',
    'arjun.nair@email.com',
    'priya.krishnan@email.com',
    'rajesh.kumar@email.com',
    'meera.pillai@email.com',
    'arun.nair@email.com'
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'in-review':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      case 'responded':
        return <MessageCircle className="h-5 w-5 text-green-500" />;
      case 'closed':
        return <CheckCircle className="h-5 w-5 text-gray-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const results = getRequestsByEmail(email);
    setSearchResults(results);
    setHasSearched(true);
    setIsSearching(false);
  };

  const handleEmailClick = (emailAddress: string) => {
    setEmail(emailAddress);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Track Your Requests</h1>
            <p className="text-xl text-gray-600">
              Enter your email address to view the status of your submitted requests and responses from departments
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Searching...</span>
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4" />
                        <span>Search</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-semibold">
                  Search Results for: {email}
                </h2>
                <p>Found {searchResults.length} request(s)</p>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-8 text-center">
                  <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Requests Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any requests associated with this email address.
                  </p>
                  <p className="text-sm text-gray-500">
                    Please check your email address for typos or submit a new request if you haven't already.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {searchResults.map((request) => (
                    <div key={request.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                              {request.status.replace('-', ' ').toUpperCase()}
                            </span>
                            {request.urgency && (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                request.urgency === 'high' ? 'bg-red-100 text-red-800' :
                                request.urgency === 'medium' ? 'bg-orange-100 text-orange-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {request.urgency.toUpperCase()} PRIORITY
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{request.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Category: {request.category}</span>
                            <span>Location: {request.location}</span>
                            <span>Submitted: {new Date(request.createdAt).toLocaleDateString()}</span>
                            <span>Request ID: {request.id}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(request.status)}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="ml-4 border-l-2 border-gray-200 pl-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">Request Submitted</p>
                              <p className="text-xs text-gray-500">
                                {new Date(request.createdAt).toLocaleString()}
                              </p>
                              <p className="text-xs text-blue-600">
                                Forwarded to: {request.department?.charAt(0).toUpperCase() + request.department?.slice(1)} Department
                              </p>
                            </div>
                          </div>

                          {request.status !== 'pending' && (
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">Under Review</p>
                                <p className="text-xs text-gray-500">Request being evaluated by department team</p>
                              </div>
                            </div>
                          )}

                          {request.response && (
                            <div className="flex items-start space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">Response Received</p>
                                <p className="text-xs text-gray-500 mb-2">
                                  {request.responseDate && new Date(request.responseDate).toLocaleString()}
                                </p>
                                
                                {/* Verification Details */}
                                {request.verifiedBy && (
                                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Verified By:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-blue-800">
                                      <div className="flex items-center space-x-1">
                                        <User className="h-3 w-3" />
                                        <span>{request.verifiedBy.name}</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Building className="h-3 w-3" />
                                        <span>Emp ID: {request.verifiedBy.empId}</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Phone className="h-3 w-3" />
                                        <span>{request.verifiedBy.phone}</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Building className="h-3 w-3" />
                                        <span>{request.verifiedBy.department}</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                  <p className="text-sm text-green-800">{request.response}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Status-specific messages */}
                      {request.status === 'pending' && (
                        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-sm text-yellow-800">
                            Your request is in queue and will be reviewed soon. You will receive an email notification once there's an update.
                          </p>
                        </div>
                      )}

                      {request.status === 'in-review' && (
                        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <p className="text-sm text-blue-800">
                            Your request is currently being reviewed by the {request.department} department team. A response will be provided soon.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sample Email Addresses for Testing */}
          {!hasSearched && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Sample Email Addresses for Testing</h3>
              <p className="text-blue-800 mb-4">
                Click on any email address below to test the tracking system with existing requests:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {sampleEmails.map((emailAddress, index) => (
                  <button
                    key={index}
                    onClick={() => handleEmailClick(emailAddress)}
                    className="text-left p-3 bg-white border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="text-blue-700 font-medium">{emailAddress}</div>
                    <div className="text-blue-600 text-sm">Click to test</div>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> These are sample email addresses with pre-loaded requests for demonstration purposes. 
                  In a real system, you would only see requests associated with your actual email address.
                </p>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Request Status Meanings:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span><strong>Pending:</strong> Request received and in queue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <span><strong>In Review:</strong> Being evaluated by department</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <span><strong>Responded:</strong> Department has provided response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-gray-500" />
                    <span><strong>Closed:</strong> Request resolved and closed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Contact Support:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>If you can't find your request or need assistance:</p>
                  <p>Email: support@rajunarayanaswamy.gov.in</p>
                  <p>Phone: +91-484-2377-XXX</p>
                  <p>Office Hours: 9:00 AM - 5:00 PM (Mon-Fri)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRequest;