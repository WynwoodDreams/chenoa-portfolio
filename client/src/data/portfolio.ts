import {
  Brain,
  Code2,
  Cpu,
  Database,
  LineChart,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  firstName: 'Chenoa',
  lastName: 'Nussberger',
  role: 'AI Researcher & Engineer',
  focus: ['Large language models', 'Neural architectures', 'Human-AI interaction'],
  email: 'chenoa.nussberger@stanford.edu',
  github: { handle: '@chenoa-nussberger', url: 'https://github.com/chenoa-nussberger' },
  linkedin: { handle: '/in/chenoa-nussberger', url: 'https://linkedin.com/in/chenoa-nussberger' },
};

export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Transformer Attention Visualizer',
    category: 'Research',
    tech: ['PyTorch', 'React', 'D3.js', 'FastAPI'],
    description:
      'Interactive tool for visualizing self-attention patterns in transformer models. Helps researchers understand how models process sequential data.',
    github: 'https://github.com/chenoa',
    demo: 'https://attention-viz.demo',
    featured: true,
  },
  {
    id: '02',
    title: 'Multi-Modal RAG System',
    category: 'App',
    tech: ['LangChain', 'OpenAI', 'Pinecone', 'Next.js'],
    description:
      'Retrieval-augmented generation system that processes text, images, and PDFs for context-aware question answering.',
    github: 'https://github.com/chenoa',
  },
  {
    id: '03',
    title: 'Neural Style Transfer Studio',
    category: 'Website',
    tech: ['TensorFlow.js', 'WebGL', 'TypeScript'],
    description:
      'Real-time artistic style transfer running entirely in the browser using optimized neural networks.',
    github: 'https://github.com/chenoa',
    demo: 'https://style-studio.demo',
  },
  {
    id: '04',
    title: 'Conversational AI with Memory',
    category: 'Chatbot',
    tech: ['Claude API', 'Redis', 'Node.js', 'React'],
    description:
      'Context-aware chatbot with long-term memory, personality persistence, and multi-turn reasoning capabilities.',
    github: 'https://github.com/chenoa',
  },
  {
    id: '05',
    title: 'Federated Learning Framework',
    category: 'Research',
    tech: ['Python', 'gRPC', 'Docker', 'PyTorch'],
    description:
      'Privacy-preserving ML framework enabling collaborative model training across distributed datasets without sharing raw data.',
    github: 'https://github.com/chenoa',
  },
  {
    id: '06',
    title: 'AI Code Review Assistant',
    category: 'Tool',
    tech: ['GPT-4', 'GitHub Actions', 'TypeScript'],
    description:
      'Automated code review bot that provides intelligent suggestions, detects potential bugs, and enforces best practices.',
    github: 'https://github.com/chenoa',
  },
];

export const categories = ['all', 'Research', 'App', 'Website', 'Chatbot', 'Tool'];

export const skills: { name: string; level: number; icon: LucideIcon }[] = [
  { name: 'Machine Learning', level: 92, icon: Brain },
  { name: 'Deep Learning', level: 88, icon: Cpu },
  { name: 'Natural Language Processing', level: 85, icon: Terminal },
  { name: 'Computer Vision', level: 78, icon: LineChart },
  { name: 'Data Engineering', level: 82, icon: Database },
  { name: 'Full-Stack Development', level: 90, icon: Code2 },
];

export const research = [
  {
    title: 'Efficient Fine-Tuning of Large Language Models with Adaptive LoRA',
    venue: 'NeurIPS 2025 Workshop',
    year: '2025',
    type: 'Workshop Paper',
  },
  {
    title: 'Attention Patterns in Multilingual Models: A Comparative Study',
    venue: 'ACL Student Research Workshop',
    year: '2025',
    type: 'Short Paper',
  },
  {
    title: 'Privacy-Preserving Federated Learning for Healthcare Applications',
    venue: 'arXiv Preprint',
    year: '2024',
    type: 'Preprint',
  },
];

export const timeline = [
  {
    year: '2024 - Present',
    title: 'M.S. Artificial Intelligence',
    org: 'Stanford University',
    description: 'Focus on NLP, deep learning architectures, and AI safety',
  },
  {
    year: '2023 - 2024',
    title: 'AI Research Intern',
    org: 'Google DeepMind',
    description: 'Worked on efficient transformer architectures and model compression',
  },
  {
    year: '2020 - 2024',
    title: 'B.S. Computer Science',
    org: 'MIT',
    description: 'Graduated with honors, concentration in machine learning',
  },
];
