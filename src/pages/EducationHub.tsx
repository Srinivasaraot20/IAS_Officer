import React, { useState } from 'react';
import { 
  GraduationCap, Book, Users, Download, Star, Clock, 
  Eye, ArrowRight, CheckCircle, Award, Target, Calendar,
  FileText, ExternalLink, Play, User, Trophy, Heart,
  BookOpen, PenTool, Globe, Lightbulb, TrendingUp
} from 'lucide-react';

const EducationHub = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to UPSC Preparation Strategy",
      author: "Dr. Raju Narayana Swamy",
      date: "2024-01-15",
      readTime: "15 min",
      views: "15,420",
      tags: ["Strategy", "Preparation", "UPSC"],
      excerpt: "A comprehensive strategy guide covering all aspects of UPSC preparation from basics to advanced techniques.",
      content: `
        <h2>Introduction to UPSC Preparation</h2>
        <p>The Union Public Service Commission (UPSC) Civil Services Examination is one of India's most prestigious and challenging competitive exams. Success requires a well-structured approach, dedication, and smart preparation strategies.</p>
        
        <h3>Phase 1: Foundation Building (Months 1-6)</h3>
        <h4>Understanding the Exam Pattern</h4>
        <ul>
          <li><strong>Preliminary Examination:</strong> Two objective papers (GS Paper I & CSAT Paper II)</li>
          <li><strong>Main Examination:</strong> Nine descriptive papers including Essay, GS Papers I-IV, Optional Subject Papers I-II, and Language Papers</li>
          <li><strong>Personality Test:</strong> Interview round for final selection</li>
        </ul>
        
        <h4>Building Strong Fundamentals</h4>
        <p>Start with NCERT books from Class 6-12 to build a solid foundation. Focus on:</p>
        <ul>
          <li>History: Ancient, Medieval, and Modern India</li>
          <li>Geography: Physical and Human Geography</li>
          <li>Polity: Indian Constitution and Governance</li>
          <li>Economics: Basic Economic Concepts</li>
          <li>Science: General Science and Technology</li>
        </ul>
        
        <h3>Phase 2: Intensive Preparation (Months 7-12)</h3>
        <h4>Standard Reference Books</h4>
        <ul>
          <li><strong>History:</strong> Bipan Chandra, Spectrum Modern History</li>
          <li><strong>Geography:</strong> G.C. Leong, Certificate Physical and Human Geography</li>
          <li><strong>Polity:</strong> M. Laxmikanth Indian Polity</li>
          <li><strong>Economics:</strong> Ramesh Singh Indian Economy</li>
          <li><strong>Environment:</strong> Shankar IAS Environment</li>
        </ul>
        
        <h4>Current Affairs Integration</h4>
        <p>Develop a systematic approach to current affairs:</p>
        <ul>
          <li>Read one national newspaper daily (The Hindu/Indian Express)</li>
          <li>Follow monthly current affairs magazines</li>
          <li>Maintain separate notes for static and dynamic portions</li>
          <li>Link current events with static syllabus topics</li>
        </ul>
        
        <h3>Phase 3: Test Series and Revision (Months 13-18)</h3>
        <h4>Mock Test Strategy</h4>
        <ul>
          <li>Join a reputed test series for both Prelims and Mains</li>
          <li>Attempt tests in exam-like conditions</li>
          <li>Analyze performance and identify weak areas</li>
          <li>Focus on time management and accuracy</li>
        </ul>
        
        <h4>Answer Writing Practice</h4>
        <p>For Mains preparation, consistent answer writing is crucial:</p>
        <ul>
          <li>Practice writing 10-mark answers in 150 words</li>
          <li>Develop a structured approach: Introduction-Body-Conclusion</li>
          <li>Use flowcharts, diagrams, and bullet points effectively</li>
          <li>Get your answers evaluated by mentors or peers</li>
        </ul>
        
        <h3>Advanced Strategies for Success</h3>
        <h4>Optional Subject Selection</h4>
        <p>Choose your optional subject based on:</p>
        <ul>
          <li>Academic background and interest</li>
          <li>Availability of study material and guidance</li>
          <li>Scoring potential and success rate</li>
          <li>Overlap with General Studies papers</li>
        </ul>
        
        <h4>Time Management Techniques</h4>
        <ul>
          <li>Create a realistic daily study schedule</li>
          <li>Allocate time for revision and current affairs</li>
          <li>Take regular breaks to avoid burnout</li>
          <li>Maintain work-life balance</li>
        </ul>
        
        <h3>Mental Health and Motivation</h3>
        <p>UPSC preparation is a marathon, not a sprint. Maintain your mental health by:</p>
        <ul>
          <li>Setting realistic goals and celebrating small victories</li>
          <li>Staying connected with family and friends</li>
          <li>Engaging in physical exercise and hobbies</li>
          <li>Seeking support when needed</li>
        </ul>
        
        <h3>Final Tips for Success</h3>
        <ul>
          <li>Consistency is more important than intensity</li>
          <li>Quality of study matters more than quantity</li>
          <li>Regular revision is the key to retention</li>
          <li>Stay updated with current affairs till the last day</li>
          <li>Believe in yourself and stay motivated</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Time Management Techniques for UPSC Aspirants",
      author: "Dr. Raju Narayana Swamy",
      date: "2024-01-10",
      readTime: "12 min",
      views: "12,350",
      tags: ["Time Management", "Productivity", "Study Tips"],
      excerpt: "Learn effective time management strategies to maximize your preparation efficiency.",
      content: `
        <h2>The Art of Time Management in UPSC Preparation</h2>
        <p>Time management is the cornerstone of successful UPSC preparation. With a vast syllabus and limited time, aspirants must optimize every hour of their study schedule.</p>
        
        <h3>Creating an Effective Study Schedule</h3>
        <h4>Daily Time Allocation</h4>
        <ul>
          <li><strong>Morning (6:00-9:00 AM):</strong> Current Affairs and Newspaper Reading</li>
          <li><strong>Morning (9:00-12:00 PM):</strong> Core Subject Study (High concentration period)</li>
          <li><strong>Afternoon (1:00-4:00 PM):</strong> Optional Subject or Weak Areas</li>
          <li><strong>Evening (5:00-8:00 PM):</strong> Revision and Note Making</li>
          <li><strong>Night (8:00-10:00 PM):</strong> Answer Writing Practice</li>
        </ul>
        
        <h4>Weekly Planning Strategy</h4>
        <ul>
          <li><strong>Monday-Tuesday:</strong> History and Culture</li>
          <li><strong>Wednesday-Thursday:</strong> Geography and Environment</li>
          <li><strong>Friday:</strong> Polity and Governance</li>
          <li><strong>Saturday:</strong> Economics and Social Issues</li>
          <li><strong>Sunday:</strong> Science & Technology, Current Affairs Compilation</li>
        </ul>
        
        <h3>The Pomodoro Technique for UPSC</h3>
        <p>Adapt the Pomodoro Technique for intensive study sessions:</p>
        <ul>
          <li>Study for 45 minutes with complete focus</li>
          <li>Take a 10-15 minute break</li>
          <li>After 3 sessions, take a longer 30-minute break</li>
          <li>Use breaks for physical movement or relaxation</li>
        </ul>
        
        <h3>Prioritization Matrix for UPSC Topics</h3>
        <h4>High Priority - High Weightage Topics</h4>
        <ul>
          <li>Indian Polity and Constitution</li>
          <li>Modern Indian History</li>
          <li>Current Affairs (National and International)</li>
          <li>Geography (Physical and Human)</li>
        </ul>
        
        <h4>Medium Priority Topics</h4>
        <ul>
          <li>Ancient and Medieval History</li>
          <li>Economics and Social Development</li>
          <li>Science and Technology</li>
          <li>Environment and Ecology</li>
        </ul>
        
        <h3>Time-Saving Techniques</h3>
        <h4>Smart Note-Making</h4>
        <ul>
          <li>Use mind maps for complex topics</li>
          <li>Create flowcharts for processes and procedures</li>
          <li>Maintain separate notebooks for different subjects</li>
          <li>Use color coding for better retention</li>
        </ul>
        
        <h4>Efficient Reading Strategies</h4>
        <ul>
          <li>Skim through content first to get an overview</li>
          <li>Focus on headings, subheadings, and key points</li>
          <li>Use active reading techniques with questions</li>
          <li>Summarize each chapter in your own words</li>
        </ul>
        
        <h3>Technology Tools for Time Management</h3>
        <ul>
          <li><strong>Study Apps:</strong> Forest, Focus Keeper for concentration</li>
          <li><strong>Note-Taking:</strong> Notion, Evernote for digital notes</li>
          <li><strong>Scheduling:</strong> Google Calendar for time blocking</li>
          <li><strong>Progress Tracking:</strong> Habitica for habit formation</li>
        </ul>
        
        <h3>Avoiding Time Wasters</h3>
        <ul>
          <li>Limit social media usage during study hours</li>
          <li>Avoid perfectionism in note-making</li>
          <li>Don't get stuck on difficult topics for too long</li>
          <li>Minimize distractions in your study environment</li>
        </ul>
        
        <h3>Revision Time Management</h3>
        <h4>The 3-2-1 Revision Strategy</h4>
        <ul>
          <li><strong>3 months before exam:</strong> Complete first revision</li>
          <li><strong>2 months before exam:</strong> Second revision with focus on weak areas</li>
          <li><strong>1 month before exam:</strong> Quick revision and current affairs</li>
        </ul>
        
        <h3>Maintaining Work-Life Balance</h3>
        <ul>
          <li>Allocate time for physical exercise (30 minutes daily)</li>
          <li>Maintain social connections (1-2 hours weekly)</li>
          <li>Pursue hobbies for mental relaxation</li>
          <li>Ensure adequate sleep (7-8 hours daily)</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "How to Choose the Right Optional Subject",
      author: "Dr. Raju Narayana Swamy",
      date: "2024-01-08",
      readTime: "10 min",
      views: "18,900",
      tags: ["Optional Subject", "Strategy", "Mains"],
      excerpt: "Factors to consider when selecting your optional subject for UPSC Mains.",
      content: `
        <h2>Strategic Guide to Optional Subject Selection</h2>
        <p>Choosing the right optional subject can make or break your UPSC Mains performance. This decision requires careful analysis of multiple factors.</p>
        
        <h3>Key Factors for Optional Subject Selection</h3>
        <h4>1. Academic Background and Interest</h4>
        <ul>
          <li>Choose subjects related to your graduation or post-graduation</li>
          <li>Consider subjects you enjoyed studying in college</li>
          <li>Assess your natural aptitude and interest level</li>
          <li>Evaluate your comfort with the subject's methodology</li>
        </ul>
        
        <h4>2. Availability of Study Material</h4>
        <ul>
          <li>Check for comprehensive books and study materials</li>
          <li>Ensure availability of coaching and guidance</li>
          <li>Look for online resources and video lectures</li>
          <li>Verify access to previous years' question papers</li>
        </ul>
        
        <h4>3. Scoring Potential and Success Rate</h4>
        <ul>
          <li>Analyze average scores in different optional subjects</li>
          <li>Study success stories of toppers with various optionals</li>
          <li>Consider the marking pattern and examiner expectations</li>
          <li>Evaluate the predictability of questions</li>
        </ul>
        
        <h3>Popular Optional Subjects Analysis</h3>
        
        <h4>Literature Subjects</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Relatively easier to understand and remember</li>
          <li>Less technical content compared to other subjects</li>
          <li>Good scoring potential with proper preparation</li>
          <li>Helps in Essay and General Studies papers</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Limited career relevance outside UPSC</li>
          <li>Requires extensive reading and memorization</li>
          <li>Subjective evaluation by examiners</li>
        </ul>
        
        <h4>Geography</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Significant overlap with General Studies papers</li>
          <li>Factual and objective content</li>
          <li>Maps and diagrams can enhance answers</li>
          <li>Current affairs integration possible</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Vast syllabus requiring extensive preparation</li>
          <li>Need for map practice and diagram drawing</li>
          <li>Technical aspects can be challenging</li>
        </ul>
        
        <h4>History</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Excellent overlap with General Studies</li>
          <li>Helps in Essay writing and current affairs</li>
          <li>Interesting subject matter</li>
          <li>Good availability of study materials</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Extensive memorization required</li>
          <li>Vast syllabus covering different periods</li>
          <li>Need for analytical and interpretative skills</li>
        </ul>
        
        <h4>Public Administration</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Highly relevant for civil services career</li>
          <li>Good overlap with General Studies Paper II</li>
          <li>Conceptual clarity helps in interview</li>
          <li>Current affairs integration possible</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Abstract concepts can be difficult</li>
          <li>Limited availability of comprehensive materials</li>
          <li>Requires understanding of administrative processes</li>
        </ul>
        
        <h4>Sociology</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Excellent overlap with General Studies papers</li>
          <li>Helps in understanding social issues</li>
          <li>Good for Essay and Interview preparation</li>
          <li>Relatively scoring subject</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Abstract concepts and theories</li>
          <li>Need for sociological perspective</li>
          <li>Requires extensive reading of thinkers</li>
        </ul>
        
        <h3>Science and Technical Subjects</h3>
        
        <h4>Mathematics</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Objective and precise answers</li>
          <li>No ambiguity in evaluation</li>
          <li>Can score very high marks</li>
          <li>Less time-consuming if concepts are clear</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>High risk if preparation is inadequate</li>
          <li>No partial marking for wrong answers</li>
          <li>Requires strong mathematical foundation</li>
          <li>Limited overlap with General Studies</li>
        </ul>
        
        <h4>Engineering Subjects</h4>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Leverage engineering background</li>
          <li>Technical knowledge advantage</li>
          <li>Objective and factual content</li>
          <li>Good career relevance</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Limited overlap with General Studies</li>
          <li>Highly technical and specialized</li>
          <li>May not help in other papers</li>
          <li>Requires continuous practice</li>
        </ul>
        
        <h3>Decision-Making Framework</h3>
        
        <h4>Step 1: Self-Assessment</h4>
        <ul>
          <li>Evaluate your academic strengths and weaknesses</li>
          <li>Assess your interest and motivation levels</li>
          <li>Consider your available preparation time</li>
          <li>Analyze your learning style and preferences</li>
        </ul>
        
        <h4>Step 2: Research and Analysis</h4>
        <ul>
          <li>Study the detailed syllabus of shortlisted subjects</li>
          <li>Analyze previous years' question papers</li>
          <li>Research success stories and failure cases</li>
          <li>Consult with mentors and successful candidates</li>
        </ul>
        
        <h4>Step 3: Trial Period</h4>
        <ul>
          <li>Study each shortlisted subject for 2-3 weeks</li>
          <li>Attempt previous years' questions</li>
          <li>Assess your comfort level and progress</li>
          <li>Evaluate the time required for completion</li>
        </ul>
        
        <h4>Step 4: Final Decision</h4>
        <ul>
          <li>Choose the subject with the best overall fit</li>
          <li>Commit to your decision and avoid changing</li>
          <li>Develop a comprehensive preparation strategy</li>
          <li>Start intensive preparation immediately</li>
        </ul>
        
        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Choosing based solely on scoring potential</li>
          <li>Ignoring personal interest and aptitude</li>
          <li>Changing optional subject multiple times</li>
          <li>Not considering the time investment required</li>
          <li>Following others' choices without analysis</li>
        </ul>
        
        <h3>Preparation Strategy After Selection</h3>
        <ul>
          <li>Create a detailed study plan for both papers</li>
          <li>Collect all necessary study materials</li>
          <li>Join test series specific to your optional</li>
          <li>Practice answer writing regularly</li>
          <li>Stay updated with recent developments</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Answer Writing Techniques for UPSC Mains",
      author: "Dr. Raju Narayana Swamy",
      date: "2024-01-05",
      readTime: "18 min",
      views: "22,100",
      tags: ["Answer Writing", "Mains", "Technique"],
      excerpt: "Master the art of answer writing with proven techniques and examples.",
      content: `
        <h2>Mastering the Art of Answer Writing</h2>
        <p>Answer writing is the most crucial skill for UPSC Mains success. It's not just about what you know, but how effectively you present your knowledge within the given word limit and time constraints.</p>
        
        <h3>Understanding the UPSC Answer Writing Framework</h3>
        
        <h4>The UPSC Evaluation Criteria</h4>
        <ul>
          <li><strong>Content (40%):</strong> Factual accuracy, depth of knowledge, and relevance</li>
          <li><strong>Structure (25%):</strong> Logical flow, coherence, and organization</li>
          <li><strong>Presentation (20%):</strong> Language, clarity, and readability</li>
          <li><strong>Innovation (15%):</strong> Original thinking, examples, and contemporary relevance</li>
        </ul>
        
        <h4>Word Limit Guidelines</h4>
        <ul>
          <li><strong>10 marks:</strong> 150 words (7-8 lines)</li>
          <li><strong>15 marks:</strong> 250 words (12-13 lines)</li>
          <li><strong>20 marks:</strong> 400 words (20-22 lines)</li>
          <li><strong>25 marks:</strong> 500 words (25-27 lines)</li>
        </ul>
        
        <h3>The Universal Answer Structure</h3>
        
        <h4>Introduction (20% of word limit)</h4>
        <p><strong>Purpose:</strong> Set the context and define key terms</p>
        <p><strong>Techniques:</strong></p>
        <ul>
          <li>Start with a relevant quote or statistic</li>
          <li>Define key terms mentioned in the question</li>
          <li>Provide brief background or context</li>
          <li>State your thesis or approach</li>
        </ul>
        
        <h4>Body (70% of word limit)</h4>
        <p><strong>Purpose:</strong> Present your arguments, analysis, and evidence</p>
        <p><strong>Structure Options:</strong></p>
        <ul>
          <li><strong>Thematic Approach:</strong> Organize by themes or dimensions</li>
          <li><strong>Chronological Approach:</strong> Present information in time sequence</li>
          <li><strong>Comparative Approach:</strong> Compare different perspectives or cases</li>
          <li><strong>Problem-Solution Approach:</strong> Identify issues and propose solutions</li>
        </ul>
        
        <h4>Conclusion (10% of word limit)</h4>
        <p><strong>Purpose:</strong> Summarize key points and provide way forward</p>
        <p><strong>Elements:</strong></p>
        <ul>
          <li>Summarize main arguments</li>
          <li>Provide balanced perspective</li>
          <li>Suggest way forward or recommendations</li>
          <li>End with a forward-looking statement</li>
        </ul>
        
        <h3>Question-Type Specific Strategies</h3>
        
        <h4>Factual Questions</h4>
        <p><strong>Approach:</strong> Direct, comprehensive, and well-structured</p>
        <p><strong>Example:</strong> "Discuss the features of the Indian Constitution."</p>
        <ul>
          <li>Introduction: Brief overview of the Constitution</li>
          <li>Body: Categorize features (Structural, Procedural, Philosophical)</li>
          <li>Conclusion: Significance and contemporary relevance</li>
        </ul>
        
        <h4>Analytical Questions</h4>
        <p><strong>Approach:</strong> Critical examination with multiple perspectives</p>
        <p><strong>Example:</strong> "Analyze the impact of globalization on Indian agriculture."</p>
        <ul>
          <li>Introduction: Define globalization and its relevance to agriculture</li>
          <li>Body: Positive impacts, negative impacts, case studies</li>
          <li>Conclusion: Balanced assessment and way forward</li>
        </ul>
        
        <h4>Evaluative Questions</h4>
        <p><strong>Approach:</strong> Balanced assessment with judgment</p>
        <p><strong>Example:</strong> "Evaluate the effectiveness of MGNREGA."</p>
        <ul>
          <li>Introduction: Brief about MGNREGA and evaluation criteria</li>
          <li>Body: Successes, limitations, comparative analysis</li>
          <li>Conclusion: Overall assessment and recommendations</li>
        </ul>
        
        <h4>Contemporary Issues Questions</h4>
        <p><strong>Approach:</strong> Current relevance with policy implications</p>
        <p><strong>Example:</strong> "Discuss the challenges of climate change for India."</p>
        <ul>
          <li>Introduction: Global context and India's vulnerability</li>
          <li>Body: Specific challenges, current initiatives, gaps</li>
          <li>Conclusion: Comprehensive strategy needed</li>
        </ul>
        
        <h3>Advanced Answer Writing Techniques</h3>
        
        <h4>The POWER Technique</h4>
        <ul>
          <li><strong>P - Point:</strong> Make a clear point or argument</li>
          <li><strong>O - Order:</strong> Arrange points in logical sequence</li>
          <li><strong>W - Why:</strong> Explain the reasoning behind your point</li>
          <li><strong>E - Example:</strong> Support with relevant examples</li>
          <li><strong>R - Relevance:</strong> Connect to the broader context</li>
        </ul>
        
        <h4>The MECE Principle</h4>
        <p><strong>Mutually Exclusive, Collectively Exhaustive</strong></p>
        <ul>
          <li>Ensure no overlap between different points</li>
          <li>Cover all important aspects of the topic</li>
          <li>Avoid repetition and redundancy</li>
          <li>Maintain logical categorization</li>
        </ul>
        
        <h3>Effective Use of Examples and Case Studies</h3>
        
        <h4>Types of Examples</h4>
        <ul>
          <li><strong>Historical Examples:</strong> Past events and personalities</li>
          <li><strong>Contemporary Examples:</strong> Recent developments and current affairs</li>
          <li><strong>International Examples:</strong> Global best practices and comparisons</li>
          <li><strong>Statistical Data:</strong> Numbers and figures for substantiation</li>
        </ul>
        
        <h4>Example Integration Techniques</h4>
        <ul>
          <li>Use examples to illustrate abstract concepts</li>
          <li>Provide contrasting examples for balanced perspective</li>
          <li>Use local and international examples for comparison</li>
          <li>Ensure examples are recent and relevant</li>
        </ul>
        
        <h3>Visual Elements in Answer Writing</h3>
        
        <h4>Effective Use of Diagrams</h4>
        <ul>
          <li><strong>Flowcharts:</strong> For processes and procedures</li>
          <li><strong>Mind Maps:</strong> For complex relationships</li>
          <li><strong>Tables:</strong> For comparative analysis</li>
          <li><strong>Graphs:</strong> For statistical representation</li>
        </ul>
        
        <h4>Formatting Techniques</h4>
        <ul>
          <li>Use bullet points for listing</li>
          <li>Underline key terms and concepts</li>
          <li>Use numbering for sequential points</li>
          <li>Leave adequate white space for readability</li>
        </ul>
        
        <h3>Time Management in Answer Writing</h3>
        
        <h4>Time Allocation Strategy</h4>
        <ul>
          <li><strong>Reading and Planning (10%):</strong> Understand question and plan structure</li>
          <li><strong>Writing (80%):</strong> Actual answer writing</li>
          <li><strong>Review (10%):</strong> Check for errors and completeness</li>
        </ul>
        
        <h4>Speed Enhancement Techniques</h4>
        <ul>
          <li>Practice writing with a timer</li>
          <li>Develop standard templates for different question types</li>
          <li>Improve handwriting speed and legibility</li>
          <li>Use abbreviations and short forms appropriately</li>
        </ul>
        
        <h3>Common Mistakes and How to Avoid Them</h3>
        
        <h4>Content-Related Mistakes</h4>
        <ul>
          <li><strong>Factual Errors:</strong> Verify facts before writing</li>
          <li><strong>Irrelevant Content:</strong> Stay focused on the question</li>
          <li><strong>Superficial Treatment:</strong> Provide depth and analysis</li>
          <li><strong>Outdated Information:</strong> Use recent data and examples</li>
        </ul>
        
        <h4>Structural Mistakes</h4>
        <ul>
          <li><strong>Poor Introduction:</strong> Avoid vague or lengthy introductions</li>
          <li><strong>Illogical Flow:</strong> Maintain coherent progression of ideas</li>
          <li><strong>Weak Conclusion:</strong> Provide meaningful synthesis</li>
          <li><strong>Imbalanced Structure:</strong> Maintain proper proportion</li>
        </ul>
        
        <h4>Presentation Mistakes</h4>
        <ul>
          <li><strong>Poor Handwriting:</strong> Practice for legibility</li>
          <li><strong>Grammatical Errors:</strong> Proofread your answers</li>
          <li><strong>Exceeding Word Limit:</strong> Practice within constraints</li>
          <li><strong>Poor Formatting:</strong> Use proper spacing and organization</li>
        </ul>
        
        <h3>Practice Strategy for Answer Writing</h3>
        
        <h4>Daily Practice Routine</h4>
        <ul>
          <li>Write 2-3 answers daily across different subjects</li>
          <li>Focus on different question types each day</li>
          <li>Practice with strict time limits</li>
          <li>Get feedback from mentors or peers</li>
        </ul>
        
        <h4>Progressive Skill Development</h4>
        <ul>
          <li><strong>Week 1-2:</strong> Focus on structure and basic content</li>
          <li><strong>Week 3-4:</strong> Improve examples and case studies</li>
          <li><strong>Week 5-6:</strong> Enhance analytical depth</li>
          <li><strong>Week 7-8:</strong> Perfect time management and presentation</li>
        </ul>
        
        <h3>Technology Tools for Answer Writing Practice</h3>
        <ul>
          <li><strong>Online Platforms:</strong> ForumIAS, InsightsIAS for practice</li>
          <li><strong>Mobile Apps:</strong> Answer writing apps with timers</li>
          <li><strong>Digital Tools:</strong> Mind mapping software for planning</li>
          <li><strong>Evaluation Services:</strong> Professional answer evaluation</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "Current Affairs Strategy for UPSC",
      author: "Dr. Raju Narayana Swamy",
      date: "2024-01-03",
      readTime: "14 min",
      views: "16,750",
      tags: ["Current Affairs", "Strategy", "News"],
      excerpt: "How to effectively prepare current affairs for both Prelims and Mains.",
      content: `
        <h2>Comprehensive Current Affairs Strategy</h2>
        <p>Current affairs form the backbone of UPSC preparation, connecting static knowledge with dynamic developments. A systematic approach to current affairs can significantly boost your performance across all stages of the examination.</p>
        
        <h3>Understanding the Role of Current Affairs</h3>
        
        <h4>In Preliminary Examination</h4>
        <ul>
          <li>Direct questions from recent events (15-20 questions)</li>
          <li>Integration with static topics for conceptual questions</li>
          <li>Government schemes and policy initiatives</li>
          <li>International relations and bilateral agreements</li>
        </ul>
        
        <h4>In Main Examination</h4>
        <ul>
          <li>Examples and case studies for answer writing</li>
          <li>Contemporary relevance in essay topics</li>
          <li>Policy analysis and evaluation questions</li>
          <li>Integration with optional subject topics</li>
        </ul>
        
        <h4>In Personality Test</h4>
        <ul>
          <li>Discussion on recent developments</li>
          <li>Opinion on current policy issues</li>
          <li>Knowledge of recent appointments and awards</li>
          <li>Understanding of contemporary challenges</li>
        </ul>
        
        <h3>Sources for Current Affairs</h3>
        
        <h4>Primary Sources (Daily Reading)</h4>
        <ul>
          <li><strong>The Hindu:</strong> Comprehensive coverage, editorial analysis</li>
          <li><strong>Indian Express:</strong> Policy focus, explained sections</li>
          <li><strong>Business Standard:</strong> Economic and business news</li>
          <li><strong>PIB (Press Information Bureau):</strong> Government announcements</li>
        </ul>
        
        <h4>Secondary Sources (Weekly/Monthly)</h4>
        <ul>
          <li><strong>Yojana Magazine:</strong> Government perspective on policies</li>
          <li><strong>Kurukshetra:</strong> Rural development focus</li>
          <li><strong>Economic Survey:</strong> Annual economic analysis</li>
          <li><strong>India Year Book:</strong> Comprehensive annual review</li>
        </ul>
        
        <h4>Digital Sources</h4>
        <ul>
          <li><strong>Government Websites:</strong> Ministry-wise updates</li>
          <li><strong>Think Tank Reports:</strong> ORF, IDSA, Gateway House</li>
          <li><strong>International Organizations:</strong> UN, World Bank, IMF reports</li>
          <li><strong>News Apps:</strong> Curated current affairs applications</li>
        </ul>
        
        <h3>Systematic Reading Strategy</h3>
        
        <h4>Daily Routine (2-3 hours)</h4>
        <ul>
          <li><strong>Morning (1 hour):</strong> Newspaper reading with note-taking</li>
          <li><strong>Evening (30 minutes):</strong> PIB and government website updates</li>
          <li><strong>Night (30 minutes):</strong> Compilation and revision of daily notes</li>
        </ul>
        
        <h4>Weekly Compilation</h4>
        <ul>
          <li>Consolidate daily notes into weekly summaries</li>
          <li>Identify recurring themes and important developments</li>
          <li>Link current events with static syllabus topics</li>
          <li>Create mind maps for complex issues</li>
        </ul>
        
        <h4>Monthly Review</h4>
        <ul>
          <li>Comprehensive revision of monthly current affairs</li>
          <li>Analysis of government reports and surveys</li>
          <li>International developments and their implications</li>
          <li>Practice questions based on monthly events</li>
        </ul>
        
        <h3>Subject-wise Current Affairs Approach</h3>
        
        <h4>Polity and Governance</h4>
        <ul>
          <li>Constitutional amendments and judicial pronouncements</li>
          <li>New laws and policy initiatives</li>
          <li>Electoral reforms and political developments</li>
          <li>Center-state relations and federal issues</li>
        </ul>
        
        <h4>Economy</h4>
        <ul>
          <li>Budget analysis and fiscal policy changes</li>
          <li>Monetary policy decisions and RBI actions</li>
          <li>Trade agreements and economic partnerships</li>
          <li>Sectoral developments and performance indicators</li>
        </ul>
        
        <h4>International Relations</h4>
        <ul>
          <li>Bilateral and multilateral agreements</li>
          <li>International summits and conferences</li>
          <li>Global conflicts and peace initiatives</li>
          <li>India's foreign policy developments</li>
        </ul>
        
        <h4>Science and Technology</h4>
        <ul>
          <li>Space missions and scientific achievements</li>
          <li>Technology policy and digital initiatives</li>
          <li>Research breakthroughs and innovations</li>
          <li>Health and medical developments</li>
        </ul>
        
        <h4>Environment and Ecology</h4>
        <ul>
          <li>Climate change conferences and agreements</li>
          <li>Environmental policies and conservation efforts</li>
          <li>Renewable energy developments</li>
          <li>Biodiversity and wildlife conservation</li>
        </ul>
        
        <h3>Note-Making Techniques</h3>
        
        <h4>The SCAN Method</h4>
        <ul>
          <li><strong>S - Skim:</strong> Quick overview of the article</li>
          <li><strong>C - Categorize:</strong> Identify the subject area</li>
          <li><strong>A - Analyze:</strong> Understand the significance</li>
          <li><strong>N - Note:</strong> Write concise, relevant points</li>
        </ul>
        
        <h4>Digital Note-Making Tools</h4>
        <ul>
          <li><strong>Notion:</strong> Comprehensive database creation</li>
          <li><strong>Evernote:</strong> Web clipping and organization</li>
          <li><strong>OneNote:</strong> Structured note organization</li>
          <li><strong>Google Keep:</strong> Quick notes and reminders</li>
        </ul>
        
        <h4>Traditional Note-Making</h4>
        <ul>
          <li>Maintain separate notebooks for different subjects</li>
          <li>Use color coding for different types of information</li>
          <li>Create index pages for quick reference</li>
          <li>Leave space for additional information and updates</li>
        </ul>
        
        <h3>Integration with Static Syllabus</h3>
        
        <h4>Linking Strategy</h4>
        <ul>
          <li>Connect current events with historical precedents</li>
          <li>Relate policy changes to constitutional provisions</li>
          <li>Link economic developments to theoretical concepts</li>
          <li>Connect international events to India's foreign policy</li>
        </ul>
        
        <h4>Example Integration</h4>
        <p><strong>Current Event:</strong> New Education Policy 2020</p>
        <p><strong>Static Links:</strong></p>
        <ul>
          <li>Constitutional provisions on education (Articles 21A, 45)</li>
          <li>Previous education policies and their outcomes</li>
          <li>International best practices in education</li>
          <li>Challenges in Indian education system</li>
        </ul>
        
        <h3>Current Affairs for Answer Writing</h3>
        
        <h4>Using Current Affairs as Examples</h4>
        <ul>
          <li>Recent policy initiatives to support arguments</li>
          <li>Contemporary challenges to highlight problems</li>
          <li>Success stories to demonstrate solutions</li>
          <li>International comparisons for broader perspective</li>
        </ul>
        
        <h4>Contemporary Relevance in Essays</h4>
        <ul>
          <li>Use recent developments to introduce topics</li>
          <li>Provide current context to philosophical themes</li>
          <li>Support arguments with recent data and statistics</li>
          <li>Conclude with forward-looking perspectives</li>
        </ul>
        
        <h3>Revision Strategy</h3>
        
        <h4>Short-term Revision (Weekly)</h4>
        <ul>
          <li>Quick review of daily notes</li>
          <li>Focus on important developments</li>
          <li>Practice MCQs based on weekly events</li>
          <li>Update ongoing issues and developments</li>
        </ul>
        
        <h4>Medium-term Revision (Monthly)</h4>
        <ul>
          <li>Comprehensive review of monthly compilations</li>
          <li>Analysis of trends and patterns</li>
          <li>Integration with static knowledge</li>
          <li>Practice answer writing with current examples</li>
        </ul>
        
        <h4>Long-term Revision (Quarterly)</h4>
        <ul>
          <li>Review of major developments over three months</li>
          <li>Analysis of policy outcomes and impacts</li>
          <li>Preparation of comprehensive summaries</li>
          <li>Mock test practice with current affairs focus</li>
        </ul>
        
        <h3>Technology Tools for Current Affairs</h3>
        
        <h4>News Aggregation Apps</h4>
        <ul>
          <li><strong>Inshorts:</strong> 60-word news summaries</li>
          <li><strong>Flipboard:</strong> Personalized news magazine</li>
          <li><strong>Google News:</strong> Comprehensive news aggregation</li>
          <li><strong>SmartNews:</strong> AI-curated news stories</li>
        </ul>
        
        <h4>UPSC-Specific Apps</h4>
        <ul>
          <li><strong>BYJU'S:</strong> Current affairs with analysis</li>
          <li><strong>Unacademy:</strong> Daily current affairs videos</li>
          <li><strong>InsightsIAS:</strong> Comprehensive current affairs</li>
          <li><strong>Vision IAS:</strong> Monthly current affairs magazines</li>
        </ul>
        
        <h3>Common Mistakes to Avoid</h3>
        
        <h4>Information Overload</h4>
        <ul>
          <li>Reading too many sources without focus</li>
          <li>Collecting information without analysis</li>
          <li>Ignoring the relevance to UPSC syllabus</li>
          <li>Not prioritizing important developments</li>
        </ul>
        
        <h4>Lack of Integration</h4>
        <ul>
          <li>Treating current affairs as separate from static syllabus</li>
          <li>Not connecting events with broader themes</li>
          <li>Failing to see long-term implications</li>
          <li>Missing the analytical perspective</li>
        </ul>
        
        <h4>Poor Revision Strategy</h4>
        <ul>
          <li>Not revising current affairs regularly</li>
          <li>Focusing only on recent events before exams</li>
          <li>Ignoring year-old but relevant developments</li>
          <li>Not practicing current affairs-based questions</li>
        </ul>
        
        <h3>Year-long Current Affairs Calendar</h3>
        
        <h4>January-March: Foundation Phase</h4>
        <ul>
          <li>Establish daily reading routine</li>
          <li>Focus on budget and economic survey</li>
          <li>Cover major policy announcements</li>
          <li>Start building subject-wise notes</li>
        </ul>
        
        <h4>April-June: Building Phase</h4>
        <ul>
          <li>Integrate current affairs with static preparation</li>
          <li>Focus on international developments</li>
          <li>Cover important reports and surveys</li>
          <li>Practice current affairs-based MCQs</li>
        </ul>
        
        <h4>July-September: Integration Phase</h4>
        <ul>
          <li>Use current affairs in answer writing practice</li>
          <li>Focus on policy analysis and evaluation</li>
          <li>Cover important summits and conferences</li>
          <li>Prepare comprehensive monthly summaries</li>
        </ul>
        
        <h4>October-December: Consolidation Phase</h4>
        <ul>
          <li>Comprehensive revision of year-long current affairs</li>
          <li>Focus on recent developments and updates</li>
          <li>Practice mock tests with current affairs focus</li>
          <li>Prepare final compilation for quick revision</li>
        </ul>
      `
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Tina Dabi",
      rank: "AIR 1 (2015)",
      attempt: "First Attempt",
      age: "22 years",
      background: "Engineering Graduate",
      preparationTime: "18 months",
      optional: "Political Science",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Consistent study schedule, newspaper reading, and mock tests were key to my success. I focused on understanding concepts rather than rote learning.",
      strategy: "Focused on basics, regular revision, and answer writing practice",
      tips: ["Read newspaper daily", "Make concise notes", "Practice answer writing", "Stay consistent"],
      detailedStory: `
        <h3>Early Life and Education</h3>
        <p>Tina Dabi was born in Bhopal, Madhya Pradesh, into a family that valued education. Her father, Jaswant Dabi, is an engineer, and her mother, Himali Dabi, is a doctor. This academic environment fostered her love for learning from an early age.</p>
        
        <h3>Academic Journey</h3>
        <p>Tina completed her schooling from Carmel Convent School, Bhopal, where she consistently performed well. She then pursued her B.Tech in Electrical Engineering from Lady Shri Ram College for Women, Delhi University, graduating with distinction.</p>
        
        <h3>Decision to Join Civil Services</h3>
        <p>During her engineering studies, Tina realized her passion lay in public service rather than technical fields. She was inspired by the opportunity to bring about positive change in society and decided to prepare for the UPSC Civil Services Examination.</p>
        
        <h3>Preparation Strategy</h3>
        <h4>Study Schedule</h4>
        <ul>
          <li><strong>Morning (6:00-9:00 AM):</strong> Current affairs and newspaper reading</li>
          <li><strong>Morning (9:00-1:00 PM):</strong> Core subjects study</li>
          <li><strong>Afternoon (2:00-5:00 PM):</strong> Optional subject preparation</li>
          <li><strong>Evening (6:00-9:00 PM):</strong> Revision and answer writing</li>
        </ul>
        
        <h4>Subject-wise Approach</h4>
        <ul>
          <li><strong>History:</strong> NCERT books, Bipan Chandra for Modern History</li>
          <li><strong>Geography:</strong> NCERT, G.C. Leong for Physical Geography</li>
          <li><strong>Polity:</strong> M. Laxmikanth, Constitution of India</li>
          <li><strong>Economics:</strong> NCERT, Ramesh Singh for Indian Economy</li>
          <li><strong>Optional (Political Science):</strong> Standard textbooks and current political developments</li>
        </ul>
        
        <h3>Challenges Faced</h3>
        <ul>
          <li>Balancing engineering studies with UPSC preparation</li>
          <li>Managing vast syllabus within limited time</li>
          <li>Dealing with pressure and expectations</li>
          <li>Maintaining consistency in preparation</li>
        </ul>
        
        <h3>Success Mantras</h3>
        <ul>
          <li><strong>Consistency over Intensity:</strong> Regular study was more important than long hours</li>
          <li><strong>Quality over Quantity:</strong> Focused on understanding rather than covering more books</li>
          <li><strong>Regular Revision:</strong> Systematic revision schedule to retain information</li>
          <li><strong>Mock Tests:</strong> Regular practice to improve time management and accuracy</li>
        </ul>
        
        <h3>Interview Experience</h3>
        <p>Tina's interview lasted about 30 minutes, where she was asked about her engineering background, current affairs, and her views on various policy issues. Her calm demeanor and well-articulated answers impressed the board.</p>
        
        <h3>Life After Success</h3>
        <p>After her success, Tina was allocated the Haryana cadre and has served in various capacities, focusing on administrative reforms and public welfare. She continues to inspire thousands of aspirants through her journey.</p>
        
        <h3>Advice for Aspirants</h3>
        <ul>
          <li>Start with NCERT books for building strong foundations</li>
          <li>Read newspapers daily and make notes</li>
          <li>Practice answer writing regularly</li>
          <li>Take mock tests seriously</li>
          <li>Stay motivated and believe in yourself</li>
          <li>Maintain a healthy lifestyle during preparation</li>
        </ul>
      `
    },
    {
      id: 2,
      name: "Kanishak Kataria",
      rank: "AIR 1 (2018)",
      attempt: "First Attempt",
      age: "26 years",
      background: "B.Tech from IIT Bombay",
      preparationTime: "2 years",
      optional: "Mathematics",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Engineering background helped in optional subject. Focus on basics and current affairs was crucial for my success.",
      strategy: "Systematic approach with emphasis on answer writing",
      tips: ["Choose optional wisely", "Focus on basics", "Regular revision", "Time management"],
      detailedStory: `
        <h3>Background and Early Life</h3>
        <p>Kanishak Kataria hails from Jodhpur, Rajasthan. Born into a middle-class family, he showed exceptional academic prowess from an early age. His father is a government employee, and his mother is a homemaker who provided unwavering support throughout his journey.</p>
        
        <h3>Educational Journey</h3>
        <p>Kanishak completed his schooling from Jodhpur and secured admission to IIT Bombay for B.Tech in Mechanical Engineering. His engineering background provided him with analytical thinking and problem-solving skills that proved invaluable in his UPSC preparation.</p>
        
        <h3>The Decision to Pursue Civil Services</h3>
        <p>During his final year at IIT Bombay, Kanishak realized his calling was in public service. He was motivated by the desire to contribute to nation-building and bring about positive changes in society through policy implementation and governance.</p>
        
        <h3>Preparation Strategy</h3>
        <h4>Phase 1: Foundation Building (6 months)</h4>
        <ul>
          <li>Started with NCERT books from classes 6-12</li>
          <li>Built strong conceptual foundation in all subjects</li>
          <li>Focused on understanding rather than memorization</li>
          <li>Developed habit of daily newspaper reading</li>
        </ul>
        
        <h4>Phase 2: Intensive Preparation (12 months)</h4>
        <ul>
          <li>Covered standard reference books for each subject</li>
          <li>Integrated current affairs with static portions</li>
          <li>Started answer writing practice</li>
          <li>Joined test series for both Prelims and Mains</li>
        </ul>
        
        <h4>Phase 3: Revision and Practice (6 months)</h4>
        <ul>
          <li>Intensive revision of all subjects</li>
          <li>Focused on weak areas identified through mock tests</li>
          <li>Improved answer writing speed and quality</li>
          <li>Stayed updated with latest current affairs</li>
        </ul>
        
        <h3>Optional Subject: Mathematics</h3>
        <h4>Why Mathematics?</h4>
        <ul>
          <li>Strong engineering background in mathematical concepts</li>
          <li>Objective nature of the subject with definitive answers</li>
          <li>High scoring potential with proper preparation</li>
          <li>Less time-consuming compared to other optional subjects</li>
        </ul>
        
        <h4>Preparation Strategy for Mathematics</h4>
        <ul>
          <li>Focused on understanding concepts rather than memorizing formulas</li>
          <li>Practiced previous years' questions extensively</li>
          <li>Solved problems from standard textbooks</li>
          <li>Maintained separate notebooks for formulas and important theorems</li>
        </ul>
        
        <h3>Daily Study Routine</h3>
        <ul>
          <li><strong>5:00-6:00 AM:</strong> Physical exercise and meditation</li>
          <li><strong>6:00-8:00 AM:</strong> Current affairs and newspaper reading</li>
          <li><strong>9:00-12:00 PM:</strong> Core subjects (History, Geography, Polity)</li>
          <li><strong>1:00-4:00 PM:</strong> Optional subject (Mathematics)</li>
          <li><strong>5:00-7:00 PM:</strong> Economics and Science & Technology</li>
          <li><strong>8:00-10:00 PM:</strong> Answer writing practice and revision</li>
        </ul>
        
        <h3>Challenges and How He Overcame Them</h3>
        <h4>Vast Syllabus</h4>
        <ul>
          <li>Created a systematic study plan with realistic targets</li>
          <li>Prioritized topics based on weightage and importance</li>
          <li>Focused on quality over quantity</li>
        </ul>
        
        <h4>Time Management</h4>
        <ul>
          <li>Maintained strict discipline in following study schedule</li>
          <li>Used time-blocking technique for different subjects</li>
          <li>Regular breaks to maintain concentration</li>
        </ul>
        
        <h4>Answer Writing</h4>
        <ul>
          <li>Started answer writing practice early in preparation</li>
          <li>Focused on structure, content, and presentation</li>
          <li>Got answers evaluated by mentors and peers</li>
        </ul>
        
        <h3>Mock Test Strategy</h3>
        <ul>
          <li>Joined multiple test series for comprehensive practice</li>
          <li>Attempted tests in exam-like conditions</li>
          <li>Analyzed performance thoroughly after each test</li>
          <li>Worked on weak areas identified through tests</li>
          <li>Maintained test performance diary for tracking progress</li>
        </ul>
        
        <h3>Interview Preparation</h3>
        <ul>
          <li>Prepared detailed DAF (Detailed Application Form) analysis</li>
          <li>Practiced mock interviews with various panels</li>
          <li>Stayed updated with current affairs till the interview day</li>
          <li>Worked on communication skills and body language</li>
        </ul>
        
        <h3>Key Success Factors</h3>
        <ul>
          <li><strong>Consistent Preparation:</strong> Never missed daily study routine</li>
          <li><strong>Smart Work:</strong> Focused on high-yield topics and efficient study methods</li>
          <li><strong>Regular Revision:</strong> Systematic revision schedule to retain information</li>
          <li><strong>Answer Writing:</strong> Daily practice improved writing speed and quality</li>
          <li><strong>Mock Tests:</strong> Regular testing helped identify and improve weak areas</li>
        </ul>
        
        <h3>Advice for Future Aspirants</h3>
        <ul>
          <li>Start with strong foundation building through NCERT books</li>
          <li>Choose optional subject based on interest and background</li>
          <li>Maintain consistency in preparation rather than studying in bursts</li>
          <li>Focus on answer writing from the beginning of preparation</li>
          <li>Stay updated with current affairs throughout the preparation</li>
          <li>Take care of physical and mental health during preparation</li>
          <li>Believe in yourself and stay motivated throughout the journey</li>
        </ul>
        
        <h3>Current Role and Contributions</h3>
        <p>After his success, Kanishak was allocated the Rajasthan cadre and has been working on various developmental projects. He continues to inspire aspirants through his journey and regularly shares his experiences and tips for UPSC preparation.</p>
      `
    },
    {
      id: 3,
      name: "Shruti Sharma",
      rank: "AIR 1 (2021)",
      attempt: "First Attempt",
      age: "25 years",
      background: "History Graduate",
      preparationTime: "20 months",
      optional: "History",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "My history background gave me an edge in GS papers. Consistent preparation and staying updated with current affairs helped.",
      strategy: "Leveraged academic background and focused on weak areas",
      tips: ["Understand your strengths", "Regular answer writing", "Stay motivated", "Healthy lifestyle"],
      detailedStory: `
        <h3>Early Life and Educational Background</h3>
        <p>Shruti Sharma was born and raised in Delhi in an academically oriented family. Her father is a professor of History at Delhi University, and her mother is a school teacher. This academic environment nurtured her love for history and learning from a young age.</p>
        
        <h3>Academic Excellence</h3>
        <p>Shruti completed her schooling from a prestigious school in Delhi with outstanding marks. She then pursued her Bachelor's degree in History from Lady Shri Ram College, Delhi University, where she graduated with first-class honors. Her deep understanding of historical concepts and analytical skills developed during her graduation proved instrumental in her UPSC success.</p>
        
        <h3>The Inspiration for Civil Services</h3>
        <p>Shruti's interest in civil services was sparked during her college years when she participated in various social service activities. She realized that through civil services, she could contribute to policy-making and bring about meaningful changes in society, especially in areas like education and women's empowerment.</p>
        
        <h3>Comprehensive Preparation Strategy</h3>
        
        <h4>Phase 1: Foundation and Planning (4 months)</h4>
        <ul>
          <li>Thorough analysis of UPSC syllabus and exam pattern</li>
          <li>Collection of standard books and study materials</li>
          <li>Creation of a realistic and comprehensive study plan</li>
          <li>Strengthening foundation through NCERT books</li>
        </ul>
        
        <h4>Phase 2: Intensive Study (12 months)</h4>
        <ul>
          <li>Systematic coverage of all General Studies papers</li>
          <li>In-depth preparation of History optional</li>
          <li>Integration of current affairs with static portions</li>
          <li>Regular answer writing practice</li>
        </ul>
        
        <h4>Phase 3: Revision and Testing (4 months)</h4>
        <ul>
          <li>Comprehensive revision of all subjects</li>
          <li>Intensive mock test practice</li>
          <li>Focus on weak areas and improvement</li>
          <li>Final preparation for both Prelims and Mains</li>
        </ul>
        
        <h3>Subject-wise Preparation Strategy</h3>
        
        <h4>History (Optional Subject)</h4>
        <p><strong>Paper I: Ancient and Medieval History</strong></p>
        <ul>
          <li>NCERT books for basic understanding</li>
          <li>R.S. Sharma for Ancient India</li>
          <li>Satish Chandra for Medieval India</li>
          <li>Focus on cultural and social aspects</li>
        </ul>
        
        <p><strong>Paper II: Modern History</strong></p>
        <ul>
          <li>Bipan Chandra for comprehensive coverage</li>
          <li>Spectrum for quick revision</li>
          <li>Focus on freedom struggle and social reforms</li>
          <li>Integration with current political developments</li>
        </ul>
        
        <h4>General Studies Papers</h4>
        <p><strong>GS Paper I:</strong></p>
        <ul>
          <li>Leveraged history background for Indian Heritage and Culture</li>
          <li>G.C. Leong for Geography</li>
          <li>Focus on world history and society</li>
        </ul>
        
        <p><strong>GS Paper II:</strong></p>
        <ul>
          <li>M. Laxmikanth for Indian Polity</li>
          <li>Focus on governance and social justice</li>
          <li>Regular reading of government reports</li>
        </ul>
        
        <p><strong>GS Paper III:</strong></p>
        <ul>
          <li>Ramesh Singh for Economics</li>
          <li>Focus on current economic developments</li>
          <li>Science and Technology from current affairs</li>
        </ul>
        
        <p><strong>GS Paper IV:</strong></p>
        <ul>
          <li>Emphasis on case studies and examples</li>
          <li>Regular practice of ethical dilemmas</li>
          <li>Focus on administrative ethics</li>
        </ul>
        
        <h3>Daily Study Routine</h3>
        <ul>
          <li><strong>5:30-6:30 AM:</strong> Morning walk and meditation</li>
          <li><strong>7:00-9:00 AM:</strong> Current affairs and newspaper reading</li>
          <li><strong>9:30-12:30 PM:</strong> History optional preparation</li>
          <li><strong>2:00-5:00 PM:</strong> General Studies papers</li>
          <li><strong>6:00-8:00 PM:</strong> Answer writing practice</li>
          <li><strong>8:30-10:00 PM:</strong> Revision and note-making</li>
        </ul>
        
        <h3>Answer Writing Strategy</h3>
        <h4>Structure and Approach</h4>
        <ul>
          <li>Clear introduction with definition of key terms</li>
          <li>Well-structured body with logical flow</li>
          <li>Use of flowcharts, diagrams, and bullet points</li>
          <li>Balanced conclusion with way forward</li>
        </ul>
        
        <h4>Practice Routine</h4>
        <ul>
          <li>Daily writing of 3-4 answers across different papers</li>
          <li>Focus on different question types each day</li>
          <li>Time-bound practice to improve speed</li>
          <li>Regular evaluation and feedback</li>
        </ul>
        
        <h3>Current Affairs Strategy</h3>
        <ul>
          <li><strong>Daily Sources:</strong> The Hindu, Indian Express</li>
          <li><strong>Monthly Magazines:</strong> Yojana, Kurukshetra</li>
          <li><strong>Online Sources:</strong> PIB, government websites</li>
          <li><strong>Integration:</strong> Linking current events with historical context</li>
        </ul>
        
        <h3>Challenges Faced and Solutions</h3>
        
        <h4>Managing Vast Syllabus</h4>
        <ul>
          <li><strong>Challenge:</strong> Covering entire syllabus within time limit</li>
          <li><strong>Solution:</strong> Prioritized topics based on weightage and previous trends</li>
        </ul>
        
        <h4>Answer Writing Speed</h4>
        <ul>
          <li><strong>Challenge:</strong> Writing quality answers within time limit</li>
          <li><strong>Solution:</strong> Regular practice and development of standard templates</li>
        </ul>
        
        <h4>Maintaining Motivation</h4>
        <ul>
          <li><strong>Challenge:</strong> Staying motivated during long preparation period</li>
          <li><strong>Solution:</strong> Setting short-term goals and celebrating small achievements</li>
        </ul>
        
        <h3>Mock Test Strategy</h3>
        <ul>
          <li>Joined multiple test series for comprehensive practice</li>
          <li>Attempted tests in exam-like conditions</li>
          <li>Detailed analysis of each test performance</li>
          <li>Focus on improving weak areas identified</li>
          <li>Maintained performance tracking sheet</li>
        </ul>
        
        <h3>Interview Preparation</h3>
        <ul>
          <li>Thorough preparation of DAF and personal background</li>
          <li>Mock interviews with different panels</li>
          <li>Focus on current affairs and opinion formation</li>
          <li>Work on communication skills and confidence</li>
          <li>Preparation of hobby-related questions (reading historical novels)</li>
        </ul>
        
        <h3>Key Success Factors</h3>
        <ul>
          <li><strong>Academic Advantage:</strong> Strong history background helped in multiple papers</li>
          <li><strong>Consistent Preparation:</strong> Regular study routine without major breaks</li>
          <li><strong>Answer Writing Focus:</strong> Early start and regular practice</li>
          <li><strong>Current Affairs Integration:</strong> Linking current events with historical context</li>
          <li><strong>Balanced Approach:</strong> Equal focus on all papers and subjects</li>
        </ul>
        
        <h3>Health and Lifestyle Management</h3>
        <ul>
          <li>Regular physical exercise and yoga</li>
          <li>Adequate sleep of 7-8 hours daily</li>
          <li>Healthy diet and proper meal timings</li>
          <li>Regular breaks and recreational activities</li>
          <li>Maintaining social connections with family and friends</li>
        </ul>
        
        <h3>Advice for Aspirants</h3>
        <ul>
          <li>Leverage your academic background and strengths</li>
          <li>Start answer writing practice early in preparation</li>
          <li>Maintain consistency in study routine</li>
          <li>Focus on understanding concepts rather than rote learning</li>
          <li>Stay updated with current affairs throughout preparation</li>
          <li>Take care of physical and mental health</li>
          <li>Believe in yourself and stay motivated</li>
          <li>Learn from failures and keep improving</li>
        </ul>
        
        <h3>Current Assignment and Future Goals</h3>
        <p>After her remarkable success, Shruti was allocated the Delhi cadre and is currently working on various developmental projects in the capital. She is particularly focused on education reforms and women's empowerment initiatives. She continues to inspire thousands of aspirants through her journey and regularly conducts motivational sessions for UPSC aspirants.</p>
      `
    },
    {
      id: 4,
      name: "Anudeep Durishetty",
      rank: "AIR 1 (2017)",
      attempt: "First Attempt",
      age: "22 years",
      background: "Engineering Student",
      preparationTime: "15 months",
      optional: "Anthropology",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Started preparation in final year of engineering. Focused on understanding rather than memorizing.",
      strategy: "Balanced approach with equal focus on all subjects",
      tips: ["Start early", "Quality over quantity", "Regular tests", "Stay calm"],
      detailedStory: `
        <h3>Background and Early Life</h3>
        <p>Anudeep Durishetty hails from Metpally, a small town in Telangana. Born into a middle-class family, his father is a government employee and his mother is a homemaker. Despite coming from a small town, Anudeep harbored big dreams and showed exceptional academic potential from an early age.</p>
        
        <h3>Educational Journey</h3>
        <p>Anudeep completed his schooling from a local school in Metpally with outstanding performance. His academic excellence earned him admission to the prestigious National Institute of Technology (NIT) Trichy for B.Tech in Electronics and Communication Engineering. It was during his engineering studies that he decided to pursue civil services.</p>
        
        <h3>The Decision to Pursue UPSC</h3>
        <p>During his third year of engineering, Anudeep realized that his true calling was in public service. He was inspired by the opportunity to contribute to nation-building and bring about positive changes in society. Despite pressure to pursue a lucrative engineering career, he decided to follow his passion for civil services.</p>
        
        <h3>Unique Preparation Strategy</h3>
        
        <h4>Parallel Preparation Approach</h4>
        <p>Anudeep adopted a unique strategy of preparing for UPSC while completing his engineering degree. This required exceptional time management and dedication.</p>
        
        <h4>Phase 1: Foundation Building (3 months)</h4>
        <ul>
          <li>Started with NCERT books from classes 6-12</li>
          <li>Built strong conceptual foundation</li>
          <li>Developed habit of daily newspaper reading</li>
          <li>Created a realistic study schedule balancing college and UPSC preparation</li>
        </ul>
        
        <h4>Phase 2: Intensive Preparation (9 months)</h4>
        <ul>
          <li>Covered standard reference books for all subjects</li>
          <li>Started answer writing practice</li>
          <li>Integrated current affairs with static portions</li>
          <li>Joined online test series for practice</li>
        </ul>
        
        <h4>Phase 3: Final Preparation (3 months)</h4>
        <ul>
          <li>Intensive revision of all subjects</li>
          <li>Focus on mock tests and performance analysis</li>
          <li>Fine-tuning answer writing skills</li>
          <li>Last-minute current affairs updates</li>
        </ul>
        
        <h3>Optional Subject: Anthropology</h3>
        
        <h4>Why Anthropology?</h4>
        <ul>
          <li>Relatively shorter syllabus compared to other optional subjects</li>
          <li>Good overlap with General Studies papers</li>
          <li>Interesting subject matter with scientific approach</li>
          <li>Less competition and good scoring potential</li>
        </ul>
        
        <h4>Preparation Strategy for Anthropology</h4>
        <ul>
          <li>Started with basic textbooks to understand concepts</li>
          <li>Focused on understanding rather than memorization</li>
          <li>Made comprehensive notes for quick revision</li>
          <li>Practiced previous years' questions extensively</li>
          <li>Integrated current developments in anthropology</li>
        </ul>
        
        <h3>Daily Study Routine (During Engineering)</h3>
        <ul>
          <li><strong>5:00-7:00 AM:</strong> UPSC preparation (before college)</li>
          <li><strong>8:00 AM-5:00 PM:</strong> College classes and assignments</li>
          <li><strong>6:00-8:00 PM:</strong> Current affairs and newspaper reading</li>
          <li><strong>8:30-11:00 PM:</strong> UPSC subjects study</li>
          <li><strong>11:00-11:30 PM:</strong> Revision and planning for next day</li>
        </ul>
        
        <h3>Subject-wise Preparation Strategy</h3>
        
        <h4>General Studies Paper I</h4>
        <ul>
          <li><strong>History:</strong> NCERT + Bipan Chandra for Modern History</li>
          <li><strong>Geography:</strong> NCERT + G.C. Leong for Physical Geography</li>
          <li><strong>Art & Culture:</strong> NCERT + Nitin Singhania</li>
          <li><strong>World History:</strong> NCERT + Arjun Dev</li>
        </ul>
        
        <h4>General Studies Paper II</h4>
        <ul>
          <li><strong>Polity:</strong> M. Laxmikanth + Current developments</li>
          <li><strong>Governance:</strong> 2nd ARC reports + Current affairs</li>
          <li><strong>Social Justice:</strong> Government schemes and policies</li>
          <li><strong>International Relations:</strong> Current affairs focus</li>
        </ul>
        
        <h4>General Studies Paper III</h4>
        <ul>
          <li><strong>Economics:</strong> NCERT + Ramesh Singh</li>
          <li><strong>Science & Technology:</strong> Current affairs + basic concepts</li>
          <li><strong>Environment:</strong> NCERT + current developments</li>
          <li><strong>Security:</strong> Current affairs and government reports</li>
        </ul>
        
        <h4>General Studies Paper IV</h4>
        <ul>
          <li>Focus on case studies and real-life examples</li>
          <li>Regular practice of ethical dilemmas</li>
          <li>Understanding of administrative ethics</li>
          <li>Current examples of ethical issues</li>
        </ul>
        
        <h3>Answer Writing Strategy</h3>
        
        <h4>Structure Development</h4>
        <ul>
          <li>Clear introduction with context setting</li>
          <li>Well-organized body with logical flow</li>
          <li>Use of diagrams, flowcharts, and bullet points</li>
          <li>Balanced conclusion with way forward</li>
        </ul>
        
        <h4>Practice Routine</h4>
        <ul>
          <li>Daily writing of 2-3 answers</li>
          <li>Focus on different question types</li>
          <li>Time-bound practice for speed improvement</li>
          <li>Self-evaluation and improvement</li>
        </ul>
        
        <h3>Current Affairs Strategy</h3>
        <ul>
          <li><strong>Daily Reading:</strong> The Hindu newspaper</li>
          <li><strong>Monthly Compilation:</strong> Current affairs magazines</li>
          <li><strong>Online Sources:</strong> PIB, government websites</li>
          <li><strong>Integration:</strong> Linking with static syllabus</li>
          <li><strong>Note-making:</strong> Concise notes for quick revision</li>
        </ul>
        
        <h3>Challenges and Solutions</h3>
        
        <h4>Time Management</h4>
        <ul>
          <li><strong>Challenge:</strong> Balancing engineering studies with UPSC preparation</li>
          <li><strong>Solution:</strong> Strict time management and prioritization</li>
        </ul>
        
        <h4>Vast Syllabus</h4>
        <ul>
          <li><strong>Challenge:</strong> Covering entire UPSC syllabus in limited time</li>
          <li><strong>Solution:</strong> Focus on high-yield topics and smart study</li>
        </ul>
        
        <h4>Lack of Guidance</h4>
        <ul>
          <li><strong>Challenge:</strong> Limited access to coaching in small town</li>
          <li><strong>Solution:</strong> Self-study with online resources and test series</li>
        </ul>
        
        <h3>Mock Test Strategy</h3>
        <ul>
          <li>Joined online test series for both Prelims and Mains</li>
          <li>Attempted tests in exam-like conditions</li>
          <li>Detailed analysis of performance after each test</li>
          <li>Focused on improving weak areas</li>
          <li>Maintained test performance diary</li>
        </ul>
        
        <h3>Prelims Strategy</h3>
        <ul>
          <li>Focus on NCERT books for conceptual clarity</li>
          <li>Regular practice of MCQs</li>
          <li>Current affairs integration with static topics</li>
          <li>Time management during exam</li>
          <li>Intelligent guessing for uncertain questions</li>
        </ul>
        
        <h3>Mains Strategy</h3>
        <ul>
          <li>Comprehensive coverage of all papers</li>
          <li>Regular answer writing practice</li>
          <li>Focus on presentation and structure</li>
          <li>Use of examples and case studies</li>
          <li>Time management during exam</li>
        </ul>
        
        <h3>Interview Preparation</h3>
        <ul>
          <li>Thorough preparation of DAF</li>
          <li>Mock interviews with various panels</li>
          <li>Current affairs preparation</li>
          <li>Focus on communication skills</li>
          <li>Preparation of hobby-related questions</li>
        </ul>
        
        <h3>Key Success Factors</h3>
        <ul>
          <li><strong>Early Start:</strong> Beginning preparation during engineering</li>
          <li><strong>Consistent Effort:</strong> Regular study without major breaks</li>
          <li><strong>Smart Study:</strong> Focus on understanding over memorization</li>
          <li><strong>Time Management:</strong> Efficient use of available time</li>
          <li><strong>Self-Discipline:</strong> Maintaining study routine despite challenges</li>
        </ul>
        
        <h3>Mental Health and Motivation</h3>
        <ul>
          <li>Regular physical exercise and sports</li>
          <li>Adequate sleep and rest</li>
          <li>Maintaining social connections</li>
          <li>Positive mindset and self-belief</li>
          <li>Learning from failures and setbacks</li>
        </ul>
        
        <h3>Technology and Resources Used</h3>
        <ul>
          <li>Online test series and mock tests</li>
          <li>Educational videos and lectures</li>
          <li>Digital note-making tools</li>
          <li>Current affairs apps and websites</li>
          <li>Online study groups and forums</li>
        </ul>
        
        <h3>Advice for Engineering Students</h3>
        <ul>
          <li>Start UPSC preparation early during engineering</li>
          <li>Balance both studies effectively</li>
          <li>Use engineering background for analytical thinking</li>
          <li>Don't compromise on either engineering or UPSC preparation</li>
          <li>Maintain consistency in preparation</li>
        </ul>
        
        <h3>General Advice for Aspirants</h3>
        <ul>
          <li>Start with strong foundation through NCERT books</li>
          <li>Focus on understanding concepts rather than rote learning</li>
          <li>Maintain consistency in preparation</li>
          <li>Practice answer writing regularly</li>
          <li>Stay updated with current affairs</li>
          <li>Take care of physical and mental health</li>
          <li>Believe in yourself and stay motivated</li>
        </ul>
        
        <h3>Current Role and Contributions</h3>
        <p>After his remarkable success, Anudeep was allocated the Telangana cadre and has been working on various developmental projects in his home state. He is particularly focused on rural development and technology integration in governance. His journey continues to inspire thousands of aspirants, especially those from small towns and engineering backgrounds.</p>
        
        <h3>Legacy and Impact</h3>
        <p>Anudeep's success story has become a source of inspiration for countless aspirants, particularly those from small towns and engineering backgrounds. His achievement proves that with dedication, smart work, and proper strategy, anyone can achieve success in UPSC, regardless of their background or location.</p>
      `
    },
    {
      id: 5,
      name: "Artika Shukla",
      rank: "AIR 4 (2015)",
      attempt: "First Attempt",
      age: "23 years",
      background: "Economics Graduate",
      preparationTime: "18 months",
      optional: "Economics",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Economics background helped in understanding policy issues. Regular answer writing was crucial.",
      strategy: "Focused on current affairs and answer writing",
      tips: ["Use your academic background", "Practice writing", "Stay updated", "Believe in yourself"],
      detailedStory: `
        <h3>Early Life and Background</h3>
        <p>Artika Shukla was born in Lucknow, Uttar Pradesh, into a family that valued education and public service. Her father is a retired government officer, and her mother is a teacher. This environment instilled in her a deep respect for public service and a desire to contribute to society through administrative roles.</p>
        
        <h3>Educational Foundation</h3>
        <p>Artika completed her schooling from a reputed school in Lucknow with excellent academic performance. She then pursued her Bachelor's degree in Economics from Lady Shri Ram College, Delhi University, where she developed a strong foundation in economic principles and policy analysis that would later prove invaluable in her UPSC preparation.</p>
        
        <h3>The Journey to Civil Services</h3>
        <p>During her college years, Artika was actively involved in debates, discussions on policy issues, and social service activities. These experiences reinforced her desire to join the civil services and work towards creating positive change in society through policy implementation and governance.</p>
        
        <h3>Comprehensive Preparation Strategy</h3>
        
        <h4>Phase 1: Foundation and Assessment (3 months)</h4>
        <ul>
          <li>Thorough analysis of UPSC syllabus and exam pattern</li>
          <li>Assessment of strengths and weaknesses</li>
          <li>Collection of standard study materials and books</li>
          <li>Creation of a detailed 18-month study plan</li>
        </ul>
        
        <h4>Phase 2: Intensive Preparation (12 months)</h4>
        <ul>
          <li>Systematic coverage of all General Studies papers</li>
          <li>In-depth preparation of Economics optional</li>
          <li>Integration of current affairs with static portions</li>
          <li>Regular answer writing and mock test practice</li>
        </ul>
        
        <h4>Phase 3: Revision and Fine-tuning (3 months)</h4>
        <ul>
          <li>Comprehensive revision of all subjects</li>
          <li>Intensive mock test practice and analysis</li>
          <li>Focus on weak areas and improvement</li>
          <li>Final preparation strategies for exam</li>
        </ul>
        
        <h3>Leveraging Economics Background</h3>
        
        <h4>Advantages of Economics Background</h4>
        <ul>
          <li>Strong foundation in economic concepts and theories</li>
          <li>Better understanding of government policies and their implications</li>
          <li>Analytical skills for policy evaluation</li>
          <li>Advantage in General Studies Paper III (Economics)</li>
        </ul>
        
        <h4>Economics Optional Preparation</h4>
        <p><strong>Paper I: Microeconomics and Macroeconomics</strong></p>
        <ul>
          <li>H.L. Ahuja for Microeconomics concepts</li>
          <li>Mankiw for Macroeconomics principles</li>
          <li>Focus on mathematical models and graphical representations</li>
          <li>Regular practice of numerical problems</li>
        </ul>
        
        <p><strong>Paper II: Indian Economy and Development</strong></p>
        <ul>
          <li>Ramesh Singh for Indian Economy</li>
          <li>Economic Survey for current developments</li>
          <li>Focus on policy analysis and evaluation</li>
          <li>Integration with current economic affairs</li>
        </ul>
        
        <h3>Subject-wise Preparation Strategy</h3>
        
        <h4>General Studies Paper I</h4>
        <ul>
          <li><strong>History:</strong> NCERT foundation + Bipan Chandra for Modern History</li>
          <li><strong>Geography:</strong> NCERT + G.C. Leong for Physical Geography</li>
          <li><strong>Art & Culture:</strong> NCERT + Nitin Singhania</li>
          <li><strong>Society:</strong> Focus on social issues and government initiatives</li>
        </ul>
        
        <h4>General Studies Paper II</h4>
        <ul>
          <li><strong>Polity:</strong> M. Laxmikanth + Constitutional developments</li>
          <li><strong>Governance:</strong> 2nd ARC reports + current governance issues</li>
          <li><strong>Social Justice:</strong> Government schemes and their evaluation</li>
          <li><strong>International Relations:</strong> Current affairs with historical context</li>
        </ul>
        
        <h4>General Studies Paper III</h4>
        <ul>
          <li><strong>Economics:</strong> Leveraged academic background for in-depth understanding</li>
          <li><strong>Science & Technology:</strong> Current affairs + basic scientific concepts</li>
          <li><strong>Environment:</strong> NCERT + current environmental issues</li>
          <li><strong>Security:</strong> Current affairs and strategic analysis</li>
        </ul>
        
        <h4>General Studies Paper IV</h4>
        <ul>
          <li>Focus on case studies from economics and public policy</li>
          <li>Regular practice of ethical dilemmas</li>
          <li>Understanding of administrative ethics and governance</li>
          <li>Real-life examples from economic policies</li>
        </ul>
        
        <h3>Daily Study Routine</h3>
        <ul>
          <li><strong>5:30-6:30 AM:</strong> Physical exercise and meditation</li>
          <li><strong>7:00-9:00 AM:</strong> Current affairs and newspaper analysis</li>
          <li><strong>9:30-12:30 PM:</strong> Economics optional preparation</li>
          <li><strong>2:00-5:00 PM:</strong> General Studies papers</li>
          <li><strong>6:00-8:00 PM:</strong> Answer writing practice</li>
          <li><strong>8:30-10:00 PM:</strong> Revision and note-making</li>
          <li><strong>10:00-10:30 PM:</strong> Planning for next day</li>
        </ul>
        
        <h3>Answer Writing Excellence</h3>
        
        <h4>Structure and Methodology</h4>
        <ul>
          <li>Clear introduction with economic context where relevant</li>
          <li>Well-structured body with logical progression</li>
          <li>Use of economic models, graphs, and data</li>
          <li>Policy-oriented conclusions with recommendations</li>
        </ul>
        
        <h4>Practice Strategy</h4>
        <ul>
          <li>Daily writing of 3-4 answers across different papers</li>
          <li>Focus on integrating economic perspective in all answers</li>
          <li>Time-bound practice for speed improvement</li>
          <li>Regular evaluation and feedback incorporation</li>
        </ul>
        
        <h4>Use of Economic Examples</h4>
        <ul>
          <li>Economic policies as examples in governance questions</li>
          <li>Statistical data to support arguments</li>
          <li>International economic comparisons</li>
          <li>Cost-benefit analysis in policy evaluation</li>
        </ul>
        
        <h3>Current Affairs Integration</h3>
        
        <h4>Economic Affairs Focus</h4>
        <ul>
          <li>Budget analysis and fiscal policy changes</li>
          <li>Monetary policy decisions and their implications</li>
          <li>Trade policies and international economic relations</li>
          <li>Sectoral performance and economic indicators</li>
        </ul>
        
        <h4>Policy Analysis Approach</h4>
        <ul>
          <li>Understanding policy objectives and mechanisms</li>
          <li>Evaluation of policy outcomes and effectiveness</li>
          <li>Identification of implementation challenges</li>
          <li>Suggestions for policy improvements</li>
        </ul>
        
        <h3>Challenges and Solutions</h3>
        
        <h4>Balancing Depth and Breadth</h4>
        <ul>
          <li><strong>Challenge:</strong> Going too deep into economics while neglecting other subjects</li>
          <li><strong>Solution:</strong> Maintained balanced approach across all subjects</li>
        </ul>
        
        <h4>Technical vs. Simple Language</h4>
        <ul>
          <li><strong>Challenge:</strong> Using overly technical economic terms</li>
          <li><strong>Solution:</strong> Practiced explaining complex concepts in simple language</li>
        </ul>
        
        <h4>Current Affairs Integration</h4>
        <ul>
          <li><strong>Challenge:</strong> Keeping up with rapidly changing economic scenario</li>
          <li><strong>Solution:</strong> Regular reading and systematic note-making</li>
        </ul>
        
        <h3>Mock Test Strategy</h3>
        <ul>
          <li>Joined multiple test series for comprehensive practice</li>
          <li>Attempted tests in exam-like conditions</li>
          <li>Detailed analysis focusing on economic questions</li>
          <li>Worked on improving weak areas in other subjects</li>
          <li>Maintained performance tracking for continuous improvement</li>
        </ul>
        
        <h3>Interview Preparation</h3>
        
        <h4>DAF Preparation</h4>
        <ul>
          <li>Thorough preparation of economics background</li>
          <li>Current economic issues and policies</li>
          <li>Personal views on economic development</li>
          <li>Career aspirations in economic administration</li>
        </ul>
        
        <h4>Mock Interview Practice</h4>
        <ul>
          <li>Practice with panels having economics background</li>
          <li>Focus on explaining economic concepts simply</li>
          <li>Preparation for questions on economic policies</li>
          <li>Development of balanced views on controversial issues</li>
        </ul>
        
        <h3>Key Success Factors</h3>
        <ul>
          <li><strong>Academic Leverage:</strong> Effective use of economics background</li>
          <li><strong>Policy Focus:</strong> Strong understanding of government policies</li>
          <li><strong>Answer Writing:</strong> Regular practice with economic perspective</li>
          <li><strong>Current Affairs:</strong> Systematic approach to economic developments</li>
          <li><strong>Balanced Preparation:</strong> Equal focus on all subjects despite economics strength</li>
        </ul>
        
        <h3>Study Materials and Resources</h3>
        
        <h4>Economics Optional</h4>
        <ul>
          <li>H.L. Ahuja - Microeconomics</li>
          <li>Mankiw - Macroeconomics</li>
          <li>Ramesh Singh - Indian Economy</li>
          <li>Economic Survey - Annual publication</li>
          <li>RBI reports and monetary policy statements</li>
        </ul>
        
        <h4>General Studies</h4>
        <ul>
          <li>Standard NCERT books for foundation</li>
          <li>M. Laxmikanth for Polity</li>
          <li>Bipan Chandra for Modern History</li>
          <li>G.C. Leong for Geography</li>
          <li>Current affairs magazines and newspapers</li>
        </ul>
        
        <h3>Time Management Strategies</h3>
        <ul>
          <li>Allocated more time to weaker subjects</li>
          <li>Used economics strength for quick revision</li>
          <li>Integrated economic perspective in other subjects</li>
          <li>Maintained strict schedule with flexibility for current affairs</li>
        </ul>
        
        <h3>Mental Health and Well-being</h3>
        <ul>
          <li>Regular physical exercise and yoga</li>
          <li>Adequate sleep and proper nutrition</li>
          <li>Maintained social connections and hobbies</li>
          <li>Positive mindset and stress management</li>
          <li>Regular breaks and recreational activities</li>
        </ul>
        
        <h3>Advice for Economics Students</h3>
        <ul>
          <li>Leverage your economics background effectively</li>
          <li>Don't neglect other subjects due to economics comfort</li>
          <li>Use economic perspective in all answer writing</li>
          <li>Stay updated with current economic developments</li>
          <li>Practice explaining complex concepts simply</li>
          <li>Focus on policy analysis and evaluation skills</li>
        </ul>
        
        <h3>General Advice for Aspirants</h3>
        <ul>
          <li>Identify and leverage your academic strengths</li>
          <li>Maintain balanced preparation across all subjects</li>
          <li>Focus on answer writing from early preparation</li>
          <li>Stay updated with current affairs systematically</li>
          <li>Believe in yourself and maintain consistency</li>
          <li>Take care of physical and mental health</li>
          <li>Learn from failures and keep improving</li>
        </ul>
        
        <h3>Current Assignment and Impact</h3>
        <p>After her success, Artika was allocated the Uttar Pradesh cadre and has been working on various economic development projects in the state. She is particularly focused on rural development, women's empowerment, and economic policy implementation. Her economics background has been invaluable in her administrative roles, and she continues to inspire aspirants with her journey.</p>
        
        <h3>Legacy and Inspiration</h3>
        <p>Artika's success story demonstrates how academic background can be effectively leveraged for UPSC success. Her journey inspires economics students and shows that with proper strategy, consistent effort, and smart preparation, first-attempt success is achievable. She continues to mentor aspirants and share her experiences through various platforms.</p>
      `
    }
  ];

  const resources = [
    {
      id: 1,
      title: "NCERT Complete Collection (Class 6-12)",
      category: "Foundation Books",
      description: "Complete collection of NCERT textbooks for building strong foundation",
      downloadCount: "45,230",
      rating: 4.9,
      size: "2.3 GB",
      format: "PDF",
      link: "https://ncert.nic.in/textbook.php"
    },
    {
      id: 2,
      title: "Indian Polity by M. Laxmikanth",
      category: "Standard Reference",
      description: "Comprehensive book on Indian Constitution and Political System",
      downloadCount: "38,450",
      rating: 4.8,
      size: "45 MB",
      format: "PDF",
      link: "https://www.mhprofessional.com/9789339221423-india/indian-polity-6e"
    },
    {
      id: 3,
      title: "Modern History by Bipan Chandra",
      category: "History",
      description: "Detailed coverage of India's struggle for independence",
      downloadCount: "42,180",
      rating: 4.7,
      size: "38 MB",
      format: "PDF",
      link: "https://www.orientblackswan.com/details?id=9788125036470"
    },
    {
      id: 4,
      title: "Indian Economy by Ramesh Singh",
      category: "Economics",
      description: "Comprehensive guide to Indian economic development",
      downloadCount: "35,670",
      rating: 4.6,
      size: "52 MB",
      format: "PDF",
      link: "https://www.mhprofessional.com/9789390166626-india/indian-economy-13e"
    },
    {
      id: 5,
      title: "Geography by G.C. Leong",
      category: "Geography",
      description: "Certificate Physical and Human Geography",
      downloadCount: "29,340",
      rating: 4.5,
      size: "41 MB",
      format: "PDF",
      link: "https://www.orientblackswan.com/details?id=9788125036463"
    },
    {
      id: 6,
      title: "Environment by Shankar IAS",
      category: "Environment",
      description: "Complete coverage of Environment and Ecology for UPSC",
      downloadCount: "31,250",
      rating: 4.4,
      size: "28 MB",
      format: "PDF",
      link: "https://www.shankariasacademy.com/books/"
    },
    {
      id: 7,
      title: "Art and Culture by Nitin Singhania",
      category: "Culture",
      description: "Indian Art and Culture for UPSC Civil Services",
      downloadCount: "26,890",
      rating: 4.3,
      size: "35 MB",
      format: "PDF",
      link: "https://www.orientblackswan.com/details?id=9788125036487"
    },
    {
      id: 8,
      title: "Science and Technology Compendium",
      category: "Science",
      description: "Latest developments in Science and Technology",
      downloadCount: "24,560",
      rating: 4.2,
      size: "33 MB",
      format: "PDF",
      link: "https://www.drishtiias.com/science-and-technology"
    },
    {
      id: 9,
      title: "Current Affairs Monthly Compilation",
      category: "Current Affairs",
      description: "Monthly current affairs compilation for UPSC",
      downloadCount: "52,340",
      rating: 4.8,
      size: "15 MB",
      format: "PDF",
      link: "https://www.insightsonindia.com/current-affairs/"
    },
    {
      id: 10,
      title: "Ethics Case Studies Collection",
      category: "Ethics",
      description: "Comprehensive collection of ethics case studies",
      downloadCount: "18,750",
      rating: 4.1,
      size: "22 MB",
      format: "PDF",
      link: "https://www.drishtiias.com/ethics"
    },
    {
      id: 11,
      title: "Previous Years Question Papers (2010-2023)",
      category: "Question Papers",
      description: "Complete collection of UPSC previous years papers",
      downloadCount: "67,890",
      rating: 4.9,
      size: "125 MB",
      format: "PDF",
      link: "https://www.upsc.gov.in/examinations/previous-question-papers"
    },
    {
      id: 12,
      title: "Economic Survey Analysis",
      category: "Economics",
      description: "Detailed analysis of Economic Survey with key highlights",
      downloadCount: "21,450",
      rating: 4.4,
      size: "18 MB",
      format: "PDF",
      link: "https://www.indiabudget.gov.in/economicsurvey/"
    },
    {
      id: 13,
      title: "International Relations Handbook",
      category: "International Relations",
      description: "Comprehensive guide to India's foreign policy and international relations",
      downloadCount: "19,680",
      rating: 4.3,
      size: "29 MB",
      format: "PDF",
      link: "https://www.mea.gov.in/"
    },
    {
      id: 14,
      title: "Disaster Management Guidelines",
      category: "Disaster Management",
      description: "NDMA guidelines and disaster management strategies",
      downloadCount: "16,230",
      rating: 4.0,
      size: "24 MB",
      format: "PDF",
      link: "https://ndma.gov.in/en/guidelines.html"
    },
    {
      id: 15,
      title: "Public Administration by Prasad & Prasad",
      category: "Optional Subject",
      description: "Standard textbook for Public Administration optional",
      downloadCount: "14,560",
      rating: 4.2,
      size: "48 MB",
      format: "PDF",
      link: "https://www.kalinganagar.com/public-administration"
    },
    {
      id: 16,
      title: "Sociology by Haralambos",
      category: "Optional Subject",
      description: "Comprehensive sociology textbook for UPSC optional",
      downloadCount: "13,780",
      rating: 4.1,
      size: "56 MB",
      format: "PDF",
      link: "https://www.pearson.com/uk/educators/higher-education-educators/program/Haralambos-Sociology-Themes-and-Perspectives-8th-Edition/PGM1036662.html"
    },
    {
      id: 17,
      title: "Geography Optional by Savindra Singh",
      category: "Optional Subject",
      description: "Physical Geography for Geography optional students",
      downloadCount: "12,340",
      rating: 4.0,
      size: "42 MB",
      format: "PDF",
      link: "https://www.mhprofessional.com/geography-optional"
    },
    {
      id: 18,
      title: "History Optional Study Material",
      category: "Optional Subject",
      description: "Comprehensive study material for History optional",
      downloadCount: "11,890",
      rating: 3.9,
      size: "67 MB",
      format: "PDF",
      link: "https://www.orientblackswan.com/history-optional"
    },
    {
      id: 19,
      title: "Mathematics Optional by Krishna Series",
      category: "Optional Subject",
      description: "Complete mathematics optional preparation material",
      downloadCount: "9,560",
      rating: 3.8,
      size: "78 MB",
      format: "PDF",
      link: "https://www.krishnaprakashan.com/mathematics-optional"
    },
    {
      id: 20,
      title: "Answer Writing Templates",
      category: "Answer Writing",
      description: "Standard templates and formats for UPSC answer writing",
      downloadCount: "34,670",
      rating: 4.5,
      size: "8 MB",
      format: "PDF",
      link: "https://www.insightsonindia.com/answer-writing/"
    }
  ];

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleStoryReadMore = (story) => {
    setSelectedStory(story);
  };

  const handleResourceDownload = (resource) => {
    setSelectedResource(resource);
    // Simulate download
    setTimeout(() => {
      window.open(resource.link, '_blank');
      setSelectedResource(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-5xl font-bold mb-6">Education Hub</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive resources, expert guidance, and success stories to help you achieve your UPSC dreams. 
              Learn from Dr. Raju Narayana Swamy's experience and proven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center border-b">
            {[
              { id: 'blogs', label: 'Expert Blogs', icon: BookOpen },
              { id: 'stories', label: 'Success Stories', icon: Trophy },
              { id: 'resources', label: 'Study Materials', icon: Download },
              { id: 'roadmap', label: 'UPSC Roadmap', icon: Target }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-4 font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Expert Blogs Section */}
        {activeTab === 'blogs' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Expert Blogs: How to Become IAS</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn from Dr. Raju Narayana Swamy's expertise and proven strategies for UPSC success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <img 
                        src="/image.png"
                        alt="Dr. Raju Narayana Swamy"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-sm text-gray-600">
                        <p className="font-medium">{blog.author}</p>
                        <p>{blog.date} • {blog.readTime}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{blog.views} views</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleReadMore(blog)}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories Section */}
        {activeTab === 'stories' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">First-Attempt Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get inspired by real success stories of UPSC toppers who cleared the exam in their first attempt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                      {story.rank}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div><strong>Attempt:</strong> {story.attempt}</div>
                      <div><strong>Age:</strong> {story.age}</div>
                      <div><strong>Background:</strong> {story.background}</div>
                      <div><strong>Optional:</strong> {story.optional}</div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4 line-clamp-3">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Success Tips:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {story.tips.slice(0, 3).map((tip, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => handleStoryReadMore(story)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">You Can Do It Too!</h3>
              <p className="text-lg">
                These success stories prove that with dedication, smart preparation, and the right strategy, 
                anyone can clear UPSC in their first attempt. Your journey starts today!
              </p>
              <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Preparation Journey
              </button>
            </div>
          </div>
        )}

        {/* Study Materials Section */}
        {activeTab === 'resources' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Downloadable Study Materials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access comprehensive study materials, books, and resources curated for UPSC preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {resource.category}
                        </span>
                      </div>
                      <FileText className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloadCount}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{resource.rating}</span>
                      </div>
                      <div>Size: {resource.size}</div>
                      <div>Format: {resource.format}</div>
                    </div>
                    
                    <button
                      onClick={() => handleResourceDownload(resource)}
                      disabled={selectedResource?.id === resource.id}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      {selectedResource?.id === resource.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UPSC Roadmap Section */}
        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Your Roadmap to UPSC Success</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A comprehensive step-by-step guide to navigate your UPSC preparation journey
              </p>
            </div>

            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Foundation Phase (Months 1-6)</h3>
                    <p className="text-gray-600">Building strong conceptual foundation</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Complete NCERT books (Class 6-12)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Start daily newspaper reading</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Understand exam pattern and syllabus</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Choose optional subject</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Strong conceptual foundation in all subjects</li>
                      <li>• Clear understanding of UPSC requirements</li>
                      <li>• Habit of regular current affairs reading</li>
                      <li>• Finalized optional subject choice</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Intensive Phase (Months 7-12)</h3>
                    <p className="text-gray-600">Deep dive into subjects and skill development</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Cover standard reference books</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Start answer writing practice</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Join test series</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Integrate current affairs with static topics</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive subject knowledge</li>
                      <li>• Improved answer writing skills</li>
                      <li>• Better time management</li>
                      <li>• Integrated understanding of topics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Revision Phase (Months 13-18)</h3>
                    <p className="text-gray-600">Consolidation and exam preparation</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Systematic revision of all subjects</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Intensive mock test practice</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Focus on weak areas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Interview preparation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Complete syllabus revision</li>
                      <li>• Exam-ready mindset</li>
                      <li>• Improved weak areas</li>
                      <li>• Interview confidence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
              <p className="text-lg mb-4">
                Follow this proven roadmap and join thousands of successful candidates who achieved their UPSC dreams
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Download Complete Roadmap
                </button>
                <button className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Get Personalized Guidance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedBlog.title}</h3>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="flex items-center space-x-4 mb-6 pb-4 border-b">
                <img 
                  src="/image.png"
                  alt="Dr. Raju Narayana Swamy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{selectedBlog.author}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{selectedBlog.date}</span>
                    <span>{selectedBlog.readTime}</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{selectedBlog.views} views</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
              </div>

              <div className="flex justify-end mt-6 pt-4 border-t">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={selectedStory.image}
                    alt={selectedStory.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedStory.name}</h3>
                    <p className="text-blue-600 font-semibold">{selectedStory.rank} - {selectedStory.attempt}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-semibold">{selectedStory.age}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Background</p>
                  <p className="font-semibold">{selectedStory.background}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Preparation Time</p>
                  <p className="font-semibold">{selectedStory.preparationTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Optional Subject</p>
                  <p className="font-semibold">{selectedStory.optional}</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: selectedStory.detailedStory }} />
              </div>

              <div className="flex justify-end mt-6 pt-4 border-t">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationHub;