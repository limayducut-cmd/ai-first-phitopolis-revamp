import React from 'react';
import { Section, Card } from '../components/Components';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <Section className="bg-slate-50 dark:bg-dark-900/50 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            We bridge the gap between complex quantitative research and scalable technological solutions, enabling the next generation of financial innovation.
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 rounded-full text-xs font-bold mb-4">Our Story</div>
            <h2 className="text-3xl font-bold mb-6">From Quantbot to Phitopolis</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Founded in 2018, Phitopolis emerged from a strategic partnership with Quantbot Technologies, a global leader in quantitative trading. We recognized a need for specialized engineering talent that understood both high-performance computing and the nuances of financial markets.
              </p>
              <p>
                What started as a specialized R&D unit has grown into a full-service technology consultancy. We bring the rigor of hedge fund engineering to a broader range of challenges, from big data analytics to enterprise application development.
              </p>
              <p>
                Today, we operate globally with a diverse team of data scientists, engineers, and researchers, all united by a passion for solving hard problems.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/office/600/400" 
              alt="Phitopolis Office" 
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50 dark:bg-dark-900/50">
        <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Precision</h3>
            <p className="text-slate-600 dark:text-slate-400">
              In our line of work, accuracy is paramount. We build systems that perform flawlessly under pressure.
            </p>
          </Card>
          <Card className="p-8 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Great software is built by great teams. We foster an environment of open communication and shared ownership.
            </p>
          </Card>
          <Card className="p-8 text-center">
            <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We don't just follow trends; we set them. We constantly explore new technologies to stay ahead of the curve.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default About;