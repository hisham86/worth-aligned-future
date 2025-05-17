
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-white z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="font-medium text-xl text-slate-800">
              PayWorth<span className="text-blue-500">.io</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/features" 
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              About
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 text-sm rounded-md hidden sm:block">
              Log in
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-sm rounded-md">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
