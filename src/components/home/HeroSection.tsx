
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Know Your <span className="gradient-text">True Worth</span> in the Job Market
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
            Get personalized coaching to ace your interviews and negotiate the salary you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg py-6 px-8">
              Start For Free
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8">
              See How It Works
            </Button>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Dashboard preview" 
              className="w-full h-auto" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-600 floating-element hidden md:block"></div>
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-200 floating-element hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
