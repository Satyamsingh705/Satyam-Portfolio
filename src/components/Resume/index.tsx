import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../SectionContainer';
import { education, experience } from '../../data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <SectionContainer
      id="resume"
      title="My Resume"
      subtitle="My educational background and professional experience"
    >
      <div className="flex justify-center mb-10">
        <div className="flex bg-gray-100 dark:bg-dark-light p-1 rounded-lg">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2 ${
              activeTab === 'education'
                ? 'bg-white dark:bg-dark shadow-sm text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} />
            <span>Education</span>
          </button>
          
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center space-x-2 ${
              activeTab === 'experience'
                ? 'bg-white dark:bg-dark shadow-sm text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} />
            <span>Experience</span>
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {activeTab === 'education' ? (
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 group"
              >
                {/* Timeline connector */}
                {index < education.length - 1 && (
                  <div className="absolute top-0 left-3 w-px h-full bg-gray-200 dark:bg-gray-700 transform translate-x-px"></div>
                )}
                
                {/* Timeline circle */}
                <div className="absolute top-0 left-0 w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-700 z-10 group-hover:bg-primary-500 dark:group-hover:bg-primary-700 transition-colors"></div>
                
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.degree}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{item.institute}</h4>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 group"
              >
                {/* Timeline connector */}
                {index < experience.length - 1 && (
                  <div className="absolute top-0 left-3 w-px h-full bg-gray-200 dark:bg-gray-700 transform translate-x-px"></div>
                )}
                
                {/* Timeline circle */}
                <div className="absolute top-0 left-0 w-7 h-7 rounded-full bg-secondary-100 dark:bg-secondary-900/30 border-2 border-secondary-500 dark:border-secondary-700 z-10 group-hover:bg-secondary-500 dark:group-hover:bg-secondary-700 transition-colors"></div>
                
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.role}</h3>
                    <span className="inline-block px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{item.company}</h4>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Resume;