import React from 'react';
import { Section, Card, Input, TextArea, Button } from '../components/Components';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      <Section className="pt-24 pb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <Card className="p-6 flex items-start space-x-4">
                <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Headquarters</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    123 Innovation Dr.<br/>
                    Tech City, TC 90210<br/>
                    United States
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                    General: hello@phitopolis.com
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Careers: careers@phitopolis.com
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                 <div className="bg-brand-100 dark:bg-brand-900/30 p-3 rounded-lg text-brand-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Mon-Fri from 9am to 6pm EST
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">
                    +1 (555) 123-4567
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Interest</label>
                  <select className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-dark-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option>Services Inquiry</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <TextArea rows={4} placeholder="How can we help you?" />
                </div>

                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;