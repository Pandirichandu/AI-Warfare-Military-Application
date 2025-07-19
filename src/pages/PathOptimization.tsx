import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Clock, ArrowRight, MapPin, RefreshCw as Refresh } from 'lucide-react';
import PathMap from '../components/pathfinding/PathMap';

const PathOptimization: React.FC = () => {
  const [mapSize, setMapSize] = useState<number>(12);
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
  const [optimizationStats, setOptimizationStats] = useState({
    time: 1.2,
    pathLength: 18,
    efficiency: 92.3,
  });
  
  const handleOptimize = () => {
    setIsOptimizing(true);
    
    // Simulate optimization
    setTimeout(() => {
      setIsOptimizing(false);
      setOptimizationStats({
        time: Math.random() * 0.7 + 0.8, // 0.8-1.5s
        pathLength: Math.floor(Math.random() * 6) + 15, // 15-20
        efficiency: Math.random() * 5 + 90, // 90-95%
      });
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Path Optimization</h1>
        <p className="text-gray-400 mb-8">
          AI-powered route planning to reach targets efficiently while avoiding obstacles
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main visualization */}
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <Navigation className="mr-2 text-accent-teal" size={20} />
              Tactical Map
            </h2>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-2">Grid Size:</span>
                <select 
                  className="bg-navy-700 border border-gray-600 rounded-md p-1 text-sm"
                  value={mapSize}
                  onChange={(e) => setMapSize(parseInt(e.target.value))}
                >
                  <option value={8}>8x8</option>
                  <option value={10}>10x10</option>
                  <option value={12}>12x12</option>
                  <option value={15}>15x15</option>
                </select>
              </div>
              
              <button 
                className="btn btn-outline text-sm py-1.5 flex items-center"
                onClick={() => setMapSize(mapSize)}
              >
                <Refresh size={16} className="mr-1" />
                Reset
              </button>
            </div>
          </div>
          
          <div className="aspect-square w-full max-w-2xl mx-auto">
            <PathMap gridSize={mapSize} pathFound={true} />
          </div>
        </div>
        
        {/* Control panel */}
        <div className="lg:col-span-1">
          <div className="card mb-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Clock className="mr-2 text-accent-teal" size={20} />
              Optimization Results
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Calculation Time</span>
                <span className="font-medium">{optimizationStats.time.toFixed(1)}s</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Path Length</span>
                <span className="font-medium">{optimizationStats.pathLength} units</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-400">Efficiency Rating</span>
                <span className="font-medium text-accent-teal">
                  {optimizationStats.efficiency.toFixed(1)}%
                </span>
              </div>
            </div>
            
            <button 
              className="btn btn-primary w-full flex items-center justify-center"
              onClick={handleOptimize}
              disabled={isOptimizing}
            >
              {isOptimizing ? (
                <>
                  <div className="animate-spin mr-2 w-4 h-4 border-2 border-t-transparent border-white rounded-full"></div>
                  Optimizing...
                </>
              ) : (
                <>
                  <Navigation size={18} className="mr-2" />
                  Calculate Optimal Path
                </>
              )}
            </button>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Path Parameters</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Terrain Type
                </label>
                <select className="w-full bg-navy-700 border border-gray-600 rounded-md p-2">
                  <option value="urban">Urban</option>
                  <option value="forest">Forest</option>
                  <option value="desert">Desert</option>
                  <option value="mountain">Mountain</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Optimization Priority
                </label>
                <select className="w-full bg-navy-700 border border-gray-600 rounded-md p-2">
                  <option value="speed">Speed</option>
                  <option value="stealth">Stealth</option>
                  <option value="safety">Safety</option>
                  <option value="balanced">Balanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Obstacle Density
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="40" 
                  defaultValue="20"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-navy-700 p-3 border border-gray-600">
              <h3 className="font-medium text-sm mb-2">Recently Calculated Paths</h3>
              
              {['Urban Area Alpha', 'Mountain Pass Beta', 'Desert Region Gamma'].map((path, index) => (
                <div key={index} className="flex items-center justify-between py-1.5 border-b border-gray-700 last:border-0">
                  <div className="flex items-center">
                    <MapPin size={14} className="text-accent-teal mr-1.5" />
                    <span className="text-sm">{path}</span>
                  </div>
                  <button className="text-accent-teal hover:text-white transition-colors">
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathOptimization;