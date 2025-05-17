
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              PayWorth<span className="text-blue-600">.io</span>
            </h3>
            <p className="text-slate-600 mb-4">
              Smart career coaching tailored for your financial future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-slate-600 hover:text-blue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-600 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-600 hover:text-blue-600">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-600 hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-600 hover:text-blue-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 hover:text-blue-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-slate-600 hover:text-blue-600">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-500">
          <p>© {new Date().getFullYear()} PayWorth.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
