import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../SectionContainer';
import { services } from '../../data';
import { 
  Layers, 
  Cpu, 
  Database, 
  FlaskConical, 
  Webhook, 
  Lightbulb 
} from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'layers':
      return <Layers size={24} />;
    case 'cpu':
      return <Cpu size={24} />;
    case 'database':
      return <Database size={24} />;
    case 'flask-conical':
      return <FlaskConical size={24} />;
    case 'webhook':
      return <Webhook size={24} />;
    case 'lightbulb':
      return <Lightbulb size={24} />;
    default:
      return <Layers size={24} />;
  }
};

const Services: React.FC = () => {
  return (
    <SectionContainer
      id="services"
      title="My Services"
      subtitle="Specialized in web development and machine learning solutions"
      className="bg-gray-50 dark:bg-dark-light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card bg-white dark:bg-dark group hover:shadow-xl hover:-translate-y-2 transition-all"
          >
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-dark transition-colors">
              {getIcon(service.icon)}
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;