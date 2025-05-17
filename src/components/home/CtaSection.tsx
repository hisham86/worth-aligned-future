
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to maximize your earning potential?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have transformed their careers with PayWorth.io.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Get Started For Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
