import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Coffee, Heart, Smile } from 'lucide-react';
import { Section, Card, Button, Input, Badge } from '../components/Components';
import { jobs } from '../data/mockData';

const CultureFeature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
    <div className="p-3 bg-brand-100 dark:bg-brand-900/30 text-brand-600 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
  </div>
);

const Careers: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(filter.toLowerCase()) || 
    job.department.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="pt-16">
      {/* Hero */}
      <Section className="bg-slate-50 dark:bg-dark-900/50 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Build the Future of Finance</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Join a world-class team solving complex engineering challenges in a culture that values growth, well-being, and fun.
          </p>
          <div className="max-w-md mx-auto relative">
             <Input 
              type="text" 
              placeholder="Search roles (e.g. Engineer, Data)..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-12 py-3"
            />
            <Briefcase className="absolute left-4 top-3.5 text-slate-400" size={18} />
          </div>
        </div>
      </Section>

      {/* Open Roles */}
      <Section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Open Positions</h2>
          <span className="text-slate-500 text-sm">{filteredJobs.length} roles available</span>
        </div>

        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <Card key={job.id} className="p-6 transition-all hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                        <Link to={`/careers/${job.slug}`}>{job.title}</Link>
                      </h3>
                      <Badge>{job.type}</Badge>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center"><Briefcase size={16} className="mr-1.5" /> {job.department}</span>
                      <span className="flex items-center"><MapPin size={16} className="mr-1.5" /> {job.location}</span>
                    </div>
                  </div>
                  <Button to={`/careers/${job.slug}`} variant="secondary">View Role</Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="text-lg font-medium text-slate-500">No roles found matching "{filter}"</h3>
              <Button variant="ghost" className="mt-4" onClick={() => setFilter('')}>Clear Search</Button>
            </div>
          )}
        </div>
      </Section>

      {/* Culture Section */}
      <Section className="bg-slate-50 dark:bg-dark-900/50">
        <h2 className="text-3xl font-bold text-center mb-12">Life at Phitopolis</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CultureFeature 
            icon={<Coffee size={24} />} 
            title="Milktea Mondays" 
            desc="Start the week right with premium bubble tea for the whole office. A tradition we take seriously." 
          />
          <CultureFeature 
            icon={<Heart size={24} />} 
            title="Wellness Week" 
            desc="Annual week dedicated to mental and physical health with yoga, meditation, and workshops." 
          />
          <CultureFeature 
            icon={<Smile size={24} />} 
            title="Funtopolis Events" 
            desc="Regular team outings, hackathons, and social events. We work hard and play hard." 
          />
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="aspect-square rounded-xl overflow-hidden">
               <img src={`https://picsum.photos/seed/culture${i}/400/400`} alt="Culture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
             </div>
           ))}
        </div>
      </Section>
    </div>
  );
};

export default Careers;