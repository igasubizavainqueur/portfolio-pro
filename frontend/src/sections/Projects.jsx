import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import filoseImg from '../assets/filose.png';

const placeholders = [
  {
    title: 'ven-portfolio',
    description: "A fully responsive and modern personal portfolio website developed as a full-stack project to showcase my skills, projects, and experience as a Software Development developer. Built using React.js for the frontend, Node.js for backend logic, and MySQL for data management. The project demonstrates strong understanding of HTML, CSS, JavaScript (ES6), component-based architecture, API integration, and responsive UI/UX design. It also highlights my ability to build scalable web applications with clean code, animations, and user-friendly interfaces.",
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'MySQL',
      'Git & GitHub'
    ],
    image: filoseImg, // Using the imported image from assets folder
    github: 'https://github.com/igasubizavainqueur/portfolio-pro',
    live: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and a seamless checkout experience.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Tailwind'],
    image: '/ecommerce_website.png',
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management System',
    description: 'A responsive Kanban board application enabling teams to organize tasks, assign priorities, and track progress.',
    tech: ['React.js', 'Express', 'MySQL'],
    image: '',
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Chat App',
    description: 'A real-time messaging application with private and group chat functionalities using WebSockets.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MySQL'],
    image: '/portfolio_mockup.png',
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark relative border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-light">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the recent projects I've worked on. Each represents a unique challenge and solution in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {placeholders.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-darker border border-gray-800 rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="w-full h-64 bg-gray-900 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 transform z-0"
                  />
                ) : (
                  <span className="text-gray-700 font-medium tracking-wide z-20">Project Image Placeholder</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent z-10 opacity-60"></div>

                {/* Hover overlay for links */}
                <div className="absolute inset-0 bg-primary/90 z-30 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-darker rounded-full text-light hover:text-primary transition-colors hover:scale-110 transform duration-200">
                    <FiGithub size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-darker rounded-full text-light hover:text-primary transition-colors hover:scale-110 transform duration-200">
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-light mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-dark border border-gray-700 text-light rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 text-sm font-semibold"
                  >
                    <FiGithub size={18} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-dark rounded-xl hover:bg-secondary transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/20"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
