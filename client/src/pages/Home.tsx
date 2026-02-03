/*
Design Philosophy: Swiss Minimalism with Technical Precision
Enhanced for AI Student Portfolio - Chenoa Nussberger
- Interactive neural network visualization
- Scroll-triggered animations with Framer Motion
- Research & publications showcase
- Dynamic skill visualization
- Educational journey timeline
*/

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import NeuralNetworkCanvas from '@/components/NeuralNetworkCanvas';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BookOpen,
  Award,
  ChevronRight,
  Terminal,
  Brain,
  Database,
  Code2,
  Cpu,
  LineChart
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const projects = [
    {
      id: "01",
      title: "Transformer Attention Visualizer",
      category: "Research",
      tech: ["PyTorch", "React", "D3.js", "FastAPI"],
      description: "Interactive tool for visualizing self-attention patterns in transformer models. Helps researchers understand how models process sequential data.",
      github: "https://github.com/chenoa",
      demo: "https://attention-viz.demo",
      featured: true,
    },
    {
      id: "02",
      title: "Multi-Modal RAG System",
      category: "App",
      tech: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
      description: "Retrieval-augmented generation system that processes text, images, and PDFs for context-aware question answering.",
      github: "https://github.com/chenoa",
    },
    {
      id: "03",
      title: "Neural Style Transfer Studio",
      category: "Website",
      tech: ["TensorFlow.js", "WebGL", "TypeScript"],
      description: "Real-time artistic style transfer running entirely in the browser using optimized neural networks.",
      github: "https://github.com/chenoa",
      demo: "https://style-studio.demo",
    },
    {
      id: "04",
      title: "Conversational AI with Memory",
      category: "Chatbot",
      tech: ["Claude API", "Redis", "Node.js", "React"],
      description: "Context-aware chatbot with long-term memory, personality persistence, and multi-turn reasoning capabilities.",
      github: "https://github.com/chenoa",
    },
    {
      id: "05",
      title: "Federated Learning Framework",
      category: "Research",
      tech: ["Python", "gRPC", "Docker", "PyTorch"],
      description: "Privacy-preserving ML framework enabling collaborative model training across distributed datasets without sharing raw data.",
      github: "https://github.com/chenoa",
    },
    {
      id: "06",
      title: "AI Code Review Assistant",
      category: "Tool",
      tech: ["GPT-4", "GitHub Actions", "TypeScript"],
      description: "Automated code review bot that provides intelligent suggestions, detects potential bugs, and enforces best practices.",
      github: "https://github.com/chenoa",
    },
  ];

  const skills = [
    { name: "Machine Learning", level: 92, icon: Brain },
    { name: "Deep Learning", level: 88, icon: Cpu },
    { name: "Natural Language Processing", level: 85, icon: Terminal },
    { name: "Computer Vision", level: 78, icon: LineChart },
    { name: "Data Engineering", level: 82, icon: Database },
    { name: "Full-Stack Development", level: 90, icon: Code2 },
  ];

  const research = [
    {
      title: "Efficient Fine-Tuning of Large Language Models with Adaptive LoRA",
      venue: "NeurIPS 2025 Workshop",
      year: "2025",
      type: "Workshop Paper",
    },
    {
      title: "Attention Patterns in Multilingual Models: A Comparative Study",
      venue: "ACL Student Research Workshop",
      year: "2025",
      type: "Short Paper",
    },
    {
      title: "Privacy-Preserving Federated Learning for Healthcare Applications",
      venue: "arXiv Preprint",
      year: "2024",
      type: "Preprint",
    },
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "M.S. Artificial Intelligence",
      org: "Stanford University",
      description: "Focus on NLP, deep learning architectures, and AI safety",
    },
    {
      year: "2023 - 2024",
      title: "AI Research Intern",
      org: "Google DeepMind",
      description: "Worked on efficient transformer architectures and model compression",
    },
    {
      year: "2020 - 2024",
      title: "B.S. Computer Science",
      org: "MIT",
      description: "Graduated with honors, concentration in machine learning",
    },
  ];

  const categories = ['all', 'Research', 'App', 'Website', 'Chatbot', 'Tool'];
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation - Fixed top with hairline border */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md hairline-border border-b border-border"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl tracking-tight cursor-pointer"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-primary">C</span>N
            </motion.div>
            <div className="flex items-center gap-8">
              {['work', 'research', 'about', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{ y: -2 }}
                  className="text-sm hover:text-primary transition-colors duration-150 relative group"
                >
                  {item.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Neural Network Background */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <NeuralNetworkCanvas />

        <div className="container relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              className="col-span-12 lg:col-span-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="text-primary text-sm tracking-[0.3em] font-mono">
                  HELLO, I'M
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Chenoa
                <br />
                <span className="text-primary">Nussberger</span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="hairline-border border-l-2 border-primary pl-6 mb-8 max-w-xl"
              >
                <p className="text-xl text-muted-foreground mb-3 font-mono">
                  AI RESEARCHER & ENGINEER
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Building the next generation of intelligent systems. Focused on
                  <span className="text-primary"> large language models</span>,
                  <span className="text-primary"> neural architectures</span>, and
                  <span className="text-primary"> human-AI interaction</span>.
                  Currently pursuing my M.S. in AI at Stanford.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition-all duration-150"
                >
                  VIEW MY WORK
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium hover:border-primary transition-all duration-150"
                >
                  GET IN TOUCH
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-4 hidden lg:flex items-center justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div
                  className="text-[180px] font-bold outline-text opacity-10 select-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  AI
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <section id="work" className="py-24 relative">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 hairline-border border-b border-border pb-6"
            >
              <div>
                <span className="text-primary text-sm tracking-[0.2em] font-mono mb-2 block">
                  PORTFOLIO
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Selected Work
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                {filteredProjects.length} PROJECTS
              </p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs tracking-wider transition-all duration-150 ${
                    activeFilter === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:border-primary'
                  }`}
                >
                  {cat.toUpperCase()}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
                >
                  <div className="hairline-border border border-border bg-card hover:border-primary transition-all duration-300 h-full">
                    {/* Project header with number */}
                    <div className="p-6 pb-0">
                      <div className="flex items-start justify-between mb-4">
                        <span
                          className="text-6xl font-bold outline-text text-primary/50"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {project.id}
                        </span>
                        <span className="text-xs text-primary tracking-wider bg-primary/10 px-3 py-1">
                          {project.category.toUpperCase()}
                        </span>
                      </div>

                      <h3
                        className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-150"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="px-6 pb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs text-muted-foreground border border-border px-2 py-1 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="hairline-border border-t border-border p-4 flex items-center gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="ml-auto text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        VIEW DETAILS
                        <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 bg-card">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="text-primary text-sm tracking-[0.2em] font-mono mb-2 block">
                PUBLICATIONS
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Research
              </h2>
            </motion.div>

            <div className="space-y-6">
              {research.map((paper, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  className="hairline-border border border-border p-6 bg-background hover:border-primary transition-all duration-150 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground tracking-wider">
                          {paper.type.toUpperCase()}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-bold group-hover:text-primary transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {paper.venue}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary/50 font-mono">
                        {paper.year}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Skills & Timeline */}
      <section id="about" className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left column - Bio & Skills */}
              <div className="lg:col-span-7">
                <motion.div variants={fadeInUp}>
                  <span className="text-primary text-sm tracking-[0.2em] font-mono mb-2 block">
                    ABOUT
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Building AI that
                    <br />
                    <span className="text-primary">serves humanity</span>
                  </h2>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="hairline-border border-l-2 border-primary pl-6 mb-12"
                >
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    I'm an AI researcher and engineer passionate about pushing the boundaries of
                    what's possible with machine learning. My work spans from theoretical research
                    on transformer architectures to practical applications in healthcare and education.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    When I'm not training models, I enjoy contributing to open-source AI projects,
                    writing about ML interpretability, and mentoring students interested in AI research.
                    I believe AI should be developed responsibly, with a focus on safety and accessibility.
                  </p>
                </motion.div>

                {/* Skills with animated bars */}
                <motion.div variants={fadeInUp}>
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Technical Skills
                  </h3>
                  <div className="space-y-5">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <skill.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 bg-border overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                            className="h-full bg-primary"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right column - Timeline */}
              <div className="lg:col-span-5">
                <motion.div variants={fadeInUp}>
                  <h3
                    className="text-xl font-bold mb-8 flex items-center gap-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <Award className="w-5 h-5 text-primary" />
                    Journey
                  </h3>
                </motion.div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="relative pl-12"
                      >
                        {/* Timeline dot */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 }}
                          className="absolute left-0 top-1 w-8 h-8 bg-background border-2 border-primary flex items-center justify-center"
                        >
                          <div className="w-2 h-2 bg-primary" />
                        </motion.div>

                        <div className="hairline-border border border-border p-5 bg-card hover:border-primary transition-colors duration-150">
                          <span className="text-xs text-primary font-mono tracking-wider">
                            {item.year}
                          </span>
                          <h4
                            className="text-lg font-bold mt-2"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.org}
                          </p>
                          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-primary text-sm tracking-[0.2em] font-mono mb-2 block">
                CONTACT
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Let's build
                <br />
                <span className="text-primary">something amazing</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="hairline-border border-l-2 border-primary pl-6 mb-12 max-w-2xl"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Interested in collaborating on research, discussing AI projects, or exploring
                opportunities? I'm always excited to connect with fellow researchers, engineers,
                and anyone passionate about advancing AI.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <motion.a
                href="mailto:chenoa.nussberger@stanford.edu"
                whileHover={{ y: -4, borderColor: 'var(--primary)' }}
                className="hairline-border border border-border p-6 bg-background flex items-start gap-4 group"
              >
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground mb-2 tracking-wider">EMAIL</div>
                  <div className="text-sm font-mono group-hover:text-primary transition-colors">
                    chenoa.nussberger
                    <br />
                    @stanford.edu
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/chenoa-nussberger"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, borderColor: 'var(--primary)' }}
                className="hairline-border border border-border p-6 bg-background flex items-start gap-4 group"
              >
                <Github className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground mb-2 tracking-wider">GITHUB</div>
                  <div className="text-sm font-mono group-hover:text-primary transition-colors">
                    @chenoa-nussberger
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/chenoa-nussberger"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, borderColor: 'var(--primary)' }}
                className="hairline-border border border-border p-6 bg-background flex items-start gap-4 group"
              >
                <Linkedin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="text-xs text-muted-foreground mb-2 tracking-wider">LINKEDIN</div>
                  <div className="text-sm font-mono group-hover:text-primary transition-colors">
                    /in/chenoa-nussberger
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hairline-border border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © 2026 Chenoa Nussberger. Crafted with precision.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <a href="https://github.com/chenoa-nussberger" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/chenoa-nussberger" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:chenoa.nussberger@stanford.edu" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
