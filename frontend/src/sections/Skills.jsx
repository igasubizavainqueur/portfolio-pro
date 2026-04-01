import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, 
  SiNodedotjs, SiMysql, SiGit, SiGithub 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white' },
  { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-darker relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-light">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20 group"
            >
              <skill.icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-light font-medium tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
