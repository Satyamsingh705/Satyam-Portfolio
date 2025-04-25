import {
  NavItemType,
  SkillType,
  ServiceType,
  ProjectType,
  EducationType,
  ExperienceType,
} from '../types';

export const navItems: NavItemType[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const skills: SkillType[] = [
  { name: 'Machine Learning', percentage: 95 },
  { name: 'Web Development', percentage: 85 },
  { name: 'DevOps', percentage: 90 },
  { name: 'Cloud Computing', percentage: 80 },
];

export const services: ServiceType[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Building scalable web applications using modern technologies like React, Node.js, and cloud services.',
    icon: 'layers',
  },
  {
    id: 2,
    title: 'Machine Learning Solutions',
    description: 'Developing AI-powered applications and implementing ML models for real-world problems.',
    icon: 'cpu',
  },
  {
    id: 3,
    title: 'Cloud Architecture',
    description: 'Designing and implementing cloud-native solutions using AWS, Azure, or Google Cloud Platform.',
    icon: 'database',
  },
  {
    id: 4,
    title: 'Automation Testing',
    description: 'Implementing robust automated testing frameworks to ensure software quality and reliability.',
    icon: 'flask-conical',
  },
  {
    id: 5,
    title: 'API Development',
    description: 'Building robust and secure RESTful APIs with proper documentation and testing.',
    icon: 'webhook',
  },
  {
    id: 6,
    title: 'Technical Consultation',
    description: 'Providing expert advice on technology stack selection and architecture decisions.',
    icon: 'lightbulb',
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'FaceFusion',
    description: 'Developed an innovative machine learning-based application for blending and modifying facial features using deep learning techniques.',
    category: 'Machine Learning',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*L6dJ33tUCaDnpYGTOgpgVA.png',
    link: 'https://github.com/Satyamsingh705/FaceFusion',
  },
  {
    id: 2,
    title: 'Stock Market',
    description: 'Implemented the LSTM architecture to capture complex patterns and trends in stock price movements, achieving significant prediction accuracy',
    category: 'Machine Learning',
    image: 'https://www.analytixlabs.co.in/wp-content/uploads/2021/09/Blog-4-Title-Banner-1.jpg',
    link: 'https://github.com/Satyamsingh705/StockMarket',
  },
  {
    id: 3,
    title: 'Text-Extraction',
    description: 'Applied text extraction for a variety of document types, including invoices, receipts, and forms, automating data collection processes.',
    category: 'Machine Learning',
    image: 'https://cdn.prod.website-files.com/62a9e41d28a7ab25849bce9c/631d9971fddd92801e437f0a_6i-aClKLDO18EN_yW2Ol8mM_DBKd4D2mbdltmmZFBOXUF3GM5zlVLJhnV121T4W30TKzCTXEgzmrQphal-f1N1KyhgbId8wDt983amiHkd7gDst0rgO6V8YEY5BDxYw7-SOOLVywWOp4Cb3tdtB3mGBYOEVLli3cP0ibG3Oawqcn2_ZfxSYHahQ8dQ.jpeg',
    link: 'https://github.com/Satyamsingh705/Text-Extract',
  },
  {
    id: 4,
    title: 'Id Selling Website',
    description: 'Designed and integrated an intuitive interface for listing gaming accounts, including options for game details, prices, and account specifications.',
    category: 'Web Development',
    image: 'https://play-lh.googleusercontent.com/kX8_SPBykW5CqnNnyBkvPn9DVv0REf08oYTDZgsP5F2jz2-yQVDPBF8nElOeidt8ROZs=w526-h296-rw',
    link: 'https://satyamsingh705.github.io/ff-store/',
  },
  {
    id: 5,
    title: 'Accupressure',
    description: 'Integrated an online store for users to browse and purchase acupressure-related products, such as medicines and other tools, with secure payment options.',
    category: 'Web Development',
    image: 'https://media.istockphoto.com/id/544133560/vector/massage-therapy-acupressure-points.jpg?s=612x612&w=0&k=20&c=lFpA9nI6is9DdbQXArfIrTlsqx1q5SzPyB1ICUmIOvk=',
    link: 'https://satyamsingh705.github.io/SkAccupressure/',
  },
  {
    id: 6,
    title: 'Mockly',
    description: 'Developed an interactive web platform to create and conduct mock tests for students preparing for competitive exams and certifications.',
    category: 'Web Development',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCX4hy9ogQkUrQZzYkOsKQNOFoKnBXMNS1DA&s',
    link: 'https://satyamsingh705.github.io/Mockly/',
  },
];

export const education: EducationType[] = [
  {
    id: 1,
    degree: 'BTech in Computer Science and Engineering',
    institute: 'Lovely Professional University',
    duration: '2022 - 2026',
    description: 'Specialized in machine learning and artificial intelligence, with focus on practical applications and projects.',
  },
  {
    id: 2,
    degree: 'Intermediate(Science Stream)',
    institute: 'River Valley Public School',
    duration: '2020 - 2022',
    description: 'Completed Intermediate with a focus on Science stream, emphasizing Mathematics and Computer Science. Graduated with honors and strong foundation in problem-solving and logical reasoning.',
  },
  {
    id: 3,
    degree: 'Class X',
    institute: 'Mount Litera Zee School',
    duration: '2019-2020',
    description: 'Completed Class X under the CBSE Board with distinction, developing core competencies in Science, Mathematics, and English.',
  },
];

export const experience: ExperienceType[] = [
  {
    id: 1,
    role: 'DSA Intern',
    company: 'Programming Pathshala',
    duration: '2024',
    description: 'Assisting in the development of data structures and algorithms solutions, optimizing algorithms for efficiency, and integrating them into web applications and machine learning projects.',
  },
  {
    id: 2,
    role: 'Machine Learning Engineer',
    company: '',
    duration: 'present',
    description: 'Developed and deployed machine learning models for natural language processing and computer vision applications.',
  },
];