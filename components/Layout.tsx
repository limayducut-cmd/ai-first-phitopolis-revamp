import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './Components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode for "tech" feel
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-dark-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white" onClick={closeMenu}>
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-accent-500 font-mono text-lg font-bold">P</div>
          <span>Phitopolis</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
                isActive(link.path) ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-4"></div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button to="/careers" size="sm" variant="primary">
            Careers
          </Button>
          <Button to="/contact" size="sm" variant="outline" className="hidden lg:inline-flex">
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-4">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-950 px-4 py-4 space-y-4 animate-slide-up">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="block text-base font-medium text-slate-600 dark:text-slate-300 py-2"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-3">
             <Button to="/careers" className="w-full" onClick={closeMenu}>
              Careers
            </Button>
            <Button to="/contact" variant="outline" className="w-full" onClick={closeMenu}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800 py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
           <div className="flex items-center space-x-2 font-bold text-xl mb-4 text-slate-900 dark:text-white">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-accent-500 font-mono text-lg font-bold">P</div>
            <span>Phitopolis</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            Making tomorrow's technology available today. We bridge the gap between complex data and actionable insights.
          </p>
          <div className="flex space-x-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-400 hover:text-brand-600 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/about" className="hover:text-brand-600 transition-colors">About Us</Link></li>
            <li><Link to="/team" className="hover:text-brand-600 transition-colors">Leadership</Link></li>
            <li><Link to="/careers" className="hover:text-brand-600 transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/services" className="hover:text-brand-600 transition-colors">R&D</Link></li>
            <li><Link to="/services" className="hover:text-brand-600 transition-colors">Data Science</Link></li>
            <li><Link to="/services" className="hover:text-brand-600 transition-colors">Full-Stack Dev</Link></li>
            <li><Link to="/work" className="hover:text-brand-600 transition-colors">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li>123 Innovation Dr.</li>
            <li>Tech City, TC 90210</li>
            <li className="pt-2"><a href="mailto:hello@phitopolis.com" className="hover:text-brand-600">hello@phitopolis.com</a></li>
            <li><a href="tel:+15551234567" className="hover:text-brand-600">+1 (555) 123-4567</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500">
        <p>&copy; {new Date().getFullYear()} Phitopolis. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;