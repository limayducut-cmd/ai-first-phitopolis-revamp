import React from 'react';
import { Section, Card, Badge, Button } from '../components/Components';
import { projects } from '../data/mockData';
import { ArrowRight, Check } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <div className="pt-16">
      <Section className="pt-24 pb-12 text-center bg-slate-50 dark:bg-dark-900/50">
        <h1 className="text-4xl font-bold mb-6">Our Work</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Solving mission-critical problems for global financial institutions.
        </p>
      </Section>

      <Section>
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                 <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                 </div>
              </div>
              <div className={idx % 2 === 1 ? 'md:col-start-1' : ''}>
                <Badge variant="outline">{project.category}</Badge>
                <h2 className="text-3xl font-bold mt-4 mb-4">{project.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-500">Key Results</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-green-500 mr-2 h-5 w-5 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-200">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                   <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-500">Technologies</h4>
                   <div className="flex flex-wrap gap-2">
                     {project.techStack.map(tech => (
                       <span key={tech} className="text-sm px-2 py-1 bg-slate-100 dark:bg-dark-800 rounded text-slate-600 dark:text-slate-300">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                <Button variant="outline">Case Study Details <ArrowRight className="ml-2 h-4 w-4"/></Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Work;