
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
      className={`rounded-xl p-8 ${featured ? 'border-2 border-blue-600 shadow-lg' : 'border border-slate-200'} 
      ${featured ? 'bg-white' : 'bg-slate-50/50'} h-full flex flex-col`}
    >
      {featured && (
        <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium w-fit mx-auto -mt-12 mb-4">
          Most Popular
        </div>
      )}
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-slate-600 ml-1">/month</span>}
      </div>
      <p className="text-slate-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={featured ? "default" : "outline"} 
        className={`w-full ${featured ? "" : "hover:bg-blue-600 hover:text-white"}`}
      >
        {cta}
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate-600">
            Choose the plan that's right for where you are in your career journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
          
          <PricingOption 
            title="Enterprise"
            price="Custom"
            description="For organizations supporting multiple team members."
            features={[
              "Everything in Pro",
              "Team Coaching Sessions",
              "Custom Negotiation Workshops",
              "Dedicated Account Manager",
              "Bulk Discounts",
              "Advanced Analytics"
            ]}
            cta="Contact Sales"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
