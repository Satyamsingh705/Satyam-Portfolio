import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../SectionContainer';
import { testimonials } from '../../data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <SectionContainer
      id="testimonials"
      title="Testimonials"
      subtitle="What my clients say about my work"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="card text-center p-8 relative">
                    <Quote 
                      size={40} 
                      className="absolute top-6 left-6 text-gray-200 dark:text-gray-800 opacity-50"
                    />
                    
                    <div className="w-20 h-20 mx-auto mb-6 relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full border-4 border-primary-100 dark:border-primary-900/30"
                      />
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                      "{testimonial.content}"
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {testimonial.name}
                    </h4>
                    
                    <p className="text-primary-600 dark:text-primary-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white dark:bg-dark-light shadow-md rounded-full p-3 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white dark:bg-dark-light shadow-md rounded-full p-3 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index
                  ? 'bg-primary-600 dark:bg-primary-400'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;