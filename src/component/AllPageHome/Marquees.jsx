"use client";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";

const Marquees = () => {
    const marqueeItems = [
        { id: 1, title: "The Quantum Labyrinth", category: "Science" },
        { id: 2, title: "Shadows of the Forgotten", category: "Story" },
        { id: 3, title: "Mastering Rust", category: "Tech" },
        { id: 4, title: "The Gene Architect", category: "Science" },
        { id: 5, title: "Whispers in the Wind", category: "Story" },
        { id: 6, title: "Neural Network Fundamentals", category: "Tech" },
        { id: 7, title: "Beyond the Event Horizon", category: "Science" },
        { id: 8, title: "Cybersecurity Frontiers", category: "Tech" },
        { id: 9, title: "The Midnight Library", category: "Story" },
        { id: 10, title: "Clean Architecture", category: "Tech" },
        { id: 11, title: "Evolution's Edge", category: "Science" },
        { id: 12, title: "The Last Kingdom", category: "Story" }
    ];

    return (
        <div className="py-10 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
            {/* Heading for Marquee */}
            <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
                <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
                    New Arrivals & Trending Books
                </h2>
                <Sparkles className="w-5 h-5 text-indigo-500 animate-pulse" />
            </div>

            <Marquee 
                speed={110} 
                gradient={true} 
                gradientColor="white" 
                gradientWidth={100}
                pauseOnHover={true}
                className="overflow-hidden"
            >
                {marqueeItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="group relative mx-4 cursor-pointer"
                    >
                        {/* Background Decoration */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                        
                        {/* Main Card Content */}
                        <div className="relative flex flex-col gap-1 px-6 py-4 bg-white border border-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-indigo-100 transition-all duration-300">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit ${
                                item.category === 'Tech' ? 'bg-blue-50 text-blue-600' :
                                item.category === 'Science' ? 'bg-emerald-50 text-emerald-600' :
                                'bg-purple-50 text-purple-600'
                            }`}>
                                {item.category}
                            </span>
                            <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Marquees;