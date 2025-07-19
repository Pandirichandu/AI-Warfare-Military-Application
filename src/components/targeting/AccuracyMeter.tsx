import React from 'react';
import { motion } from 'framer-motion';

interface AccuracyMeterProps {
  accuracy: number;
  size?: number;
}

const AccuracyMeter: React.FC<AccuracyMeterProps> = ({ accuracy, size = 200 }) => {
  const circumference = size * Math.PI;
  const strokeDashoffset = circumference - (accuracy / 100) * circumference;
  
  const getAccuracyColor = (value: number) => {
    if (value >= 95) return 'text-success-DEFAULT';
    if (value >= 85) return 'text-accent-yellow';
    return 'text-accent-red';
  };
  
  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="8"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          fill="none"
          stroke={accuracy >= 95 ? '#00C853' : accuracy >= 85 ? '#FFD600' : '#FF3D00'}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
        />
        
        {/* Center text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={`${getAccuracyColor(accuracy)} font-bold text-3xl`}
        >
          {accuracy}%
        </text>
        
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-gray-400 text-sm"
        >
          Accuracy
        </text>
      </svg>
      
      {/* Radar effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 rounded-full radar-ping"></div>
      </div>
    </div>
  );
};

export default AccuracyMeter;