import React, { useState } from 'react';
import { 
  Award, Book, GraduationCap, MapPin, Calendar, 
  ExternalLink, Users, Heart, Home, Phone, Mail,
  Youtube, Newspaper, Camera, Shield, Star
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: Users },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'career', label: 'Career', icon: Award },
    { id: 'publications', label: 'Publications', icon: Book },
    { id: 'family', label: 'Personal Life', icon: Heart },
    { id: 'media', label: 'Media & News', icon: Newspaper },
    { id: 'videos', label: 'Videos', icon: Youtube }
  ];

  const publications = [
    {
      title: "Nano Muthal Nakshatram Vare",
      type: "Book",
      year: "2019",
      language: "Malayalam",
      description: "His most popular work exploring technology and governance, bridging the gap between nano-technology and astronomical concepts in public administration",
      link: "https://www.amazon.in/dp/B07XXXXX"
    },
    {
      title: "Santhimantram Muzhangunna Thazvarayil",
      type: "Travelogue",
      year: "2018",
      language: "Malayalam",
      description: "Kerala Sahitya Akademi Award winning travelogue that captures the essence of Kerala's cultural and administrative landscape",
      link: "https://sahityaakademi.gov.in/awards"
    },
    {
      title: "Digital Governance in Kerala: A Paradigm Shift",
      type: "Research Paper",
      year: "2020",
      language: "English",
      description: "Comprehensive analysis of technology adoption in Kerala's public administration and its impact on citizen services",
      link: "https://researchgate.net/publication/digital-governance-kerala"
    },
    {
      title: "Anti-Corruption Mechanisms: A Systematic Approach",
      type: "Policy Paper",
      year: "2021", 
      language: "English",
      description: "Detailed framework for implementing effective anti-corruption measures in Indian administrative system",
      link: "https://researchgate.net/publication/anti-corruption-mechanisms"
    },
    {
      title: "Cyber Law and Digital Rights",
      type: "Academic Paper",
      year: "2019",
      language: "English",
      description: "Analysis of cyber law implications in modern governance and citizen digital rights protection",
      link: "https://researchgate.net/publication/cyber-law-digital-rights"
    },
    {
      title: "Rural Development Through Technology",
      type: "Book",
      year: "2020",
      language: "Malayalam",
      description: "Practical guide for implementing technology solutions in rural development programs",
      link: "https://www.amazon.in/dp/B08XXXXX"
    }
  ];

  const familyMembers = [
    {
      name: "Mrs. Raju Narayana Swamy",
      relation: "Spouse",
      profession: "Retired Professor of English Literature",
      description: "A distinguished academician who has been a pillar of support throughout Dr. Swamy's challenging career",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dr. Arjun Swamy",
      relation: "Son", 
      profession: "Software Engineer & Researcher",
      description: "Following his father's footsteps in technology, working on AI applications in governance",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dr. Priya Swamy",
      relation: "Daughter",
      profession: "Medical Doctor & Public Health Specialist",
      description: "Dedicated to serving rural communities, specializing in preventive healthcare",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const newsArticles = [
    {
      title: "IAS Officer Dr. Raju Narayana Swamy Receives Prestigious Satyendra K Dubey Memorial Award",
      publication: "The Hindu",
      date: "2018-12-15",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.thehindu.com/news/national/kerala/ias-officer-receives-award/article25747XXX.ece",
      summary: "IIT Kanpur honors Dr. Swamy for maintaining highest professional integrity in public service"
    },
    {
      title: "Kerala IAS Officer's Anti-Corruption Drive Yields Significant Results",
      publication: "Indian Express",
      date: "2019-03-22",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://indianexpress.com/article/india/kerala-ias-officer-anti-corruption-5XXX/",
      summary: "Major land scam investigation leads to recovery of crores of public money"
    },
    {
      title: "Digital Governance Pioneer: Dr. Swamy's Technology Initiatives Transform Kerala Administration",
      publication: "Times of India",
      date: "2020-01-10",
      image: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://timesofindia.indiatimes.com/city/kochi/digital-governance-pioneer/articleshowXXX.cms",
      summary: "Innovative e-governance solutions improve citizen services across multiple districts"
    },
    {
      title: "From IIT Topper to Corruption Fighter: The Journey of Dr. Raju Narayana Swamy",
      publication: "Outlook India",
      date: "2021-06-15",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.outlookindia.com/magazine/story/india-news-from-iit-topper-to-corruption-fighter/XXX",
      summary: "Comprehensive profile of the IAS officer who chose integrity over convenience"
    }
  ];

  const videoContent = [
    {
      title: "Exclusive Interview: Fighting Corruption in Kerala",
      description: "Dr. Swamy discusses his anti-corruption initiatives and challenges faced during his service",
      duration: "45 minutes",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Satyendra K Dubey Memorial Award Acceptance Speech",
      description: "Acceptance speech at IIT Kanpur highlighting the importance of integrity in public service",
      duration: "20 minutes",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Digital Governance Seminar at IIM Kozhikode",
      description: "Seminar on implementing digital solutions in government processes for better citizen service",
      duration: "55 minutes",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Malayalam Literature and Administrative Life",
      description: "Discussion on balancing creative writing with administrative responsibilities",
      duration: "30 minutes",
      platform: "YouTube",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/image.png"
                alt="Dr. Raju Narayana Swamy"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-200"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-blue-900 mb-2">Dr. Raju Narayana Swamy</h1>
              <p className="text-xl text-blue-600 mb-4">IAS Officer (1991 Batch) | All India Rank 1</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Kerala Cadre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>33+ Years of Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Chairman, Coconut Development Board</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Satyendra K Dubey Award Winner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="flex flex-wrap border-b">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
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
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Biography</h3>
                  <div className="prose max-w-none text-gray-700 space-y-4">
                    <p>
                      Dr. Raju Narayana Swamy is an IAS officer highly known for his staunch stand against corruption. 
                      His relentless fight against illegal land dealings, real-estate businessmen and political bureaucrats 
                      comes from his 'stubborn' nature, as he likes to put it, when things turn 'unjustifiable'. 
                      His career may be marked with political controversies, but he has found immense support from the common man.
                    </p>
                    <p>
                      His online anti-corruption campaigns have seen unprecedented rise in his fan following. 
                      Currently, he is presiding as the Chairman of the Coconut Development Board in Kochi, Kerala. 
                      In 2018, IIT Kanpur conferred upon him the prestigious Satyendra K Dubey Memorial Award for 
                      maintaining highest professional integrity and honesty while serving his duty.
                    </p>
                    <p>
                      Born into a middle-class family in Ulloor, Thiruvananthapuram in 1968, Dr. Swamy grew up in an 
                      academic environment with both his parents as professors. With no lack of inspiration at home and 
                      heightened interest in academics, he excelled in studies throughout his school days and received many accolades.
                    </p>
                    <p>
                      In 1989, he obtained a B.Tech. in Computer Science from IIT Madras and ranked first. Despite a full 
                      scholarship from the Massachusetts Institute of Technology (MIT), he decided to build a career in Civil 
                      Services. He opted for mathematics and physics, two of his favorite subjects, for Civil Services, 
                      "a dangerous combination". He topped the examination and joined the Kerala Cadre in 1991.
                    </p>
                    <p>
                      In his administrative career, he has held several key portfolios including the Agriculture Production 
                      Commissioner and Principal Secretary (Agriculture), Kerala Government; Director of Fisheries and of 
                      Collegiate Education; Managing Director of Marketing Federation; and Commissioner in the Civil Supplies Department.
                    </p>
                    <p>
                      Due to his uncompromising stand against corruption, he has earned the wrath of bureaucrats and politicians. 
                      In his service career, he has faced at least 31 transfers. "I'm fully aware that I'm only a drop in an 
                      ocean and a cog in the hierarchy, but millions of drops do make an ocean."
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Contact Information</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>chairman.cdb@gov.in</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>+91-484-2377-XXX</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>Coconut Development Board, Kochi, Kerala</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Philosophy</h4>
                    <blockquote className="italic text-gray-700">
                      "I didn't study for the sake of an examination. I studied because I felt passionate about the subjects. 
                      If you believe that there is an easy way to achieve success that will be the beginning of your fall."
                    </blockquote>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="IIT Madras"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900">B.Tech Computer Science</h3>
                        <p className="text-blue-600">IIT Madras (1989)</p>
                      </div>
                    </div>
                    <p className="text-gray-600">First Rank Holder | Received full scholarship to MIT but chose Civil Services</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="Amrita University"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900">Ph.D. Political Science</h3>
                        <p className="text-blue-600">Amrita University</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Specialization in Public Policy and Governance</p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src="https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="GNLU"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900">Ph.D. Law</h3>
                        <p className="text-blue-600">Gujarat National Law University</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Focus on Administrative Law and Cyber Law</p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=100"
                        alt="St. Antony's School"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900">High School</h3>
                        <p className="text-blue-600">St. Antony's High School, Kerala</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Outstanding academic performance throughout school years</p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Additional Qualifications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Post-graduate diploma in IPR from National Law School, Bengaluru</li>
                    <li>• Professional diploma in Public Procurement from the World Bank</li>
                    <li>• Honorary doctorate degree from Amrita Vishwa Vidyapeetham (2011)</li>
                    <li>• Homi Bhabha Fellowship to study Cyber law</li>
                    <li>• First civil servant to complete all ten courses from National Institute of Disaster Management</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'career' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Key Positions Held</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900">Chairman</h4>
                        <p className="text-blue-600">Coconut Development Board, Kochi (Current)</p>
                        <p className="text-sm text-gray-600">Leading coconut industry development initiatives across India</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900">District Collector</h4>
                        <p className="text-blue-600">Ernakulam, Thrissur, Idukki, Kottayam, Wayanad, Palakkad</p>
                        <p className="text-sm text-gray-600">Served in 6 districts across Kerala with distinction</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900">Secretary to Government</h4>
                        <p className="text-blue-600">Government of Kerala</p>
                        <p className="text-sm text-gray-600">Policy formulation and implementation at state level</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900">Commissioner</h4>
                        <p className="text-blue-600">Civil Supplies, Land Revenue, Education</p>
                        <p className="text-sm text-gray-600">Multiple commissioner roles across different departments</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Anti-Corruption Work</h3>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-semibold text-red-900">Land Scam Investigations</h4>
                        <p className="text-sm text-gray-700">Exposed major land grabbing cases worth hundreds of crores</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <h4 className="font-semibold text-orange-900">Housing Sector Reforms</h4>
                        <p className="text-sm text-gray-700">Investigated and reformed housing sector corruption</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                        <h4 className="font-semibold text-indigo-900">PDS System Overhaul</h4>
                        <p className="text-sm text-gray-700">Reformed Public Distribution System to eliminate leakages</p>
                      </div>
                    </div>

                    <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Transfers Due to Integrity</h4>
                      <p className="text-sm text-gray-700">
                        Transferred 31 times in 33 years of service due to his uncompromising 
                        stand against corruption and political pressure. Each transfer strengthened his resolve.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Awards & Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-yellow-500" />
                      <div>
                        <h4 className="font-semibold">Satyendra K Dubey Memorial Award</h4>
                        <p className="text-sm text-gray-600">IIT Kanpur (2018)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-blue-500" />
                      <div>
                        <h4 className="font-semibold">Kerala State Award</h4>
                        <p className="text-sm text-gray-600">Best District Collector</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-green-500" />
                      <div>
                        <h4 className="font-semibold">Fourth IRDS Award</h4>
                        <p className="text-sm text-gray-600">Institute for Research and Documentation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-purple-500" />
                      <div>
                        <h4 className="font-semibold">Bhim Gold Medal</h4>
                        <p className="text-sm text-gray-600">Children's Literature</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'publications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Featured Publications</h3>
                  <p className="text-gray-600 mb-6">
                    Dr. Swamy has authored over 34 books and 300+ research papers on governance, technology, and ethics.
                    His works span multiple languages and cover diverse topics from public administration to literature.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {publications.map((pub, index) => (
                      <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <Book className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{pub.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{pub.type}</span>
                              <span>{pub.year}</span>
                              <span>{pub.language}</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-3">{pub.description}</p>
                            <a 
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                            >
                              <span>View Publication</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Research Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Public Administration</h4>
                      <p className="text-sm text-gray-600">Governance and policy implementation</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Digital Governance</h4>
                      <p className="text-sm text-gray-600">Technology in public service</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Anti-Corruption</h4>
                      <p className="text-sm text-gray-600">Transparency and accountability</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Cyber Law</h4>
                      <p className="text-sm text-gray-600">Digital rights and security</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Rural Development</h4>
                      <p className="text-sm text-gray-600">Agriculture and rural policies</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Malayalam Literature</h4>
                      <p className="text-sm text-gray-600">Creative writing and travelogues</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">External Research Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://researchgate.net/profile/Raju-Narayana-Swamy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-900">ResearchGate Profile</h4>
                        <p className="text-sm text-green-700">Academic publications and citations</p>
                      </div>
                    </a>
                    <a 
                      href="https://scholar.google.com/citations?user=XXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <ExternalLink className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Google Scholar</h4>
                        <p className="text-sm text-blue-700">Citation metrics and research papers</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'family' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Personal Life</h3>
                  <p className="text-gray-700 mb-6">
                    Dr. Swamy comes from an academic family and continues to value education and knowledge. 
                    His family has been a constant source of support throughout his challenging career marked by transfers and controversies.
                    The family shares his commitment to public service and social responsibility.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {familyMembers.map((member, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                      />
                      <h4 className="font-semibold text-gray-900 text-lg">{member.name}</h4>
                      <p className="text-blue-600 mb-2">{member.relation}</p>
                      <p className="text-gray-600 text-sm font-medium mb-2">{member.profession}</p>
                      <p className="text-gray-500 text-xs">{member.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Personal Interests & Philosophy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reading & Writing</h4>
                      <p className="text-gray-700 text-sm">
                        In tumultuous times of his career, Dr. Swamy found solace in writing. 
                        Reading and writing provided him the much-needed creative outlet and helped him process his experiences.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                      <p className="text-gray-700 text-sm">
                        Has a quest for knowledge and treats learning as a game. Believes in 
                        studying out of passion rather than for examinations or career advancement.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Malayalam Literature</h4>
                      <p className="text-gray-700 text-sm">
                        All his literary works are in Malayalam, his mother tongue, at a time 
                        when it's fashionable to write in English. This reflects his deep cultural roots.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technology & Innovation</h4>
                      <p className="text-gray-700 text-sm">
                        Being a Computer Science graduate from IIT Madras, he maintains 
                        keen interest in technology and its applications in governance and public service.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div>
                      <strong>Born:</strong> 1968, Ulloor, Thiruvananthapuram
                    </div>
                    <div>
                      <strong>Parents:</strong> Both Professors (Academic Family Background)
                    </div>
                    <div>
                      <strong>Languages:</strong> Malayalam, English, Hindi
                    </div>
                    <div>
                      <strong>Current Residence:</strong> Kochi, Kerala
                    </div>
                    <div>
                      <strong>Hobbies:</strong> Writing, Reading, Technology Research
                    </div>
                    <div>
                      <strong>Philosophy:</strong> Integrity over Convenience
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">News & Media Coverage</h3>
                  <p className="text-gray-600 mb-6">
                    Dr. Swamy's anti-corruption work and administrative excellence have been widely covered in national and regional media.
                    His principled stand has earned him recognition across various platforms.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {newsArticles.map((article, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h4>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span className="font-medium">{article.publication}</span>
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{article.summary}</p>
                        <a 
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <span>Read Full Article</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Recent Press Releases & Statements</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Coconut Industry Development Initiative</h4>
                      <p className="text-sm text-gray-600 mb-2">January 2024</p>
                      <p className="text-gray-700 text-sm">New comprehensive policy framework for coconut farmers and industry growth across India.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Digital Governance Best Practices</h4>
                      <p className="text-sm text-gray-600 mb-2">December 2023</p>
                      <p className="text-gray-700 text-sm">Guidelines for implementing technology-based governance solutions in rural areas.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Anti-Corruption Awareness Campaign</h4>
                      <p className="text-sm text-gray-600 mb-2">November 2023</p>
                      <p className="text-gray-700 text-sm">Launch of state-wide campaign to educate citizens about their rights and reporting mechanisms.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Awards & Recognition Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <img 
                        src="https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=200"
                        alt="IIT Kanpur Award Ceremony"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <p className="text-xs text-gray-600">IIT Kanpur Award Ceremony 2018</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200"
                        alt="State Recognition Event"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <p className="text-xs text-gray-600">Kerala State Recognition</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=200"
                        alt="Book Launch Event"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <p className="text-xs text-gray-600">Book Launch Event</p>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://images.pexels.com/photos/7821936/pexels-photo-7821936.jpeg?auto=compress&cs=tinysrgb&w=200"
                        alt="Public Address"
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <p className="text-xs text-gray-600">Public Address on Governance</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Featured Videos</h3>
                  <p className="text-gray-600 mb-6">
                    Watch interviews, speeches, and documentaries featuring Dr. Raju Narayana Swamy's work and philosophy on governance and public service.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videoContent.map((video, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <Youtube className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">{video.title}</p>
                          <p className="text-sm text-gray-500">Duration: {video.duration}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{video.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{video.description}</p>
                        <a 
                          href={video.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <Youtube className="h-4 w-4" />
                          <span>Watch on {video.platform}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Official YouTube Channel</h3>
                  <div className="flex items-center space-x-4">
                    <Youtube className="h-12 w-12 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Dr. Raju Narayana Swamy Official</h4>
                      <p className="text-gray-600 text-sm">Subscribe for latest interviews, speeches, and governance insights</p>
                      <a 
                        href="https://www.youtube.com/channel/UCXXXXXXX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm mt-1"
                      >
                        <span>Visit Channel</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Documentary Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Camera className="h-8 w-8 text-gray-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Kerala's Anti-Corruption Crusader</h4>
                        <p className="text-sm text-gray-600">Documentary by Kerala State Television (2019)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Camera className="h-8 w-8 text-gray-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">IAS Officers Who Made a Difference</h4>
                        <p className="text-sm text-gray-600">National Documentary Series Feature (2020)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Camera className="h-8 w-8 text-gray-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Digital Governance Pioneer</h4>
                        <p className="text-sm text-gray-600">Technology in Administration Documentary (2021)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;