import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle } from 'lucide-react';

interface Threat {
  id: number;
  x: number;
  y: number;
  confidence: number;
  type: 'low' | 'medium' | 'high';
}

const ThreatVisualizer: React.FC = () => {
  const [threats, setThreats] = useState<Threat[]>([]);
  const [scanning, setScanning] = useState(true);
  
  useEffect(() => {
    // Simulate generating threats
    const generateThreats = () => {
      const newThreats: Threat[] = [];
      const numThreats = Math.floor(Math.random() * 5) + 3; // 3-8 threats
      
      for (let i = 0; i < numThreats; i++) {
        const threat: Threat = {
          id: i,
          x: Math.random() * 90 + 5, // 5-95%
          y: Math.random() * 90 + 5, // 5-95%
          confidence: Math.random() * 30 + 70, // 70-100%
          type: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low'
        };
        newThreats.push(threat);
      }
      
      setThreats(newThreats);
    };
    
    generateThreats();
    
    // Periodically regenerate threats
    const interval = setInterval(() => {
      generateThreats();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-96 rounded-lg border border-gray-700 overflow-hidden grid-pattern">
      {/* Radar scanner effect */}
      {scanning && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <motion.div 
            className="absolute left-0 top-0 w-1/2 h-full bg-accent-teal opacity-5"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              transformOrigin: 'right center',
              borderRadius: '100% 0 0 100%'
            }}
          />
        </div>
      )}
      
      {/* Base position */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Shield className="text-accent-teal" size={32} />
          <div className="absolute inset-0">
            <div className="radar-ping"></div>
          </div>
        </div>
      </div>
      
      {/* Threats */}
      {threats.map(threat => (
        <motion.div
          key={threat.id}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            left: `${threat.x}%`, 
            top: `${threat.y}%`,
          }}
        >
          <div className="relative">
            <AlertTriangle 
              className={
                threat.type === 'high' ? 'text-accent-red' : 
                threat.type === 'medium' ? 'text-accent-yellow' : 
                'text-accent-teal'
              } 
              size={24} 
            />
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span 
                className={`text-xs font-mono px-1.5 py-0.5 rounded-sm ${
                  threat.type === 'high' ? 'bg-accent-red bg-opacity-20 text-accent-red' : 
                  threat.type === 'medium' ? 'bg-accent-yellow bg-opacity-20 text-accent-yellow' : 
                  'bg-accent-teal bg-opacity-20 text-accent-teal'
                }`}
              >
                {threat.confidence.toFixed(1)}%
              </span>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Controls */}
      <div className="absolute bottom-4 right-4 space-y-2">
        <button 
          className="btn btn-outline text-sm px-3 py-1.5"
          onClick={() => setScanning(!scanning)}
        >
          {scanning ? 'Pause Scan' : 'Resume Scan'}
        </button>
      </div>
      
      {/* Legend */}
      <div className="absolute top-4 left-4 bg-navy-900 bg-opacity-80 p-2 rounded-md border border-gray-700">
        <div className="text-xs text-white font-medium mb-1">Threat Levels:</div>
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center">
            <AlertTriangle className="text-accent-red mr-1" size={12} />
            <span>High</span>
          </div>
          <div className="flex items-center">
            <AlertTriangle className="text-accent-yellow mr-1" size={12} />
            <span>Medium</span>
          </div>
          <div className="flex items-center">
            <AlertTriangle className="text-accent-teal mr-1" size={12} />
            <span>Low</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatVisualizer;