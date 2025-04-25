import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionContainer from '../SectionContainer';
import { projects } from '../../data';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique categories - ensure we're using normalized strings
  const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));
  const categories = ['all', ...uniqueCategories];

  // Apply filtering with improved case handling
  const filteredProjects = filter.toLowerCase() === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <SectionContainer
      id="portfolio"
      title="My Portfolio"
      subtitle="Check out some of my recent projects"
      className="bg-gray-50 dark:bg-dark-light"
    >
      <div className="flex justify-center mb-10 overflow-x-auto scrollbar-hide">
        <div className="flex bg-white dark:bg-dark p-1 rounded-lg shadow-sm">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-all ${
                filter.toLowerCase() === category.toLowerCase()
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center p-8">
          <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-xl shadow-md bg-white dark:bg-dark"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-primary-500/80 text-white text-sm rounded-full mb-2">
                        {project.category}
                      </span>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white dark:bg-dark-light rounded-full text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    View Project
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </SectionContainer>
  );
};

export default Portfolio;