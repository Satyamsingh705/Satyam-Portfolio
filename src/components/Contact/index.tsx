import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../SectionContainer';
import { MapPin, Phone, Mail, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        {
          to_email: 'satyamkumarsingh705071@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer
      id="contact"
      title="Contact Me"
      subtitle="Let's discuss your project and bring your ideas to life"
      className="bg-gray-50 dark:bg-dark-light"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 space-y-6"
        >
          <motion.div 
            variants={itemVariants}
            className="card hover:shadow-lg transition-all group"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Patna, Bihar, India
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="card hover:shadow-lg transition-all group"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Email
                </h3>
                <a 
                  href="mailto:satyamkumarsingh705071@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  satyamkumarsingh705071@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="card hover:shadow-lg transition-all group"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Phone
                </h3>
                <a 
                  href="tel:+917050715114" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  +91 6207777603
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="card hover:shadow-lg transition-all group"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  Connect
                </h3>
                <div className="flex space-x-3 mt-2">
                  <a 
                    href="https://github.com/Satyamsingh705" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/satyam-kumar-594a75205/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2"
        >
          <motion.div 
            variants={itemVariants}
            className="card hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Send Me a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark text-gray-700 dark:text-gray-200"
                    placeholder="Satyam"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark text-gray-700 dark:text-gray-200"
                    placeholder="satyam@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark text-gray-700 dark:text-gray-200"
                  placeholder="Project Inquiry"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark text-gray-700 dark:text-gray-200"
                  placeholder="I'd like to discuss my project..."
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message sent successfully!</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={20} />
                      <span>Failed to send message. Please try again.</span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default Contact;