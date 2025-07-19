import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Navigation, AlertTriangle } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import AccuracyChart from '../components/dashboard/AccuracyChart';
import ResponseTimeChart from '../components/dashboard/ResponseTimeChart';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">AI Warfare Dashboard</h1>
        <p className="text-gray-400 mb-8">
          Real-time analytics and performance metrics for AI-powered military applications
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Target Identification" 
          value="97.2%" 
          description="Current accuracy rate (2% above target)" 
          icon={Target}
          color="text-accent-teal"
        />
        <StatCard 
          title="Response Time" 
          value="0.8s" 
          description="Average processing time" 
          icon={Clock}
          color="text-accent-yellow"
        />
        <StatCard 
          title="Path Optimization" 
          value="92.3%" 
          description="Efficiency rating" 
          icon={Navigation}
          color="text-accent-teal"
        />
        <StatCard 
          title="Threat Detection" 
          value="46" 
          description="Threats identified today" 
          icon={AlertTriangle}
          color="text-accent-red"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AccuracyChart />
        <ResponseTimeChart />
      </div>

      {/* System Status */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">System Status</h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-navy-700 rounded-md">
            <div>
              <h3 className="font-medium">Image Processing Pipeline</h3>
              <p className="text-sm text-gray-400">Processing drone imagery</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-success-DEFAULT bg-opacity-20 text-success-DEFAULT">
                Operational
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-navy-700 rounded-md">
            <div>
              <h3 className="font-medium">Threat Analysis Engine</h3>
              <p className="text-sm text-gray-400">Pattern recognition active</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-success-DEFAULT bg-opacity-20 text-success-DEFAULT">
                Operational
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-navy-700 rounded-md">
            <div>
              <h3 className="font-medium">Tactical Decision Matrix</h3>
              <p className="text-sm text-gray-400">Calculating optimal responses</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent-yellow bg-opacity-20 text-accent-yellow">
                Optimizing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            { time: '10:42 AM', message: 'High-value target identified with 96.8% confidence' },
            { time: '10:36 AM', message: 'Path optimization completed for reconnaissance mission' },
            { time: '10:29 AM', message: 'Threat assessment: 3 medium risk factors detected' },
            { time: '10:15 AM', message: 'Image processing pipeline upgraded to v2.3.4' },
            { time: '09:58 AM', message: 'System diagnostics completed: All systems nominal' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start border-b border-gray-700 pb-3">
              <div className="text-sm text-gray-400 w-20 shrink-0">{activity.time}</div>
              <div className="text-sm">{activity.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;