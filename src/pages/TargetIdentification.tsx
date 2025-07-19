import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Target, AlertCircle, Check, X } from 'lucide-react';
import AccuracyMeter from '../components/targeting/AccuracyMeter';

interface TargetResult {
  id: number;
  image: string;
  accuracy: number;
  type: string;
  status: 'confirmed' | 'unconfirmed' | 'rejected';
  timestamp: string;
}

const TargetIdentification: React.FC = () => {
  const [targets, setTargets] = useState<TargetResult[]>([
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=600',
      accuracy: 98.2,
      type: 'Vehicle',
      status: 'confirmed',
      timestamp: '10:42:15 AM'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/7487497/pexels-photo-7487497.jpeg?auto=compress&cs=tinysrgb&w=600',
      accuracy: 96.5,
      type: 'Infrastructure',
      status: 'unconfirmed',
      timestamp: '10:40:23 AM'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/7487498/pexels-photo-7487498.jpeg?auto=compress&cs=tinysrgb&w=600',
      accuracy: 93.7,
      type: 'Personnel',
      status: 'unconfirmed',
      timestamp: '10:36:09 AM'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/11507626/pexels-photo-11507626.jpeg?auto=compress&cs=tinysrgb&w=600',
      accuracy: 86.4,
      type: 'Unknown',
      status: 'rejected',
      timestamp: '10:32:51 AM'
    },
  ]);
  
  const [selectedTarget, setSelectedTarget] = useState<TargetResult | null>(null);
  
  const handleStatusChange = (id: number, status: 'confirmed' | 'unconfirmed' | 'rejected') => {
    setTargets(targets.map(target => 
      target.id === id ? { ...target, status } : target
    ));
    
    if (selectedTarget?.id === id) {
      setSelectedTarget({ ...selectedTarget, status });
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Target Identification</h1>
        <p className="text-gray-400 mb-8">
          AI-powered target recognition with precision accuracy above 95%
        </p>
      </motion.div>
      
      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search targets..."
            className="w-full bg-navy-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-accent-teal text-white"
          />
        </div>
        
        <div className="flex space-x-2">
          <select className="bg-navy-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent-teal text-white">
            <option value="">All Types</option>
            <option value="vehicle">Vehicle</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="personnel">Personnel</option>
            <option value="unknown">Unknown</option>
          </select>
          
          <select className="bg-navy-800 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent-teal text-white">
            <option value="">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="unconfirmed">Unconfirmed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Target list */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {targets.map(target => (
              <motion.div 
                key={target.id}
                className={`card cursor-pointer border-2 transition-colors ${
                  selectedTarget?.id === target.id 
                    ? 'border-accent-teal' 
                    : 'border-transparent hover:border-gray-700'
                }`}
                onClick={() => setSelectedTarget(target)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img 
                    src={target.image} 
                    alt={`Target ${target.id}`}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <div className="absolute top-2 right-2">
                    <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                      target.status === 'confirmed' ? 'bg-success-DEFAULT bg-opacity-90 text-white' :
                      target.status === 'rejected' ? 'bg-error-DEFAULT bg-opacity-90 text-white' :
                      'bg-accent-yellow bg-opacity-90 text-white'
                    }`}>
                      {target.status.charAt(0).toUpperCase() + target.status.slice(1)}
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <div className="px-2 py-1 rounded-md text-xs font-medium bg-navy-900 bg-opacity-90 text-white">
                      {target.type}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Target #{target.id}</h3>
                    <p className="text-sm text-gray-400">{target.timestamp}</p>
                  </div>
                  <div className={`
                    px-2 py-1 rounded-full text-sm font-medium 
                    ${target.accuracy >= 95 ? 'bg-success-DEFAULT bg-opacity-20 text-success-DEFAULT' : 
                      target.accuracy >= 85 ? 'bg-accent-yellow bg-opacity-20 text-accent-yellow' : 
                      'bg-error-DEFAULT bg-opacity-20 text-error-DEFAULT'}
                  `}>
                    {target.accuracy}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Detail panel */}
        <div className="lg:col-span-1">
          {selectedTarget ? (
            <motion.div 
              className="card h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Target className="mr-2 text-accent-teal" size={20} />
                Target #{selectedTarget.id}
              </h2>
              
              <img 
                src={selectedTarget.image} 
                alt={`Target ${selectedTarget.id}`}
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              
              <div className="flex justify-center mb-6">
                <AccuracyMeter accuracy={selectedTarget.accuracy} />
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400">Type</span>
                  <span className="font-medium">{selectedTarget.type}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400">Detected At</span>
                  <span className="font-medium">{selectedTarget.timestamp}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400">Status</span>
                  <span className={`font-medium ${
                    selectedTarget.status === 'confirmed' ? 'text-success-DEFAULT' :
                    selectedTarget.status === 'rejected' ? 'text-error-DEFAULT' :
                    'text-accent-yellow'
                  }`}>
                    {selectedTarget.status.charAt(0).toUpperCase() + selectedTarget.status.slice(1)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400">Confidence</span>
                  <span className={`font-medium ${
                    selectedTarget.accuracy >= 95 ? 'text-success-DEFAULT' : 
                    selectedTarget.accuracy >= 85 ? 'text-accent-yellow' : 
                    'text-error-DEFAULT'
                  }`}>
                    {selectedTarget.accuracy}%
                  </span>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex space-x-2">
                <button 
                  className="flex-1 btn bg-success-DEFAULT text-white hover:bg-opacity-90 flex items-center justify-center"
                  onClick={() => handleStatusChange(selectedTarget.id, 'confirmed')}
                >
                  <Check size={18} className="mr-1" />
                  Confirm
                </button>
                
                <button 
                  className="flex-1 btn bg-error-DEFAULT text-white hover:bg-opacity-90 flex items-center justify-center"
                  onClick={() => handleStatusChange(selectedTarget.id, 'rejected')}
                >
                  <X size={18} className="mr-1" />
                  Reject
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="card h-full flex flex-col items-center justify-center text-center p-8">
              <AlertCircle className="text-gray-500 mb-4" size={48} />
              <h3 className="text-xl font-medium mb-2">No Target Selected</h3>
              <p className="text-gray-400">
                Select a target from the list to view detailed information and take action.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TargetIdentification;