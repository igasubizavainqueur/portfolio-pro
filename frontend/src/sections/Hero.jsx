import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Hello, Welcome to my portfolio!
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-light leading-tight mb-6">
            I'm <span className="text-gradient">Igasubiza Vainqueur</span>
            <br /> <span className="text-3xl md:text-5xl text-gray-300">Filose Maximilian</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
            Full-Stack Developer <span className="text-sm">(React.js, Node.js, MySQL)</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg leading-relaxed text-lg">
            A passionate software development student dedicated to crafting elegant, scalable web applications and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] duration-300 transform hover:-translate-y-1"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent text-light hover:text-primary border border-gray-700 hover:border-primary px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Visual Element (Mockup / Abstract Shape) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-4 bg-darker rounded-full border border-gray-800 flex items-center justify-center overflow-hidden">
               {/* Optional User Image replacement here. Using text initials for now */}
               <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">IVF</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
