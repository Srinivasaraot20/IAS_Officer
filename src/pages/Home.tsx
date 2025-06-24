import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Book, Users, MapPin, Calendar, ExternalLink, Shield, Heart, GraduationCap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold mb-6">
                Dr. Raju Narayana Swamy
                <span className="block text-2xl text-yellow-300 mt-2">IAS Officer (1991 Batch) | All India Rank 1</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                A beacon of integrity and transparency in public service. Fighting corruption, 
                serving citizens, and building a better tomorrow for Kerala. Currently serving as 
                Chairman of the Coconut Development Board, Kochi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/submit-request"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Your Request
                </Link>
                <Link 
                  to="/profile"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <img 
                  src="/image.png" 
                  alt="Dr. Raju Narayana Swamy"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="mt-4 text-gray-800">
                  <p className="font-semibold">Current Position:</p>
                  <p className="text-sm">Chairman, Coconut Development Board, Kochi</p>
                  <p className="text-sm text-gray-600 mt-2">Kerala Cadre | 33+ Years of Distinguished Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">33+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">31</h3>
              <p className="text-gray-600">Transfers (For Integrity)</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">34+</h3>
              <p className="text-gray-600">Books Authored</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900">6</h3>
              <p className="text-gray-600">Districts Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">About Dr. Raju Narayana Swamy</h2>
            <div className="text-lg text-gray-700 mb-8 leading-relaxed text-left space-y-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Key Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satyendra K Dubey Memorial Award</h3>
              <p className="text-gray-600">Conferred by IIT Kanpur in 2018 for maintaining highest professional integrity and honesty while serving duty</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <Book className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kerala Sahitya Akademi Award</h3>
              <p className="text-gray-600">For his acclaimed travelogue "Santhimantram Muzhangunna Thazvarayil"</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Anti-Corruption Champion</h3>
              <p className="text-gray-600">Led numerous successful drives against corruption across Kerala, earning public trust and support</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <GraduationCap className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">All India Rank 1 in Civil Services, B.Tech from IIT Madras (First Rank), Multiple PhDs</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fourth IRDS Award</h3>
              <p className="text-gray-600">From Institute for Research and Documentation in Social Sciences, Lucknow</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <Heart className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bhim Gold Medal</h3>
              <p className="text-gray-600">Awarded for outstanding contribution to children's literature in Malayalam</p>
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Verified Digital Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="https://en.wikipedia.org/wiki/Raju_Narayanaswamy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <ExternalLink className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Wikipedia</h3>
                <p className="text-sm text-gray-600">Biography Overview</p>
              </div>
            </a>
            <a 
              href="https://iitk.ac.in/dora/profile/Dr-Raju-Narayana-Swamy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <Award className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="font-semibold">IIT Kanpur</h3>
                <p className="text-sm text-gray-600">Alumni Profile</p>
              </div>
            </a>
            <a 
              href="https://linkedin.com/in/raju-narayana-swamy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-gray-600">Professional Network</p>
              </div>
            </a>
            <a 
              href="https://researchgate.net/profile/Raju-Narayana-Swamy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <Book className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold">ResearchGate</h3>
                <p className="text-sm text-gray-600">Academic Research</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl italic mb-6">
              "I didn't study for the sake of an examination. I studied because I felt passionate about the subjects. 
              If you believe that there is an easy way to achieve success that will be the beginning of your fall."
            </blockquote>
            <p className="text-blue-200">- Dr. Raju Narayana Swamy, IAS</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Grievance or Suggestion?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Swamy believes in transparent governance and citizen participation. 
            Submit your requests and track their progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/submit-request"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Submit Request
            </Link>
            <Link 
              to="/track-request"
              className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Track Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;