import React from 'react';
import { Section, Card, Button } from '../components/Components';
import { team } from '../data/mockData';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="pt-16">
      <Section className="pt-24 pb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Meet the Leadership</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our team combines decades of experience in quantitative finance, distributed systems, and product engineering.
        </p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-brand-600 dark:text-brand-400 font-medium text-sm">{member.role}</p>
                  </div>
                  <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center py-20 bg-slate-50 dark:bg-dark-900/50">
        <h2 className="text-3xl font-bold mb-6">Join our growing team</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          We are always looking for talented individuals who are passionate about technology and finance.
        </p>
        <Button to="/careers" size="lg">View Open Roles</Button>
      </Section>
    </div>
  );
};

export default Team;