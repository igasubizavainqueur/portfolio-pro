import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-darker relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-light">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-light mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-dark border border-gray-800 rounded-full text-primary">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:igasubizavainqueurfilosemaximi@gmail.com" className="text-light hover:text-primary transition-colors text-lg break-all">
                    igasubizavainqueurfilosemaximi<br />@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-dark border border-gray-800 rounded-full text-primary">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+250796018772" className="text-light hover:text-primary transition-colors text-lg">
                    0796018772
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-dark border border-gray-800 rounded-full text-primary">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-light text-lg">Rwanda</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <h4 className="text-gray-400 font-medium mb-4">Find me on</h4>
              <div className="flex gap-4">
                <a href="https://github.com/igasubizavainqueur" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark border border-gray-800 rounded-full text-light hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/igasubizavainqueur" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark border border-gray-800 rounded-full text-light hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.instagram.com/vain_queu_r/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark border border-gray-800 rounded-full text-light hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <FaInstagram size={20} />
                </a>
                <a href="https://twitter.com/igasubizvainqueurfilosemaximi" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark border border-gray-800 rounded-full text-light hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <FaTwitter size={20} />
                </a>
                <a href="https://www.facebook.com/venqueurphiloze" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark border border-gray-800 rounded-full text-light hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark border border-gray-800 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-darker border border-gray-800 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-darker border border-gray-800 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-darker border border-gray-800 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
