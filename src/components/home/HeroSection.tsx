
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mb-4 leading-tight">
            Know your true worth in the job market
          </h1>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
            Get personalized coaching to ace your interviews and negotiate the salary you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-blue-500 hover:bg-blue-600 text-base py-5 px-6 rounded-md">
              Get Started
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-base py-5 px-6 rounded-md">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Dashboard preview" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
