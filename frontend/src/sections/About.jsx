import { motion } from 'framer-motion';
import vainqueur from '../assets/vainqueur.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark relative border-y border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-light">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl group border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              {/* Your actual profile image */}
              <img
                src={vainqueur}
                alt="vainqueur"
                className="w-full h-full object-cover top-0 left-0 absolute"
              />

            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-light mb-4 text-gradient">
              Level 5 Software Development Student
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Hello! I'm Igasubiza Vainqueur Filose Maximilian, based in Rwanda. I am currently pursuing my Level 5 studies in Software Development, deeply passionate about building dynamic and responsive web applications from the ground up.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              My core focus is full-stack development, leveraging modern technologies like React.js and Node.js combined with robust databases like MySQL. My goal is to continually improve my craft, writing clean code, and creating seamless user experiences that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-gray-800 pt-8">
              <div>
                <span className="block text-gray-400 font-medium mb-1 uppercase text-xs tracking-wider">Location</span>
                <span className="text-light font-semibold">Rwanda</span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-1 uppercase text-xs tracking-wider">Email</span>
                <span className="text-light font-semibold break-words">igasubizavainqueur...</span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-1 uppercase text-xs tracking-wider">Education</span>
                <span className="text-light font-semibold">Level 5 Diploma</span>
              </div>
              <div>
                <span className="block text-gray-400 font-medium mb-1 uppercase text-xs tracking-wider">Looking for</span>
                <span className="text-light font-semibold text-primary">Internships / Roles</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
