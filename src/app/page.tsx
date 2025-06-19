'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiExternalLink, FiCode, FiInstagram} from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiMongodb, SiFastapi, SiExpress } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  website: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface PortfolioData {
  name: string;
  nickname: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

const portfolioData: PortfolioData = {
  name: "Frederick Krisna Suryopranoto",
  nickname: "FS",
  role: "Full Stack Developer & Data Scientist",
  email: "frederickkrisna@email.com",
  phone: "+62 895-2953-2449",
  location: "Jakarta, Indonesia",
  bio: "Experienced Full Stack Developer and Data Scientist specializing in end-to-end web development, data-driven systems, and AI integration for modern applications.",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "C Language", "Python", "PostgreSQL", "Firebase", "Java OOP", "Tailwind CSS",
  ],
  projects: [
    {
      id: 1,
      title: "Alzheimer Disease Prediction",
      description: "AI-powered web app for early detection of Alzheimer's disease using machine learning algorithms.",
      tech: ["Python", "Jupyter Notebook", "Streamlit", "AI", "Machine Learning"],
      image: "/alzheimer_disease_prediction.png",
      github: "https://github.com/Frederickkrisna/Alzheimer_Disease_Prediction",
      website: "https://alzheimerdiseaseprediction.streamlit.app/"
    },
    {
      id: 2,
      title: "Salon Reservation System",
      description: "A modern web application for managing salon appointments, featuring real-time booking and user-friendly interface.",
      tech: ["React.js", "TypeScript", "JavaScript", "Firebase", "Firestore", "Tailwind CSS"],
      image: "/sea_salon.png",
      github: "https://github.com/Frederickkrisna/sea-salon",
      website: "https://frederickkrisna.github.io/sea-salon"
    },
    {
      id: 3,
      title: "Mood Bridge",
      description: "A mental health web application for emotional analysis and tracking, featuring AI-driven insights and a user-friendly experience to support well-being.",
      tech: ["React Vite", "NLP", "Jupyter Notebook", "TypeScript", "Python", "Tailwind CSS"],
      image: "/mood_bridge.png",
      github: "https://github.com/Frederickkrisna/mood-bridge",
      website: "https://mood-bridge.vercel.app/"
    }
  ],
  experience: [
    {
      company: "Assistant Laboratory",
      role: "Part-time Assistant",
      period: "2024 - 2025",
      description: "Teaching Introduction to Programming with Java and Algorithms & Programming to over 100 students across Computer Science and DBI programs, covering basic Java and the four pillars of OOP. Additionally, designed competitive programming problems for weekly Online Judge assignments, developed final exam practicum cases, and was recognized as the Best Assistant Lab for outstanding performance."
    },
    {
      company: "Share IT HIMTI Binus",
      role: "The Chief Committee",
      period: "2024 - 2025",
      description: "Acted as the event chairperson, responsible for assembling the team, managing member tasks, and overseeing the successful execution of the event."
    },
    {
      company: "Computer Class HIMTI Binus",
      role: "Teaching Instructor",
      period: "2024",
      description: "Designed and delivered instructional materials for core computer science subjects, with a focus on Linear Algebra and Discrete Mathematics."
    },
    {
      company: "Summer Class HIMTI Binus",
      role: "Teaching Instructor",
      period: "2024",
      description: "Developed teaching materials and presentations for Algorithm and Programming subjects, covering basic algorithm concepts, programming logic, and code implementation using programming languages."
    }
  ],
  social: {
    github: "https://github.com/Frederickkrisna",
    linkedin: "https://www.linkedin.com/in/frederick-suryopranoto/",
    instagram: "https://www.instagram.com/frederickkrisna/"
  }
};

const techIcons: Record<string, JSX.Element> = {
  'JavaScript': <TbBrandJavascript />,
  'TypeScript': <SiTypescript />,
  'React': <FaReact />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <FaNodeJs />,
  'Python': <FaPython />,
  'PostgreSQL': <SiPostgresql />,
  'MongoDB': <SiMongodb />,
  'Java OOP': <FaJava />,
  'FastAPI': <SiFastapi />,
  'Express': <SiExpress />,
  'Firebase': <IoLogoFirebase />,
  'Tailwind CSS': <RiTailwindCssFill />,
  'C Language': <FiCode />
};

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = ['home', 'about', 'projects', 'experience', 'contact'];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              {portfolioData.name.split(' ')[0]}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === item 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                {portfolioData.nickname}
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 flex items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {portfolioData.role}
              </span>
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {portfolioData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FiExternalLink />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FiMail />
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {portfolioData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="skill-badge flex items-center justify-center gap-2"
                    >
                      {techIcons[skill] || <FiCode />}
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FiMail className="text-blue-600 text-xl" />
                    <span className="text-gray-700">{portfolioData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FiPhone className="text-blue-600 text-xl" />
                    <span className="text-gray-700">{portfolioData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <FiMapPin className="text-blue-600 text-xl" />
                    <span className="text-gray-700">{portfolioData.location}</span>
                  </div>
                </div>
                <div className="flex space-x-6 mt-8">
                  <a 
                    href={portfolioData.social.github} 
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a 
                    href={portfolioData.social.linkedin} 
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin /> LinkedIn
                  </a>
                  <a 
                    href={portfolioData.social.instagram} 
                    className="text-gray-600 hover:text-gray-900 transition-colors font-medium hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="card group"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 font-medium relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image 
                      src={project.image}
                      width={400}
                      height={250} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a 
                        href={project.github} 
                        className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors shadow-md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub />
                      </a>
                      <a 
                        href={project.website} 
                        className="bg-white p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors shadow-md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="tech-badge flex items-center gap-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 group">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 z-10"></div>
                  <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gray-200 group-last:hidden"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                      </div>
                      <span className="text-gray-500 mt-2 md:mt-0 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's chat and see how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`mailto:${portfolioData.email}`}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FiMail />
                Send Email
              </a>
              <a
                href={`tel:${portfolioData.phone}`}
                className="btn-secondary border-gray-600 text-gray-300 hover:bg-gray-800/50 flex items-center justify-center gap-2"
              >
                <FiPhone />
                Call Me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}