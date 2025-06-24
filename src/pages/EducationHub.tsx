import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, Target, Trophy, Download, 
  Bookmark, Play, FileText, Users, Calendar, Star,
  ChevronRight, ExternalLink, Clock, Award
} from 'lucide-react';

const EducationHub = () => {
  const [activeTab, setActiveTab] = useState('guide');
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  const tabs = [
    { id: 'guide', label: 'How to Become IAS', icon: GraduationCap },
    { id: 'roadmap', label: 'Roadmap to Success', icon: Target },
    { id: 'resources', label: 'Top Resources', icon: BookOpen },
    { id: 'stories', label: 'Success Stories', icon: Trophy },
    { id: 'downloads', label: 'Study Materials', icon: Download },
    { id: 'bookmarks', label: 'My Bookmarks', icon: Bookmark }
  ];

  const toggleBookmark = (itemId: string) => {
    setBookmarkedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const studyResources = [
    {
      id: 'ncert',
      title: 'NCERT Books (Class 6-12)',
      description: 'Foundation books for UPSC preparation',
      type: 'Books',
      rating: 5,
      link: 'https://ncert.nic.in/textbook.php'
    },
    {
      id: 'laxmikanth',
      title: 'Indian Polity by M. Laxmikanth',
      description: 'Comprehensive guide for Indian Constitution and Governance',
      type: 'Book',
      rating: 5,
      link: 'https://www.amazon.in/dp/9352665414'
    },
    {
      id: 'unacademy',
      title: 'Unacademy UPSC Courses',
      description: 'Live classes and recorded lectures by top educators',
      type: 'Online Course',
      rating: 4,
      link: 'https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation'
    },
    {
      id: 'insights',
      title: 'InsightsIAS Current Affairs',
      description: 'Daily current affairs and monthly compilations',
      type: 'Website',
      rating: 5,
      link: 'https://www.insightsonindia.com/'
    }
  ];

  const successStories = [
    {
      id: 'story1',
      name: 'Tina Dabi',
      rank: 'AIR 1 (2015)',
      attempt: 'First Attempt',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Consistent study schedule, newspaper reading, and mock tests were key to my success.',
      tips: ['Read newspaper daily', 'Make concise notes', 'Practice answer writing', 'Stay consistent']
    },
    {
      id: 'story2',
      name: 'Kanishak Kataria',
      rank: 'AIR 1 (2018)',
      attempt: 'First Attempt',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'Engineering background helped in optional subject. Focus on basics and current affairs.',
      tips: ['Choose optional wisely', 'Focus on basics', 'Regular revision', 'Time management']
    }
  ];

  const downloadMaterials = [
    {
      id: 'polity',
      title: 'Indian Polity Notes',
      description: 'Comprehensive notes covering Constitution, Parliament, Judiciary',
      size: '2.5 MB',
      downloads: 15420,
      type: 'PDF'
    },
    {
      id: 'geography',
      title: 'Geography Quick Revision',
      description: 'Physical and Human Geography summary notes',
      size: '1.8 MB',
      downloads: 12350,
      type: 'PDF'
    },
    {
      id: 'history',
      title: 'Modern Indian History',
      description: 'From 1857 to Independence - detailed timeline',
      size: '3.2 MB',
      downloads: 18900,
      type: 'PDF'
    },
    {
      id: 'economics',
      title: 'Indian Economy Basics',
      description: 'Economic concepts, budget analysis, and current issues',
      size: '2.1 MB',
      downloads: 14200,
      type: 'PDF'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl font-bold mb-4">UPSC IAS Education Hub</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive guide to UPSC Civil Services preparation. Learn from the best, 
              access quality resources, and follow proven strategies to achieve your IAS dreams.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="flex flex-wrap border-b overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === id
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'guide' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">How to Become an IAS Officer</h2>
                  <p className="text-gray-600 mb-8">
                    The Indian Administrative Service (IAS) is one of the most prestigious civil services in India. 
                    Here's your complete guide to joining this elite service.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                      <h3 className="text-xl font-semibold text-blue-900">Eligibility</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Age: 21-32 years (General category)</li>
                      <li>• Education: Bachelor's degree from recognized university</li>
                      <li>• Nationality: Indian citizen</li>
                      <li>• Attempts: 6 attempts (General), 9 (OBC), Unlimited (SC/ST)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                      <h3 className="text-xl font-semibold text-green-900">Preliminary Exam</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Paper 1: General Studies (100 questions)</li>
                      <li>• Paper 2: CSAT (80 questions)</li>
                      <li>• Duration: 2 hours each</li>
                      <li>• Qualifying nature (Paper 2)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                      <h3 className="text-xl font-semibold text-yellow-900">Main Exam</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 9 papers (7 counted for merit)</li>
                      <li>• Essay, General Studies (4 papers)</li>
                      <li>• Optional Subject (2 papers)</li>
                      <li>• Language papers (qualifying)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                      <h3 className="text-xl font-semibold text-purple-900">Interview</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Personality Test (275 marks)</li>
                      <li>• Duration: 45 minutes to 1 hour</li>
                      <li>• Panel of 4-5 members</li>
                      <li>• Tests personality, leadership qualities</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</div>
                      <h3 className="text-xl font-semibold text-red-900">Training</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Foundation Course (3 months)</li>
                      <li>• Professional Course (9 months)</li>
                      <li>• District Training (1 year)</li>
                      <li>• Probation period (2 years)</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</div>
                      <h3 className="text-xl font-semibold text-indigo-900">Career Path</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Sub-Divisional Magistrate</li>
                      <li>• District Collector</li>
                      <li>• Secretary to Government</li>
                      <li>• Cabinet Secretary (highest post)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Your Roadmap to UPSC Success</h2>
                  <p className="text-gray-600 mb-8">
                    A structured timeline to help you prepare systematically for the UPSC Civil Services Examination.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-blue-900">Phase 1: Foundation (Months 1-6)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Study Plan:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Complete NCERT books (6-12)</li>
                          <li>• Start newspaper reading habit</li>
                          <li>• Basic books for each subject</li>
                          <li>• Join test series for practice</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Daily 8-10 hours study</li>
                          <li>• Weekly mock tests</li>
                          <li>• Note-making practice</li>
                          <li>• Current affairs compilation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-green-900">Phase 2: Intensive Preparation (Months 7-12)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Study Plan:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Complete standard books</li>
                          <li>• Choose optional subject</li>
                          <li>• Previous year papers analysis</li>
                          <li>• Answer writing practice</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Daily answer writing</li>
                          <li>• Monthly full-length tests</li>
                          <li>• Revision cycles</li>
                          <li>• Group discussions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-yellow-600 mr-3" />
                      <h3 className="text-xl font-semibold text-yellow-900">Phase 3: Final Preparation (Months 13-18)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Study Plan:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Intensive revision</li>
                          <li>• Mock test series</li>
                          <li>• Interview preparation</li>
                          <li>• Current affairs focus</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Daily 3-4 mock tests</li>
                          <li>• Speed and accuracy practice</li>
                          <li>• Stress management</li>
                          <li>• Health maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Top UPSC Preparation Resources</h2>
                  <p className="text-gray-600 mb-8">
                    Curated list of the best books, websites, and courses recommended by toppers and experts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studyResources.map((resource) => (
                    <div key={resource.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                          <div className="flex items-center space-x-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{resource.type}</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < resource.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleBookmark(resource.id)}
                          className={`p-2 rounded-full transition-colors ${
                            bookmarkedItems.includes(resource.id)
                              ? 'bg-yellow-100 text-yellow-600'
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                          }`}
                        >
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <span>Access Resource</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'stories' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">First-Attempt Success Stories</h2>
                  <p className="text-gray-600 mb-8">
                    Learn from the experiences of candidates who cleared UPSC in their first attempt.
                  </p>
                </div>

                <div className="space-y-8">
                  {successStories.map((story) => (
                    <div key={story.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start space-x-6">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                {story.rank}
                              </span>
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {story.attempt}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Key Tips:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {story.tips.map((tip, index) => (
                                  <div key={index} className="flex items-center space-x-2">
                                    <ChevronRight className="h-4 w-4 text-green-600" />
                                    <span className="text-gray-700 text-sm">{tip}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Downloadable Study Materials</h2>
                  <p className="text-gray-600 mb-8">
                    Free downloadable notes, PDFs, and study materials for UPSC preparation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {downloadMaterials.map((material) => (
                    <div key={material.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{material.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <FileText className="h-4 w-4" />
                              <span>{material.type}</span>
                            </span>
                            <span>{material.size}</span>
                            <span className="flex items-center space-x-1">
                              <Download className="h-4 w-4" />
                              <span>{material.downloads.toLocaleString()}</span>
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleBookmark(material.id)}
                          className={`p-2 rounded-full transition-colors ${
                            bookmarkedItems.includes(material.id)
                              ? 'bg-yellow-100 text-yellow-600'
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                          }`}
                        >
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'bookmarks' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">My Bookmarks</h2>
                  <p className="text-gray-600 mb-8">
                    Your saved resources and study materials for quick access.
                  </p>
                </div>

                {bookmarkedItems.length === 0 ? (
                  <div className="text-center py-12">
                    <Bookmark className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Bookmarks Yet</h3>
                    <p className="text-gray-600">
                      Start bookmarking useful resources from other tabs to access them quickly here.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookmarkedItems.map((itemId) => {
                      const resource = studyResources.find(r => r.id === itemId) || 
                                     downloadMaterials.find(m => m.id === itemId);
                      if (!resource) return null;
                      
                      return (
                        <div key={itemId} className="bg-white border border-gray-200 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Bookmarked</span>
                            <button
                              onClick={() => toggleBookmark(itemId)}
                              className="text-red-600 hover:text-red-800 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;