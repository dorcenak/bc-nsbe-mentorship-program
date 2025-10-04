import React, { useState, useEffect } from 'react';
import { Calendar, Users, Code, FileText, Briefcase, ExternalLink, Menu, X } from 'lucide-react';

export default function ProgramRoadmap() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const sections = [
    { id: 'home', label: 'Home', icon: FileText },
    { id: 'syllabus', label: 'Syllabus', icon: FileText },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'people', label: 'Mentors & Mentees', icon: Users },
    { id: 'resources', label: 'Learning Resources', icon: Code },
    { id: 'templates', label: 'Career Tools', icon: Briefcase },
  ];

  const resources = [
    { name: 'Python for DSA', url: 'https://neetcode.io/courses/lessons/python-for-coding-interviews', description: 'Comprehensive Python guide for Data Structures & Algorithms' },
    { name: 'LeetCode', url: 'https://leetcode.com', description: 'Practice coding problems' },
    { name: 'NeetCode', url: 'https://neetcode.io', description: 'Curated problem lists and solutions' },
    { name: 'Blind 75', url: 'https://leetcode.com/problem-list/oizxjoit/', description: 'Essential 75 LeetCode problems' },
  ];

  const templates = [
    { name: 'Resume Template', url: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs', description: 'Professional resume template for tech roles' },
    { name: 'Application Tracker', url: 'https://docs.google.com/spreadsheets/d/10JLB-zmTe_-UatpRNBypyQPiYbTIN8wAgM8KNbxADeU/edit?gid=451048854#gid=451048854', description: 'Track your job applications efficiently' },
  ];

  const timelineData = [
    { week: 'Week 1 - October 5 & 11', sunday: 'Arrays, Sliding Window & Two Pointers', saturday: 'Lab Hours' },
    { week: 'Week 2 - October 12 & 18', sunday: 'Binary Search & Hashing', saturday: 'Lab Hours' },
    { week: 'Week 3 - October 19 & 25', sunday: 'Stack & Queue', saturday: 'Lab Hours' },
    { week: 'Week 4 - October 26 & November 1', sunday: 'Linked List', saturday: 'Lab Hours' },
    { week: 'Week 5 - November 2 & 8', sunday: 'Heap / Priority Queue', saturday: 'Lab Hours' },
    { week: 'Week 6 - November 9 & 15', sunday: 'Linked List', saturday: 'Lab Hours' },
    { week: 'Week 7 - November 16 & 22', sunday: 'Trees', saturday: 'Lab Hours' },
    { week: 'Week 8 - November 23 & 29', sunday: 'Graphs', saturday: 'Lab Hours' },
    { week: 'Week 9 - November 30 & December 6', sunday: 'Dynamic Programming', saturday: 'Lab Hours' },
    { week: 'Week 10 - December 7', sunday: 'Backtracking', saturday: 'Lab Hours' },
  ];

  const mentorGroups = [
    {
      mentor: { name: 'Ali Ramazani', role: 'Mentor', specialty: 'Software Engineering, Infrastructure, Artificial Intelligence, Machine Learning' },
      mentees: [
        { name: 'Alina Petrosyants', background: 'Computer Science, Digital Media' },
        { name: 'Dumisani Chikomo', background: 'Computer Science' },
        { name: 'Naod Ksmu', background: 'Computer Science, Business Administration' },
      ]
    },
    {
      mentor: { name: 'Bishal Timalsina', role: 'Mentor', specialty: 'Artificial Intelligence, Machine Learning, Software Development' },
      mentees: [
        { name: 'Puskar Chapagain', background: 'Computer Science, Mathematics' },
        { name: 'Dieu Merci Nshizirungu', background: 'Computer Science' },
        { name: 'Mohanad Elagan', background: 'Computer Science, Chemistry' },
      ]
    },
    {
      mentor: { name: 'Nega Demeke', role: 'Mentor', specialty: 'Software Engineering, Open Source' },
      mentees: [
        { name: 'Beni Shendera', background: 'Computer Science' },
        { name: 'Nahom Terrefe', background: 'Computer Science' },
        { name: 'Dee Munsaka', background: 'Computer Science, ETAD, Accounting' },
      ]
    },
    {
      mentor: { name: 'Veronica Agyapong', role: 'Mentor', specialty: 'Software Engineering, Human-Computer Interaction' },
      mentees: [
        { name: 'Dia Paudel', background: 'Computer Science' },
        { name: 'Hope Michael', background: 'Computer Science, Accounting' },
      ]
    },
    {
      mentor: { name: 'Seedy Muhammed', role: 'Mentor', specialty: 'Software Engineering, Engineering Physics' },
      mentees: [
        { name: 'Aubrey Bradshaw', background: 'ETAD' },
        { name: 'Essey Araya', background: 'Engineering Physics, Computer Science' },
        { name: 'Michael Adebusoye', background: 'Engineering Physics, Computer Science' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">Program Roadmap & Resources</h1>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <nav className={`lg:w-64 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-purple-500/20 sticky top-24">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                      activeSection === section.id
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                        : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 min-h-[600px]">
              {activeSection === 'home' && (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="mb-16 min-h-[70vh] flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-purple-500/50">
                      <Code size={48} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Mentorship Program Learning Hub
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                      Find everything you need to succeed in the <b>Berea College National Society of Black Engineers</b> mentorship program and secure your dream job!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
                    <div 
                      className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500"
                      style={{
                        opacity: scrollY > 100 ? 1 : 0,
                        transform: scrollY > 100 ? 'translateY(0)' : 'translateY(30px)',
                        pointerEvents: scrollY > 100 ? 'auto' : 'none'
                      }}
                    >
                      <Calendar className="text-purple-400 mb-3" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">Structured Timeline</h3>
                      <p className="text-gray-400">Follow our weekly curriculum designed to build your skills progressively</p>
                    </div>

                    <div 
                      className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500"
                      style={{
                        opacity: scrollY > 150 ? 1 : 0,
                        transform: scrollY > 150 ? 'translateY(0)' : 'translateY(30px)',
                        pointerEvents: scrollY > 150 ? 'auto' : 'none'
                      }}
                    >
                      <Users className="text-purple-400 mb-3" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">Expert Mentorship</h3>
                      <p className="text-gray-400">Get guidance from experienced mentors throughout your journey</p>
                    </div>

                    <div 
                      className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500"
                      style={{
                        opacity: scrollY > 200 ? 1 : 0,
                        transform: scrollY > 200 ? 'translateY(0)' : 'translateY(30px)',
                        pointerEvents: scrollY > 200 ? 'auto' : 'none'
                      }}
                    >
                      <Code className="text-purple-400 mb-3" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">Curated Resources</h3>
                      <p className="text-gray-400">Access handpicked learning materials and coding platforms</p>
                    </div>

                    <div 
                      className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-500"
                      style={{
                        opacity: scrollY > 250 ? 1 : 0,
                        transform: scrollY > 250 ? 'translateY(0)' : 'translateY(30px)',
                        pointerEvents: scrollY > 250 ? 'auto' : 'none'
                      }}
                    >
                      <Briefcase className="text-purple-400 mb-3" size={32} />
                      <h3 className="text-xl font-bold text-white mb-2">Career Tools</h3>
                      <p className="text-gray-400">Templates and resources to help you land your dream job</p>
                    </div>
                  </div>

                  <div 
                    className="mt-12 transition-all duration-500"
                    style={{
                      opacity: scrollY > 300 ? 1 : 0,
                      transform: scrollY > 300 ? 'translateY(0)' : 'translateY(20px)',
                      pointerEvents: scrollY > 300 ? 'auto' : 'none'
                    }}
                  >
                    <button
                      onClick={() => setActiveSection('syllabus')}
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'syllabus' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileText className="text-purple-400" />
                    Syllabus
                  </h2>
                  <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <FileText size={64} className="text-purple-400 mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">Program Syllabus</h3>
                      <p className="text-gray-300 mb-8 max-w-lg">
                        Access the complete program syllabus with detailed course materials, learning objectives, and schedule.
                      </p>
                      <a
                        href="https://docs.google.com/document/d/1zknVfJZOoZu_PKT8cIRT7NnXWjeZ4X_6eCVS7BkpYqg/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                      >
                        Open Syllabus in Google Docs
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => setActiveSection('timeline')}
                      className="flex items-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <span className="hidden sm:inline">Next: Timeline</span>
                      <span className="sm:hidden">Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'timeline' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Calendar className="text-purple-400" />
                    Weekly Timeline
                  </h2>
                  <div className="space-y-4">
                    {timelineData.map((item) => (
                      <div
                        key={item.week}
                        className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all"
                      >
                        <h3 className="text-xl font-bold text-purple-400 mb-4">{item.week}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Sunday Session: 4:00 PM - 5:30 PM</p>
                            <p className="text-white font-medium">{item.sunday}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Saturday Session: 4:00 PM - 6:00 PM</p>
                            <p className="text-white font-medium">{item.saturday}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
                    <button
                      onClick={() => setActiveSection('syllabus')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"/>
                        <path d="m12 19-7-7 7-7"/>
                      </svg>
                      <span className="hidden sm:inline">Back: Syllabus</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('people')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <span className="hidden sm:inline">Next: Mentors & Mentees</span>
                      <span className="sm:hidden">Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'people' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Users className="text-purple-400" />
                    Mentors & Mentees
                  </h2>
                  
                  <div className="space-y-8">
                    {mentorGroups.map((group, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 rounded-2xl p-6 border border-purple-500/20"
                      >
                        {/* Mentor Card */}
                        <div className="bg-gradient-to-r from-purple-600/30 to-purple-800/30 rounded-xl p-6 mb-6 border border-purple-400/30">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {group.mentor.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-white font-bold text-xl">{group.mentor.name}</p>
                              <p className="text-purple-300 text-sm">{group.mentor.role}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm ml-15">
                            <span className="text-purple-400 font-medium">Specialty:</span> {group.mentor.specialty}
                          </p>
                        </div>

                        {/* Mentees Grid */}
                        <div className="ml-4">
                          <h4 className="text-purple-300 font-semibold mb-4 text-sm uppercase tracking-wide">
                            Mentees
                          </h4>
                          <div className="grid sm:grid-cols-3 gap-4">
                            {group.mentees.map((mentee, menteeIdx) => (
                              <div
                                key={menteeIdx}
                                className="bg-white/5 rounded-lg p-4 border border-purple-500/10 hover:bg-white/10 transition-all"
                              >
                                <p className="text-white font-semibold mb-1">{mentee.name}</p>
                                <p className="text-gray-400 text-xs">{mentee.background}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
                    <button
                      onClick={() => setActiveSection('timeline')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"/>
                        <path d="m12 19-7-7 7-7"/>
                      </svg>
                      <span className="hidden sm:inline">Back: Timeline</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('resources')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <span className="hidden sm:inline">Next: Learning Resources</span>
                      <span className="sm:hidden">Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'resources' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code className="text-purple-400" />
                    Learning Resources
                  </h2>
                  <div className="grid gap-4">
                    {resources.map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 hover:border-purple-400/40 transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                              {resource.name}
                            </h3>
                            <p className="text-gray-400">{resource.description}</p>
                          </div>
                          <ExternalLink className="text-purple-400 group-hover:text-purple-300 transition-colors" size={20} />
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
                    <button
                      onClick={() => setActiveSection('people')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"/>
                        <path d="m12 19-7-7 7-7"/>
                      </svg>
                      <span className="hidden sm:inline">Back: Mentors & Mentees</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('templates')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <span className="hidden sm:inline">Next: Career Tools</span>
                      <span className="sm:hidden">Next</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'templates' && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Briefcase className="text-purple-400" />
                    Career Tools
                  </h2>
                  <div className="grid gap-4">
                    {templates.map((template) => (
                      <a
                        key={template.name}
                        href={template.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 rounded-xl p-6 border border-purple-500/20 hover:bg-white/10 hover:border-purple-400/40 transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                              {template.name}
                            </h3>
                            <p className="text-gray-400">{template.description}</p>
                          </div>
                          <ExternalLink className="text-purple-400 group-hover:text-purple-300 transition-colors" size={20} />
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex justify-start mt-6">
                    <button
                      onClick={() => setActiveSection('resources')}
                      className="flex items-center justify-center gap-2 bg-purple-500/40 hover:bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors duration-300 border border-purple-500/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"/>
                        <path d="m12 19-7-7 7-7"/>
                      </svg>
                      <span className="hidden sm:inline">Back: Learning Resources</span>
                      <span className="sm:hidden">Back</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
