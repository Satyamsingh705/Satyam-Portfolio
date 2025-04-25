import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-dark-deep text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#home" className="text-2xl font-bold text-primary-400 mb-4 md:mb-0">
            Portfolio
          </a>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Satyamsingh705?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 dark:bg-dark rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/satyam-kumar-594a75205/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 dark:bg-dark rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a
              href="https://instagram.com/yourinstagramhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 dark:bg-dark rounded-full text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Satyam Kumar. All rights reserved.
            </p>
            
            <nav>
              <ul className="flex flex-wrap justify-center space-x-6">
                <li>
                  <a
                    href="#home"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                
                <li>
                  <a
                    href="#about"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                
                <li>
                  <a
                    href="#portfolio"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;