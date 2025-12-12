import React from 'react';
import { ArrowRight, Code, Database, Globe, TrendingUp } from 'lucide-react';
import { Button, Section, Card } from '../components/Components';
import { services, projects } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/50 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">New Case Study: AlphaStream Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Engineering the Future of <br className="hidden md:block" /> Quantitative Finance.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We provide R&D, Data Science, and Full-Stack expertise to world-class financial institutions. Backed by Quantbot Technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" to="/services">Explore Services</Button>
            <Button size="lg" variant="outline" to="/work">View Our Work</Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Section className="bg-slate-50 dark:bg-dark-900/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400">
            We don't just write code; we solve complex mathematical and engineering challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={service.id} className="p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center mb-6">
                {idx === 0 && <Code size={24} />}
                {idx === 1 && <Database size={24} />}
                {idx === 2 && <Globe size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.slice(0, 2).map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-brand-600" to="/services">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Work */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
            <p className="text-slate-600 dark:text-slate-400">Transforming industries with data-driven solutions.</p>
          </div>
          <Button variant="outline" to="/work" className="mt-4 md:mt-0">View All Projects</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <span className="text-brand-400 font-medium text-sm mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                <span className="text-white font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Careers CTA */}
      <Section className="py-24 bg-brand-600 dark:bg-brand-700 relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join "Funtopolis"</h2>
          <p className="text-brand-100 text-lg md:text-xl mb-10">
            Work on challenging technical problems with a team that values wellness, growth, and Milktea Mondays.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-100 dark:bg-white dark:text-brand-600" to="/careers">
              View Open Roles
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-brand-500 dark:hover:bg-brand-600 dark:border-white" to="/about">
              Our Culture
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;