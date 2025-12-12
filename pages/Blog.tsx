import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Card, Badge } from '../components/Components';
import { blogPosts } from '../data/mockData';
import { Calendar, User, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-16">
      <Section className="pt-24 pb-12 bg-slate-50 dark:bg-dark-900/50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Phitopolis Insights</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thoughts on technology, finance, and culture.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <Badge>{post.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                    <span className="flex items-center mr-4"><User size={14} className="mr-1" /> {post.author}</span>
                    <span className="flex items-center mr-4"><Calendar size={14} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center ml-auto"><Clock size={14} className="mr-1" /> {post.readTime}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;