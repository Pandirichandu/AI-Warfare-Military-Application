import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon: Icon, color }) => {
  return (
    <motion.div 
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-400 font-medium text-sm mb-1">{title}</h3>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </div>
        <div className={`p-3 rounded-md ${color.includes('accent-red') ? 'bg-accent-red bg-opacity-10' : color.includes('accent-teal') ? 'bg-accent-teal bg-opacity-10' : 'bg-accent-yellow bg-opacity-10'}`}>
          <Icon className={color} size={24} />
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;