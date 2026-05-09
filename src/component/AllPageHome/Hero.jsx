import React from 'react';
import Link from 'next/link';
import { BookOpen, Search, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 pb-16">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform opacity-5 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase border border-blue-100">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Gen Reading Platform
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold text-slate-900 tracking-tight">
              Borrow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Books</span> <br /> 
              Instantly.
            </h1>
            
            <p className="text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore thousands of titles from our digital catalog. Borrow, read, and 
              return books with just a click. Your next adventure starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <Link 
                href="/all-books" 
                className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-xl"
              >
                Browse Catalog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="relative w-full sm:w-auto">
                <input 
                  type="text" 
                  placeholder="Search by title or author..." 
                  className="w-full sm:w-80 px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 pl-12 transition-all shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Social Proof / Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-10 pt-10 border-t border-slate-100">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900">15k+</h3>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Titles</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900">8k+</h3>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Readers</p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900">24/7</h3>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Access</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image/Visual */}
          <div className="flex-1 relative w-full">
            <div className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Library" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card UI */}
            <div className="absolute -bottom-6 -left-10 z-30 bg-white p-6 rounded-2xl shadow-2xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Recently Borrowed</p>
                  <p className="text-sm font-bold text-slate-800 italic">{"The Alchemist"}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;