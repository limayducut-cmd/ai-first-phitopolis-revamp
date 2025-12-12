import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, Button, Badge } from '../components/Components';
import { blogPosts } from '../data/mockData';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Section className="pt-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button to="/blog">Back to Blog</Button>
      </Section>
    );
  }

  return (
    <div className="pt-16">
      <div className="relative h-[400px] w-full">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <Badge className="mb-4 bg-brand-600 text-white border-none">{post.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-200">
               <span className="flex items-center"><User size={16} className="mr-2" /> {post.author}</span>
               <span className="flex items-center"><Calendar size={16} className="mr-2" /> {post.date}</span>
               <span className="flex items-center"><Clock size={16} className="mr-2" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <Section className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Link>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
            {post.excerpt}
          </p>
          <div className="text-slate-700 dark:text-slate-300 space-y-6">
            <p>{post.content}</p>
            <p>
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <h3>Looking Ahead</h3>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <div className="font-bold">Share this article:</div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline"><Share2 size={16} className="mr-2" /> Twitter</Button>
            <Button size="sm" variant="outline"><Share2 size={16} className="mr-2" /> LinkedIn</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPost;