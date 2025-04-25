import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data';
import SectionContainer from '../SectionContainer';
import { Download, Mail } from 'lucide-react';

const About: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <SectionContainer
      id="about"
      title="About Me"
      subtitle="Get to know more about me and my skills"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            My Story
          </motion.h3>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              Hi there! I’m Satyam Kumar, an aspiring Machine Learning Engineer with a strong passion for building intelligent systems that make a real-world impact.
            </motion.p>
            
            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              My journey began as a self-taught programmer, creating small projects and experimenting with code out of pure curiosity. Over time, I expanded my skill set to include machine learning, deep learning, and data-driven application development. From stock market predictions using LSTMs to hybrid recommendation systems, I’ve worked on projects that blend practical use-cases with the power of AI.


            </motion.p>
            
            <motion.p
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              I believe in building solutions that are not only technically robust but also meaningful, scalable, and user-centric. My focus is on designing models that are optimized for performance and capable of adapting to real-world complexities.
            </motion.p>
            
            <motion.p
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              When I’m not coding or training models, you’ll probably find me exploring new tech, learning something new, or enjoying a quiet moment with a book or nature walk.
            </motion.p>
          </div>
          
          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a 
              href="#contact" 
              className="btn btn-primary flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1YIe0-xvFQbDsN0oaO5U6NA7mjTE45OwU/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.h3
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            My Skills
          </motion.h3>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-primary-600 dark:text-primary-400">{skill.percentage}%</span>
                </div>
                
                <div className="h-2 w-full bg-gray-200 dark:bg-dark-deep rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="card hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform">
                  2+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
              </div>
            </motion.div>
            
            <motion.div
              custom={8}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="card hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2 group-hover:scale-110 transition-transform">
                  15+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default About;