
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4 text-slate-800">
              PayWorth<span className="text-blue-500">.io</span>
            </h3>
            <p className="text-slate-500 mb-4 text-sm">
              Smart career coaching tailored for your financial future.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-slate-800">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-slate-500 hover:text-slate-800 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-500 hover:text-slate-800 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-500 hover:text-slate-800 text-sm">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-slate-800">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-500 hover:text-slate-800 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-500 hover:text-slate-800 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 hover:text-slate-800 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 text-slate-800">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-500 hover:text-slate-800 text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-500 hover:text-slate-800 text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-slate-500 hover:text-slate-800 text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} PayWorth.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
