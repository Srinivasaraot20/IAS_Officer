import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, ExternalLink, Send, 
  Facebook, Twitter, Linkedin, Youtube,
  MessageSquare, Lightbulb, FileText, Users
} from 'lucide-react';

const Footer = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: '',
    type: 'feedback'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setFeedbackForm({ name: '', email: '', message: '', type: 'feedback' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({ ...prev, [name]: value }));
  };

  const quickLinks = [
    { label: 'About Dr. Swamy', href: '/profile' },
    { label: 'Education Hub', href: '/education-hub' },
    { label: 'Submit Request', href: '/submit-request' },
    { label: 'Track Request', href: '/track-request' },
    { label: 'Officer Dashboard', href: '/officer-login' },
    { label: 'Department Login', href: '/department-login' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/rajunarayanaswamy', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/rajunarayanaswamy', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/raju-narayana-swamy', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@rajunarayanaswamy', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Coconut Development Board</p>
                  <p className="text-gray-300">Kochi, Kerala, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">+91-484-2377-XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">chairman.cdb@gov.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media & External Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <a
                  href="https://en.wikipedia.org/wiki/Raju_Narayanaswamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Wikipedia Profile</span>
                </a>
                <a
                  href="https://researchgate.net/profile/Raju-Narayana-Swamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Research Publications</span>
                </a>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Feedback & Suggestions</h3>
            {submitted ? (
              <div className="bg-green-600 p-4 rounded-lg text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Thank you for your feedback!</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={feedbackForm.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={feedbackForm.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <select
                  name="type"
                  value={feedbackForm.type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="feedback">General Feedback</option>
                  <option value="suggestion">Feature Suggestion</option>
                  <option value="bug">Report Issue</option>
                  <option value="compliment">Compliment</option>
                </select>
                <textarea
                  name="message"
                  value={feedbackForm.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Feedback</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Dr. Raju Narayana Swamy, IAS. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Dedicated to transparent governance and citizen service.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/accessibility" className="hover:text-blue-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;