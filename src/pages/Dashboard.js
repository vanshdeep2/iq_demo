import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import InsightCard from '../components/InsightCard';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    confidence: 'all',
    impact: 'all'
  });

  // Removed summary cards for cleaner design

  const insights = [
    {
      id: 1,
      title: 'Average call handling time increased by 23% this month',
      category: 'Operational',
      confidence: 'High',
      impact: 'High',
      summary: 'Call handling time rose from 4.2 to 5.1 minutes, primarily due to complex technical issues and longer resolution times for product defects.',
      tags: ['Call Handling', 'Efficiency', 'Performance']
    },
    {
      id: 2,
      title: 'Customer satisfaction scores dropped 12% in technical support',
      category: 'Customer',
      confidence: 'High',
      impact: 'High',
      summary: 'CSAT scores in technical support decreased from 4.3 to 3.8, with customers citing long wait times and unresolved issues as primary concerns.',
      tags: ['Customer Satisfaction', 'Technical Support', 'Quality']
    },
    {
      id: 3,
      title: 'AI agent resolution rate improved to 78% for simple queries',
      category: 'AI Performance',
      confidence: 'Medium',
      impact: 'Medium',
      summary: 'AI agents now successfully resolve 78% of simple customer queries without human escalation, up from 65% last quarter.',
      tags: ['AI Agents', 'Automation', 'Efficiency']
    },
    {
      id: 4,
      title: 'Top customer issue: "Password reset" accounts for 34% of calls',
      category: 'Customer Issues',
      confidence: 'High',
      impact: 'Medium',
      summary: 'Password reset requests dominate customer interactions, suggesting need for improved self-service options or simplified authentication process.',
      tags: ['Password Reset', 'Self-Service', 'Volume']
    },
    {
      id: 5,
      title: 'Agent burnout indicators: 45% report high stress levels',
      category: 'Agent Wellbeing',
      confidence: 'Medium',
      impact: 'High',
      summary: 'Survey data shows 45% of agents report high stress levels, with peak stress during technical issue escalations and angry customer interactions.',
      tags: ['Agent Stress', 'Burnout', 'Wellbeing']
    },
    {
      id: 6,
      title: 'Email response time improved by 18% with AI assistance',
      category: 'AI Performance',
      confidence: 'High',
      impact: 'Medium',
      summary: 'Average email response time decreased from 4.2 hours to 3.4 hours with AI-powered response suggestions and automated categorization.',
      tags: ['Email Support', 'AI Assistance', 'Response Time']
    },
    {
      id: 7,
      title: 'Chat abandonment rate spiked to 28% during peak hours',
      category: 'Operational',
      confidence: 'High',
      impact: 'Medium',
      summary: 'Chat abandonment rate increased from 18% to 28% during 2-4 PM peak hours, indicating insufficient staffing or slow response times.',
      tags: ['Chat Support', 'Abandonment', 'Peak Hours']
    },
    {
      id: 8,
      title: 'Product defect reports increased 67% after software update',
      category: 'Product Issues',
      confidence: 'High',
      impact: 'High',
      summary: 'Customer reports of software bugs and defects increased significantly following the latest product update, requiring immediate attention.',
      tags: ['Product Defects', 'Software Update', 'Bugs']
    }
  ];

  const filteredInsights = insights.filter(insight => {
    if (filters.category !== 'all' && insight.category !== filters.category) return false;
    if (filters.confidence !== 'all' && insight.confidence !== filters.confidence) return false;
    if (filters.impact !== 'all' && insight.impact !== filters.impact) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your business insights and analytics</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filter Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="Operational">Operational</option>
              <option value="Customer">Customer</option>
              <option value="AI Performance">AI Performance</option>
              <option value="Customer Issues">Customer Issues</option>
              <option value="Agent Wellbeing">Agent Wellbeing</option>
              <option value="Product Issues">Product Issues</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confidence Level</label>
            <select
              value={filters.confidence}
              onChange={(e) => setFilters({...filters, confidence: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Impact Level</label>
            <select
              value={filters.impact}
              onChange={(e) => setFilters({...filters, impact: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            >
              <option value="all">All Levels</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setFilters({category: 'all', confidence: 'all', impact: 'all'})}
            className="btn-secondary"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {/* Insights by Category */}
      <div className="space-y-8">
        {['Operational', 'Customer', 'AI Performance', 'Customer Issues', 'Agent Wellbeing', 'Product Issues'].map((category) => {
          const categoryInsights = filteredInsights.filter(insight => insight.category === category);
          if (categoryInsights.length === 0) return null;
          
          return (
            <div key={category} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                      {categoryInsights.length} insights
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                {categoryInsights.map((insight) => (
                  <InsightCard key={insight.id} insight={insight} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
