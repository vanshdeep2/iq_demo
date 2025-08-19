import React from 'react';
import { Filter } from 'lucide-react';
import InsightCard from '../components/InsightCard';
import ActionCard from '../components/ActionCard';

const Dashboard = () => {
  const insights = [
    {
      id: 1,
      title: 'Call Volume Increase',
      description: 'Call volume has increased by 15% compared to last week',
      trend: 'up',
      value: '+15%',
      category: 'Performance'
    },
    {
      id: 2,
      title: 'Customer Satisfaction',
      description: 'Average satisfaction score improved to 4.2/5',
      trend: 'up',
      value: '4.2/5',
      category: 'Quality'
    },
    {
      id: 3,
      title: 'Response Time',
      description: 'Average response time increased by 2 minutes',
      trend: 'down',
      value: '+2min',
      category: 'Performance'
    }
  ];

  const actions = [
    {
      id: 1,
      title: 'Review Call Scripts',
      description: 'Update call scripts based on recent feedback',
      priority: 'high',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Staff Training',
      description: 'Schedule training session for new procedures',
      priority: 'medium',
      status: 'in-progress'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome to Quantanite IQ Analytics</p>
        </div>
        <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Insights Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>

      {/* Actions Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {actions.map((action) => (
            <ActionCard key={action.id} action={action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
