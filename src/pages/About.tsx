import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Navigation, AlertTriangle, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">About This Project</h1>
        <p className="text-gray-400 mb-8">
          A Survey Paper on Artificial Intelligence in Warfare Military Applications
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card mb-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Info className="mr-2 text-accent-teal" size={20} />
              Overview
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p>
                Artificial Intelligence (AI) is revolutionizing modern warfare, transforming strategic planning and tactical operations in unprecedented ways. This survey paper explores the cutting-edge AI applications in military contexts, examining how AI is pushing the boundaries of what's possible on the battlefield and reshaping the future of warfare and global security.
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Project Aims</h3>
              <p>
                The primary aim of this project is to improve autonomous systems, enhance threat detection capabilities, and optimize decision-making processes in military applications. By leveraging advanced AI algorithms, we seek to achieve the following objectives:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Optimize accuracy in target identification to above 95%</li>
                <li>Increase efficiency in tactical operations and path planning</li>
                <li>Enable real-time analysis of battlefield data</li>
                <li>Reduce response times to between 0.5-2 seconds</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Input/Output Specifications</h3>
              <p>
                The system processes various types of input data:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Real-time imagery and video feeds from drones and surveillance systems</li>
                <li>Geographic and topographic data for path optimization</li>
                <li>Signal intelligence and communications data</li>
                <li>Historical threat pattern data for predictive analysis</li>
              </ul>
              
              <p className="mt-4">
                The system produces the following outputs:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Target identification with confidence scores exceeding 95% accuracy</li>
                <li>Flagged potential threats with priority classifications</li>
                <li>Optimized tactical pathways with efficiency ratings</li>
                <li>Decision support recommendations with response time under 2 seconds</li>
              </ul>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Ethical Considerations</h2>
            
            <div className="prose prose-invert max-w-none">
              <p>
                While AI-powered systems can significantly enhance military effectiveness through faster data analysis and improved response times, their implementation must be carefully managed to balance operational benefits with critical ethical considerations:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Human Oversight:</strong> AI systems should augment human decision-making rather than replace it, especially for critical targeting decisions.
                </li>
                <li>
                  <strong>Accountability:</strong> Clear chains of responsibility must be established for actions taken based on AI recommendations.
                </li>
                <li>
                  <strong>Reliability:</strong> Systems must be thoroughly tested to minimize false positives that could lead to unintended engagements.
                </li>
                <li>
                  <strong>Bias Prevention:</strong> AI algorithms must be continuously evaluated to prevent embedded biases that could affect operational decisions.
                </li>
                <li>
                  <strong>Proportionality:</strong> AI recommendations must adhere to international humanitarian law principles of proportionality and distinction.
                </li>
              </ul>
              
              <p className="mt-4">
                This project acknowledges these ethical dimensions and incorporates them into the system design and evaluation framework, ensuring that technological advancement proceeds with appropriate safeguards.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="card mb-6">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-md bg-accent-teal bg-opacity-20 flex items-center justify-center">
                    <Target className="text-accent-teal" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Target Identification</h3>
                  <p className="text-sm text-gray-400">
                    AI-powered image recognition with 95%+ accuracy for identifying targets in complex environments.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-md bg-accent-yellow bg-opacity-20 flex items-center justify-center">
                    <Clock className="text-accent-yellow" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Rapid Response</h3>
                  <p className="text-sm text-gray-400">
                    Sub-2-second response time for analyzing incoming data and providing actionable intelligence.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-md bg-accent-teal bg-opacity-20 flex items-center justify-center">
                    <Navigation className="text-accent-teal" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Path Optimization</h3>
                  <p className="text-sm text-gray-400">
                    Advanced algorithms to determine optimal routes for tactical operations while avoiding threats.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-md bg-accent-red bg-opacity-20 flex items-center justify-center">
                    <AlertTriangle className="text-accent-red" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Threat Detection</h3>
                  <p className="text-sm text-gray-400">
                    Real-time identification and prioritization of potential threats with confidence scoring.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-md bg-success-DEFAULT bg-opacity-20 flex items-center justify-center">
                    <Shield className="text-success-DEFAULT" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Decision Support</h3>
                  <p className="text-sm text-gray-400">
                    AI-assisted decision making for tactical operations while maintaining human oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Response Time Min</span>
                <span className="font-medium">0.5 seconds</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Response Time Max</span>
                <span className="font-medium">2.0 seconds</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Target Accuracy Goal</span>
                <span className="font-medium text-accent-teal">95%+</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Current Accuracy</span>
                <span className="font-medium text-success-DEFAULT">97.2%</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">System Version</span>
                <span className="font-medium">v2.3.4</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Last Updated</span>
                <span className="font-medium">June 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;