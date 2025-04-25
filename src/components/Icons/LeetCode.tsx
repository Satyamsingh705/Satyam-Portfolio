import React from 'react';

interface LeetCodeProps {
  size?: number;
  color?: string;
  className?: string;
}

const LeetCode: React.FC<LeetCodeProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.661 1.837-.661s1.357.195 1.823.66l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-3.85-1.76 4.99 4.99 0 0 0-3.775 1.701L3.8 11.028a5.122 5.122 0 0 0-1.508 3.653c0 1.38.528 2.698 1.495 3.666l4.344 4.362a5.07 5.07 0 0 0 3.614 1.491 5.1 5.1 0 0 0 3.799-1.688l2.697-2.606c.514-.514.496-1.365-.039-1.9-.535-.535-1.387-.552-1.901-.038Z" />
      <path d="M20.73 7.73A4.99 4.99 0 0 0 18.97 5H9.54" />
      <path d="M11.99 7H21v2h-7" />
    </svg>
  );
};

export default LeetCode;
