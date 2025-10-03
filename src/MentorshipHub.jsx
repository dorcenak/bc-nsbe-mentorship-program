import React, { useState } from 'react';
import { Calendar, Users, Code, FileText, Briefcase, ExternalLink, Menu, X } from 'lucide-react';

export default function ProgramRoadmap() {
  const [activeSection, setActiveSection] = useState('syllabus');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
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
    { week: 'Week 1', sunday: 'Arrays & Hashing Introduction', saturday: 'Practice Session: Easy Problems' },
    { week: 'Week 2', sunday: 'Two Pointers Technique', saturday: 'Practice Session: Two Pointers' },
    { week: 'Week 3', sunday: 'Sliding Window', saturday: 'Practice Session: Sliding Window' },
    { week: 'Week 4', sunday: 'Stack & Queue', saturday: 'Practice Session: Stack Problems' },
  ];

  const mentorGroups = [
    {
      mentor: { name: 'Ali Ramazani', role: 'Mentor', specialty: 'Software Engineering, Infrastructure, Artificial Intelligence, Machine Learning' },
      mentees: [
        { name: 'Alina  Petrosyants', background: 'Computer Science, Digital Media' },
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
      mentor: { name: 'Seedy  Muhammed', role: 'Mentor', specialty: 'Software Engineering, Engineering Physics' },
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
              {activeSection === 'syllabus' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                      <FileText className="text-purple-400" />
                      Syllabus
                    </h2>
                    <a
                      href="https://docs.google.com/document/d/1zknVfJZOoZu_PKT8cIRT7NnXWjeZ4X_6eCVS7BkpYqg/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                    >
                      Open in Google Docs
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-purple-500/20">
                    {/* Replace the URL below with your actual Google Doc embed URL */}
                    {true ? (
                      <div className="bg-white rounded-lg overflow-hidden" style={{ height: '700px' }}>
                        <iframe
                          src="https://docs.google.com/document/d/e/2PACX-1vS6f971UPKBfpytmRXDISDvk2_IKZwtpkmADBpi3AEyvPJSTuoS9CKx-ebEQ7JLgAYSH4lOa2ANHzo8/pub?embedded=true"
                          className="w-full h-full"
                          frameBorder="0"
                          title="Program Syllabus"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-20 text-center">
                        <FileText size={64} className="text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Google Doc Embed Ready</h3>
                        <p className="text-gray-300 mb-6 max-w-lg">
                          To display your syllabus here, follow the setup instructions below.
                        </p>
                        <div className="bg-white/5 rounded-lg p-6 text-left max-w-2xl border border-purple-500/20">
                          <p className="text-purple-300 font-semibold mb-3">Setup Instructions:</p>
                          <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
                            <li>Open your Google Doc</li>
                            <li>Click <strong>File → Share → Publish to web</strong></li>
                            <li>In the dialog, select the <strong>"Embed"</strong> tab</li>
                            <li>Click <strong>"Publish"</strong></li>
                            <li>Copy the URL from the iframe src (starts with https://docs.google.com/document/d/e/...)</li>
                            <li>In the code, change <code className="bg-purple-900/50 px-2 py-1 rounded">false</code> to <code className="bg-purple-900/50 px-2 py-1 rounded">true</code> on line with the conditional</li>
                            <li>Replace the iframe src URL with your embed URL</li>
                            <li>Also update the "Open in Google Docs" button URL above</li>
                          </ol>
                        </div>
                      </div>
                    )}
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
                            <p className="text-sm text-gray-400 mb-1">Sunday Session</p>
                            <p className="text-white font-medium">{item.sunday}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Saturday Session</p>
                            <p className="text-white font-medium">{item.saturday}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}