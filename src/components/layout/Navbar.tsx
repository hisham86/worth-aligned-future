
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-2xl text-blue-600">
              PayWorth<span className="text-slate-800">.io</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:block">
              Log in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
