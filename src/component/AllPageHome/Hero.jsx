import React from 'react';
import Link from 'next/link';
import { BookOpen, Search, ArrowRight, Sparkles } from 'lucide-react';
import SwepSliide from '../sheard/SwepSliide';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-[85vh] flex items-center bg-[#fcfcfd] overflow-hidden py-16 lg:py-20">
      
      
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform opacity-10 pointer-events-none">
        <div className="w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full blur-[100px] lg:blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
         
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full text-xs lg:text-sm font-bold tracking-wider uppercase border border-blue-100 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 fill-blue-600" />
              Digital Library Experience
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-[900] text-slate-900 leading-[1.1] tracking-tighter">
                Read More. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Spend Less.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Access thousands of premium books instantly. No late fees, no physical 
                waiting. Your digital gateway to knowledge.
              </p>
            </div>

           
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                href="/allbooks" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
              >
                Start Reading
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="/signup" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
              >
                View Plans
              </Link>
            </div>

            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">25k+</p>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest font-mono">E-Books</p>
              </div>
              <div className="border-x border-slate-100 px-4">
                <p className="text-xl sm:text-2xl font-black text-slate-900">10k+</p>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest font-mono">Readers</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900">100%</p>
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest font-mono">Free Trial</p>
              </div>
            </div>
          </div>

         
          <div className="w-full lg:w-[45%] relative order-1 lg:order-2">
       
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-[3rem]"></div>
            
            <div className="relative z-20 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-[4px] lg:border-[8px] border-white ring-1 ring-slate-100 aspect-[4/5] sm:aspect-video lg:aspect-auto">
              <SwepSliide />
            </div>
            
           
            <div className="absolute -top-4 -right-4 z-30 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 hidden md:flex items-center gap-3">
               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold italic text-sm">!</div>
               <p className="text-[10px] font-black text-slate-700 uppercase tracking-tight">New: The Power of Habit</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;