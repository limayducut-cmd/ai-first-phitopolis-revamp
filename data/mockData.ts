import { Service, Job, TeamMember, BlogPost, Project } from '../types';

export const services: Service[] = [
  {
    id: 's1',
    title: 'R&D & Engineering',
    description: 'Cutting-edge research and development capabilities designed to solve complex computational problems.',
    icon: 'Cpu',
    features: ['Custom Algorithm Development', 'High-Performance Computing', 'Scalable Architecture Design']
  },
  {
    id: 's2',
    title: 'Data Science & AI',
    description: 'Transforming raw data into actionable insights through advanced machine learning and quantitative analysis.',
    icon: 'Database',
    features: ['Quantitative Research Signals', 'Predictive Modeling', 'ETL Pipelines', 'Financial Market Data Processing']
  },
  {
    id: 's3',
    title: 'Full-Stack Development',
    description: 'End-to-end application development tailored for speed, reliability, and user experience.',
    icon: 'Layers',
    features: ['Multi-cloud Deployments', 'React & Next.js Ecosystems', 'Enterprise-grade Security', 'Microservices']
  }
];

export const jobs: Job[] = [
  {
    id: 'j1',
    slug: 'senior-quantitative-developer',
    title: 'Senior Quantitative Developer',
    department: 'Engineering',
    location: 'New York / Remote',
    type: 'Full-time',
    description: 'We are seeking a Senior Quantitative Developer to lead our financial data infrastructure team. You will build high-performance ETL pipelines and implement complex trading algorithms.',
    requirements: [
      '5+ years experience with Python and C++',
      'Deep understanding of financial market data',
      'Experience with distributed systems',
      'Strong mathematical background'
    ],
    niceToHave: ['Experience with KDB+/Q', 'Cloud architecture (AWS/GCP)']
  },
  {
    id: 'j2',
    slug: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    department: 'Product',
    location: 'London / Hybrid',
    type: 'Full-time',
    description: 'Join our product team to build the next generation of our client-facing analytics dashboards. You will work across the stack from PostgreSQL to React.',
    requirements: [
      '3+ years with React and Node.js',
      'Experience with TypeScript',
      'Familiarity with SQL and NoSQL databases'
    ]
  },
  {
    id: 'j3',
    slug: 'data-scientist',
    title: 'Data Scientist',
    department: 'Research',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Help us uncover hidden patterns in global market data using state-of-the-art machine learning techniques.',
    requirements: [
      'Masters or PhD in Statistics, CS, or related field',
      'Proficiency in PyTorch or TensorFlow',
      'Experience with time-series forecasting'
    ]
  }
];

export const team: TeamMember[] = [
  {
    id: 't1',
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Former Quantbot executive with 15 years in quantitative finance and high-frequency trading systems.',
    image: 'https://picsum.photos/seed/sarah/400/400',
    linkedin: '#'
  },
  {
    id: 't2',
    name: 'James Rodriguez',
    role: 'VP of Engineering',
    bio: 'Expert in distributed systems and multi-cloud architecture. Previously led platform engineering at a major fintech.',
    image: 'https://picsum.photos/seed/james/400/400',
    linkedin: '#'
  },
  {
    id: 't3',
    name: 'Elena Volkov',
    role: 'Head of Data Science',
    bio: 'PhD in Mathematics. Specializes in predictive modeling and alternative data strategies.',
    image: 'https://picsum.photos/seed/elena/400/400',
    linkedin: '#'
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Global Market Sentinel',
    category: 'Data Science',
    description: 'A real-time anomaly detection system for global equity markets processing terabytes of tick data daily.',
    image: 'https://picsum.photos/seed/p1/800/600',
    results: ['Reduced latency by 40%', 'Improved signal accuracy by 15%'],
    techStack: ['Python', 'Kafka', 'AWS', 'TensorFlow']
  },
  {
    id: 'p2',
    title: 'AlphaStream Platform',
    category: 'Full-Stack',
    description: 'A unified dashboard for institutional investors to visualize complex portfolio risks in real-time.',
    image: 'https://picsum.photos/seed/p2/800/600',
    results: ['Onboarded 50+ institutional clients', 'Zero downtime deployment'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'future-of-quant-finance',
    title: 'The Future of Quantitative Finance in the Cloud Era',
    excerpt: 'How multi-cloud architectures are reshaping the way we process market data.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
    author: 'Dr. Sarah Chen',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'Engineering',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: 'b2',
    slug: 'wellness-week-2023',
    title: 'Recap: Phitopolis Wellness Week 2023',
    excerpt: 'From yoga sessions to mental health workshops, here is how we prioritize our team well-being.',
    content: 'At Phitopolis, we believe that a healthy mind drives innovation. Last week, we celebrated our annual Wellness Week...',
    author: 'People Team',
    date: 'Sep 28, 2023',
    readTime: '3 min read',
    category: 'Culture',
    image: 'https://picsum.photos/seed/blog2/800/400'
  }
];