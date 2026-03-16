import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Mail, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  ChevronRight,
  FileText,
  Activity,
  Cpu,
  BarChart2,
  Briefcase,
  ExternalLink,
  Globe
} from 'lucide-react';
import { PROFILE, EDUCATION, RESEARCH_INTERESTS, PUBLICATIONS, EXPERIENCE } from './constants';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const visitorsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeSection !== Section.HOME) return;
    const container = visitorsRef.current;
    if (!container) return;

    // Prevent duplicate scripts when navigating back to Home.
    if (container.querySelector('script#clustrmaps')) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'clustrmaps';
    script.async = true;
    // Force https to avoid mixed-content issues on GitHub Pages.
    script.src = 'https://clustrmaps.com/map_v2.js?d=y7YKKBDBDzrWxDg4fySugE-ZaO_JhzcBsFQReXdpt3U&cl=ffffff&w=a';
    container.appendChild(script);

    return () => {
      // Clean up if Home unmounts / changes.
      container.innerHTML = '';
    };
  }, [activeSection]);

  // Helper to resolve icon string to component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={24} />;
      case 'BarChart2': return <BarChart2 size={24} />;
      default: return <Activity size={24} />;
    }
  };

  // Helper to bold the author name
  const highlightAuthor = (text: string) => {
    // Split by "Cheng Cheng" case insensitive
    const parts = text.split(/(Cheng Cheng)/gi);
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === 'cheng cheng' ? <strong key={i} className="font-bold text-slate-900">{part}</strong> : part
        )}
      </span>
    );
  };

  const renderNav = (mobile: boolean = false) => {
    const items = [
      { id: Section.HOME, label: 'Home' },
      { id: Section.RESEARCH, label: 'Research' },
      { id: Section.CV, label: 'Curriculum Vitae' },
    ];

    const baseClass = mobile 
      ? "flex flex-col space-y-4 p-4" 
      : "flex space-x-8 items-center";
    
    const itemClass = (id: Section, special: boolean = false) => {
      const active = activeSection === id;
      if (special) {
        return `px-4 py-2 rounded-full font-medium transition-all ${
          active 
            ? 'bg-academic-700 text-white shadow-md' 
            : 'bg-academic-600 text-white hover:bg-academic-700 shadow-sm'
        }`;
      }
      return `text-sm font-medium transition-colors hover:text-academic-600 ${
        active ? 'text-academic-600' : 'text-slate-600'
      }`;
    };

    return (
      <nav className={baseClass}>
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              if (mobile) setMobileMenuOpen(false);
            }}
            className={itemClass(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    );
  };

  const renderHome = () => (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 pt-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
            Hi, I'm {PROFILE.name}.
          </h1>
          <div className="space-y-2">
            <p className="text-base md:text-lg text-academic-700 font-semibold">
              {PROFILE.title}
            </p>
             <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {PROFILE.tagline}
            </p>
          </div>
         
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <button 
              onClick={() => setActiveSection(Section.RESEARCH)}
              className="px-6 py-3 bg-academic-700 text-white rounded-lg font-medium hover:bg-academic-800 transition-colors shadow-sm"
            >
              View Research
            </button>
            <div className="flex gap-3">
              <a 
                href={`https://${PROFILE.googleScholar}`} 
                target="_blank"
                rel="noreferrer"
                className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
                title="Google Scholar"
              >
                <GraduationCap size={20} />
              </a>
              <a href={`https://${PROFILE.github}`} className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                <Github size={20} />
              </a>
              <a href={`https://${PROFILE.linkedin}`} className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="p-3 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative shrink-0">
          <img 
            src="/images/profile.JPG" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
          />
        </div>
      </section>

      {/* Intro Bio */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-serif font-bold text-slate-900">About Me</h2>
        <p className="text-slate-600 leading-relaxed">
          {PROFILE.bio}
        </p>
      </section>

      {/* Visitors */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-slate-900">Visitors</h2>
        <div className="flex justify-center">
          <div ref={visitorsRef} style={{ minHeight: 220, minWidth: 260 }} />
        </div>
        <p className="text-xs text-slate-400">
          Visitor map provided by ClustrMaps.
        </p>
      </section>
    </div>
  );

  const renderResearch = () => (
    <div className="space-y-12 animate-fadeIn">
      <div className="space-y-4 border-b border-academic-200 pb-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900">Research Interests</h2>
        <p className="text-slate-600 max-w-3xl">
          My work sits at the intersection of applied mathematics and public health, using computational tools to solve real-world problems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {RESEARCH_INTERESTS.map((interest, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-academic-200 hover:border-academic-300 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-academic-50 text-academic-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-academic-600 group-hover:text-white transition-colors">
              {getIcon(interest.icon)}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{interest.title}</h3>
            {interest.description ? (
              <p className="text-slate-600 text-sm leading-relaxed">{interest.description}</p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="space-y-6 pt-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900">Publications</h3>
        <div className="grid gap-6">
          {PUBLICATIONS.map((pub, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl border border-academic-200 shadow-sm hover:border-academic-300 transition-all">
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  {pub.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-bold text-slate-900 text-lg leading-snug">{pub.title}</h4>
                <div className="text-academic-700 font-medium text-sm">
                  {pub.journal}, {pub.year}
                </div>
                <div className="text-slate-500 text-sm italic">
                  {highlightAuthor(pub.authors)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pub.abstract}
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col justify-start pt-2">
                 {pub.link && (
                   <a 
                     href={pub.link}
                     target="_blank"
                     rel="noreferrer"
                     className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded hover:bg-slate-800 transition-colors inline-flex items-center gap-2 justify-center"
                   >
                     View Paper <ExternalLink size={14}/>
                   </a>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );

  const renderCV = () => (
    <div className="space-y-12 animate-fadeIn max-w-4xl mx-auto">
       <div className="space-y-4 border-b border-slate-200 pb-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900">Curriculum Vitae</h2>
        <a
          href="/pdfs/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-academic-700 font-medium hover:text-academic-800 px-4 py-2 border border-academic-200 rounded-lg hover:bg-academic-50 transition-colors"
        >
          <FileText size={18} /> Download Full PDF
        </a>
      </div>

      {/* Experience Section */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Briefcase size={24} className="text-academic-600"/> Experience
        </h3>
        <div className="relative border-l-2 border-slate-200 pl-8 ml-4 md:ml-0 space-y-10">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-academic-600 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
                <span className="text-slate-500 font-mono text-sm">{exp.year}</span>
              </div>
              <div className="text-academic-700 font-medium mb-2">{exp.institution}</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags?.map((tag, tIdx) => (
                   <span key={tIdx} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded border border-slate-200">
                     {tag}
                   </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-8 pt-8">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <GraduationCap size={24} className="text-academic-600"/> Education
        </h3>
        <div className="relative border-l-2 border-slate-200 pl-8 ml-4 md:ml-0 space-y-10">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-academic-500 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                <h4 className="text-lg font-bold text-slate-900">{edu.institution}</h4>
                <span className="text-slate-500 font-mono text-sm">{edu.year}</span>
              </div>
              <div className="text-academic-700 font-medium mb-2">{edu.degree}</div>
              <ul className="space-y-1">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-slate-600 text-sm">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="text-xl font-serif font-bold text-slate-900 cursor-pointer"
            onClick={() => setActiveSection(Section.HOME)}
          >
            {PROFILE.name}
          </div>
          
          <div className="hidden md:block">
            {renderNav()}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden border-t border-slate-100">
          {renderNav(true)}
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {activeSection === Section.HOME && renderHome()}
        {activeSection === Section.RESEARCH && renderResearch()}
        {activeSection === Section.CV && renderCV()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`https://${PROFILE.googleScholar}`} 
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-academic-600 transition-colors"
              title="Google Scholar"
            >
              <GraduationCap size={18} />
            </a>
            <a href={`https://${PROFILE.github}`} className="text-slate-400 hover:text-academic-600 transition-colors">
              <Github size={18} />
            </a>
            <a href={`https://${PROFILE.linkedin}`} className="text-slate-400 hover:text-academic-600 transition-colors">
              <Linkedin size={18} />
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-400 text-sm">Built with React</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;