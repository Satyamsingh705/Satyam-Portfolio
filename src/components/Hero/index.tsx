import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import LeetCode from '../Icons/LeetCode';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pb-20 pt-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start space-y-6"
          >
            <motion.div 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 font-medium"
            >
              ML Engineer
            </motion.div>
            
            <motion.h1 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Satyam Kumar</span>
            </motion.h1>
            
            <motion.p 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
            >
              I develop AI-powered solutions that convert data into actionable insights and build intelligent systems to solve complex real-world problems.
            </motion.p>
            
            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              
              <a href="#portfolio" className="btn btn-outline">
                View My Work
              </a>
            </motion.div>

            <motion.div 
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex items-center space-x-4 mt-8"
            >
              <a href="https://github.com/Satyamsingh705?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-dark-light rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              
              <a href="https://www.linkedin.com/in/satyam-kumar-594a75205/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-dark-light rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              
              <a href="https://leetcode.com/u/satyamkumarsingh705071/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-dark-light rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <LeetCode size={20} />
              </a>
              
              <a href="mailto:satyamkumarsingh705071@gmail.com" className="p-2 bg-gray-100 dark:bg-dark-light rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 p-2 w-3/4 md:w-2/3 max-w-sm">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEjH1yXS7FqwWU7KaFq5kOTdVGl3jIeZK3Itv_o8fA4_fAz6Ru6Nd1trUVvWg5caXZEm7ykPG3rf6oEVWtNngb8W6zf1c3YzaAm8swImRQqsqYRgrDUUAfZerkQvV7wog2bVXkEuKo-GLny7lghkObi44WwGSmwxUKLQQzzcGoN4qPC5D0tWMzQ4kZAJyG5w" 
                alt="Satyam Kumar" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;