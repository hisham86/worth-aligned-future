
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <div className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-800">
            Ready to maximize your earning potential?
          </h2>
          <p className="text-slate-500 mb-8 text-base">
            Join thousands of professionals who have transformed their careers with PayWorth.io.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-base py-5 px-6 rounded-md">
              Get Started For Free
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 text-base py-5 px-6 rounded-md">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
