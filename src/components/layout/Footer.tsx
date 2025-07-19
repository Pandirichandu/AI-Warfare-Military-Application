import React from 'react';
import { Shield, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="text-accent-teal mr-2" size={24} />
            <span className="text-lg font-bold text-white">AI Warfare</span>
          </div>
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              A Survey Paper on Artificial Intelligence in Warfare Military Applications
            </p>
            <p className="text-gray-500 text-xs mt-1">
              For educational and research purposes only. © {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-teal transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;