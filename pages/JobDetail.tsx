import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import { Section, Card, Button, Input, TextArea } from '../components/Components';
import { jobs } from '../data/mockData';

const JobDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = jobs.find(j => j.slug === slug);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (!job) {
    return (
      <Section className="pt-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
        <Button to="/careers">Back to Careers</Button>
      </Section>
    );
  }

  if (submitted) {
    return (
      <Section className="pt-32 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Application Received!</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Thanks for applying to be our next {job.title}. We'll be in touch shortly.
        </p>
        <Button to="/careers" variant="outline">Browse More Roles</Button>
      </Section>
    );
  }

  return (
    <div className="pt-16">
      <Section className="bg-slate-50 dark:bg-dark-900/50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/careers" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Careers
          </Link>
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400">
                <span className="flex items-center"><Briefcase size={18} className="mr-2" /> {job.department}</span>
                <span className="flex items-center"><MapPin size={18} className="mr-2" /> {job.location}</span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-semibold">{job.type}</span>
              </div>
            </div>
            <Button size="lg" className="mt-6 md:mt-0" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply Now
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-4">About the Role</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {job.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Requirements</h3>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                    <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {job.niceToHave && (
              <div>
                <h3 className="text-xl font-bold mb-4">Nice to Have</h3>
                <ul className="space-y-3">
                  {job.niceToHave.map((req, i) => (
                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                      <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div id="apply-form" className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold mb-6">Apply for this position</h3>
              <Card className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input required placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input required placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input required type="email" placeholder="jane@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Resume / CV</label>
                    <Input type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Why do you want to join Phitopolis?</label>
                    <TextArea rows={4} placeholder="Tell us about yourself..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full">Submit Application</Button>
                </form>
              </Card>
            </div>
          </div>

          <div className="md:col-span-1">
             <Card className="p-6 sticky top-24">
               <h4 className="font-bold mb-4">Share this role</h4>
               <div className="flex gap-2 mb-8">
                 <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                 <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
               </div>
               
               <h4 className="font-bold mb-4">Hiring Process</h4>
               <ol className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-6">
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-100 rounded-full -left-3 ring-4 ring-white dark:ring-dark-800 dark:bg-brand-900">
                      <span className="text-xs font-bold text-brand-600">1</span>
                    </span>
                    <h5 className="font-semibold text-sm">Application Review</h5>
                    <p className="text-xs text-slate-500 mt-1">We'll review your CV and portfolio.</p>
                  </li>
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full -left-3 ring-4 ring-white dark:ring-dark-800 dark:bg-slate-800">
                       <span className="text-xs font-bold text-slate-600">2</span>
                    </span>
                    <h5 className="font-semibold text-sm">Technical Screen</h5>
                    <p className="text-xs text-slate-500 mt-1">A brief chat with an engineer.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-100 rounded-full -left-3 ring-4 ring-white dark:ring-dark-800 dark:bg-slate-800">
                       <span className="text-xs font-bold text-slate-600">3</span>
                    </span>
                    <h5 className="font-semibold text-sm">On-site / Final</h5>
                    <p className="text-xs text-slate-500 mt-1">Deep dive into skills & culture.</p>
                  </li>
               </ol>
             </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default JobDetail;