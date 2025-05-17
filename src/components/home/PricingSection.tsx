
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingOption: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}> = ({ title, price, description, features, cta, featured = false }) => {
  return (
    <div 
      className={`rounded-lg p-8 ${featured ? 'border-2 border-blue-500' : 'border border-slate-200'} 
      bg-white h-full flex flex-col`}
    >
      {featured && (
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium w-fit mb-4">
          Recommended
        </div>
      )}
      <h3 className="font-semibold text-xl mb-2 text-slate-800">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-500 ml-1">/month</span>
      </div>
      <p className="text-slate-500 mb-6 text-sm">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-4 w-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-slate-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={featured ? "default" : "outline"} 
        className={`w-full rounded-md ${featured ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-blue-50 border-blue-500 text-blue-500"}`}
      >
        {cta}
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-slate-800">
            Transparent, straightforward pricing
          </h2>
          <p className="text-slate-500 text-base">
            No hidden fees. Choose the plan that works best for your career goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PricingOption 
            title="Basic"
            price="$49"
            description="Perfect for job seekers looking for essential support."
            features={[
              "AI Interview Question Generator",
              "Salary Benchmarking Tool",
              "Basic Negotiation Scripts",
              "Resume Review",
              "Email Support"
            ]}
            cta="Get Started"
          />
          
          <PricingOption 
            title="Pro"
            price="$99"
            description="For professionals seeking comprehensive career advancement."
            features={[
              "Everything in Basic",
              "1:1 Mock Interviews (2/month)",
              "Personalized Negotiation Strategy",
              "Industry-Specific Coaching",
              "Priority Support",
              "LinkedIn Profile Optimization"
            ]}
            cta="Start Free Trial"
            featured
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
