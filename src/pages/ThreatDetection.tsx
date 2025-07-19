import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, Clock, Shield } from 'lucide-react';
import ThreatVisualizer from '../components/threats/ThreatVisualizer';

interface ThreatAlert {
  id: number;
  level: 'critical' | 'high' | 'medium' | 'low';
  location: string;
  timestamp: string;
  message: string;
  isNew: boolean;
}

const ThreatDetection: React.FC = () => {
  const [threatAlerts, setThreatAlerts] = useState<ThreatAlert[]>([
    {
      id: 1,
      level: 'critical',
      location: 'Sector A-7',
      timestamp: '10:42 AM',
      message: 'Multiple hostile entities detected with high confidence',
      isNew: true,
    },
    {
      id: 2,
      level: 'high',
      location: 'Sector B-3',
      timestamp: '10:36 AM',
      message: 'Unauthorized vehicle movement detected',
      isNew: true,
    },
    {
      id: 3,
      level: 'medium',
      location: 'Sector D-9',
      timestamp: '10:28 AM',
      message: 'Communication signal anomaly detected',
      isNew: false,
    },
    {
      id: 4,
      level: 'low',
      location: 'Sector C-5',
      timestamp: '10:15 AM',
      message: 'Environmental disturbance detected, analyzing source',
      isNew: false,
    },
  ]);
  
  const markAsRead = (id: number) => {
    setThreatAlerts(threatAlerts.map(alert => 
      alert.id === id ? { ...alert, isNew: false } : alert
    ));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Threat Detection</h1>
        <p className="text-gray-400 mb-8">
          Real-time threat identification and analysis with AI-driven confidence scoring
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main visualization */}
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <AlertTriangle className="mr-2 text-accent-red" size={20} />
              Threat Visualization
            </h2>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-2">Status:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-DEFAULT bg-opacity-20 text-success-DEFAULT">
                  <span className="w-2 h-2 mr-1.5 bg-success-DEFAULT rounded-full animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <ThreatVisualizer />
          </div>
          
          <div className="bg-navy-700 rounded-md p-3 border border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">System Status</h3>
              <span className="text-sm text-gray-400">Updated: <Clock className="inline ml-1" size={14} /></span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-navy-800 p-3 rounded-md">
                <div className="text-sm text-gray-400 mb-1">Threats Detected</div>
                <div className="text-xl font-bold text-accent-red">8</div>
              </div>
              
              <div className="bg-navy-800 p-3 rounded-md">
                <div className="text-sm text-gray-400 mb-1">Processing Time</div>
                <div className="text-xl font-bold text-accent-teal">0.7s</div>
              </div>
              
              <div className="bg-navy-800 p-3 rounded-md">
                <div className="text-sm text-gray-400 mb-1">Confidence Avg.</div>
                <div className="text-xl font-bold text-accent-yellow">86.4%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alert panel */}
        <div className="lg:col-span-1 card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <Bell className="mr-2 text-accent-yellow" size={20} />
              Threat Alerts
            </h2>
            
            <div className="flex items-center">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-navy-700 text-gray-300">
                {threatAlerts.filter(a => a.isNew).length} new
              </span>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            {threatAlerts.map(alert => (
              <motion.div 
                key={alert.id}
                className={`relative rounded-lg border-l-4 p-4 ${
                  alert.level === 'critical' ? 'bg-error-DEFAULT bg-opacity-10 border-error-DEFAULT' :
                  alert.level === 'high' ? 'bg-error-light bg-opacity-10 border-error-light' :
                  alert.level === 'medium' ? 'bg-accent-yellow bg-opacity-10 border-accent-yellow' :
                  'bg-accent-teal bg-opacity-10 border-accent-teal'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {alert.isNew && (
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-accent-red animate-pulse" />
                )}
                
                <div className="flex justify-between items-start mb-2">
                  <div className={`text-sm font-semibold ${
                    alert.level === 'critical' || alert.level === 'high' ? 'text-error-DEFAULT' :
                    alert.level === 'medium' ? 'text-accent-yellow' : 'text-accent-teal'
                  }`}>
                    {alert.level.charAt(0).toUpperCase() + alert.level.slice(1)} Alert
                  </div>
                  <div className="text-xs text-gray-400">{alert.timestamp}</div>
                </div>
                
                <p className="text-sm mb-2">{alert.message}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">
                    <Shield className="inline mr-1" size={12} />
                    {alert.location}
                  </div>
                  
                  {alert.isNew && (
                    <button 
                      className="text-xs text-accent-teal hover:text-white transition-colors"
                      onClick={() => markAsRead(alert.id)}
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="rounded-lg bg-navy-700 p-4 mb-6 border border-gray-700">
            <h3 className="font-medium mb-2">Threat Level Distribution</h3>
            <div className="space-y-2">
              {[
                { level: 'Critical', count: 1, color: 'bg-error-DEFAULT' },
                { level: 'High', count: 1, color: 'bg-error-light' },
                { level: 'Medium', count: 1, color: 'bg-accent-yellow' },
                { level: 'Low', count: 1, color: 'bg-accent-teal' },
              ].map((item) => (
                <div key={item.level} className="flex items-center">
                  <div className="text-sm w-16">{item.level}</div>
                  <div className="flex-grow mx-2 bg-navy-800 rounded-full h-2">
                    <div 
                      className={`${item.color} rounded-full h-2`}
                      style={{ width: `${item.count * 25}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="btn btn-primary w-full flex items-center justify-center">
            <Bell size={18} className="mr-2" />
            View All Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetection;