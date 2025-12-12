import React, { useState } from 'react';
import { Section, Card, Button } from '../components/Components';
import { services } from '../data/mockData';
import { ChevronDown, ChevronUp, Code, Database, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-16">
      <Section className="bg-slate-50 dark:bg-dark-900/50 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive technical solutions powered by deep industry expertise in quantitative finance and distributed systems.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div key={service.id} className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 lg:col-span-3">
                <div className={`p-4 rounded-2xl inline-block mb-4 ${
                  idx === 0 ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                  idx === 1 ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                  'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                  {idx === 0 && <Code size={48} />}
                  {idx === 1 && <Database size={48} />}
                  {idx === 2 && <Globe size={48} />}
                </div>
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <Card className="p-8">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mt-1.5 mr-3 w-4 h-4 rounded-full border-2 border-brand-500 flex-shrink-0"></div>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                    <button 
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                    >
                      {expandedId === service.id ? 'Hide Technical Details' : 'View Technical Capabilities'}
                      {expandedId === service.id ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                    </button>
                    
                    {expandedId === service.id && (
                      <div className="mt-6 bg-slate-50 dark:bg-dark-950 p-6 rounded-lg animate-fade-in">
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-500">Tech Stack & Tools</h4>
                        <div className="flex flex-wrap gap-2">
                           {['Python', 'C++', 'React', 'Kubernetes', 'AWS', 'TensorFlow', 'PostgreSQL'].map(tech => (
                             <span key={tech} className="px-3 py-1 bg-white dark:bg-dark-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm font-mono text-slate-600 dark:text-slate-300">
                               {tech}
                             </span>
                           ))}
                        </div>
                        <p className="mt-4 text-sm text-slate-500">
                          We employ rigorous testing and CI/CD methodologies to ensure enterprise-grade reliability for all deliverables.
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to accelerate your roadmap?</h2>
        <Button size="lg" to="/contact" className="bg-white text-brand-900 hover:bg-slate-100">Start a Conversation</Button>
      </Section>
    </div>
  );
};

export default Services;