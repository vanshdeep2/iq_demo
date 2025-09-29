import React, { useState } from 'react';
import { Filter, Brain } from 'lucide-react';
import InsightCard from '../components/InsightCard';

const AnalystInsights = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    confidence: 'all',
    impact: 'all'
  });

  // Analyst-specific insights data
  const insights = [
    {
      id: 1,
      title: 'AI agent resolution rate improved to 78% for simple queries',
      category: 'AI Performance',
      confidence: 'Medium',
      impact: 'Medium',
      summary: 'AI agents now successfully resolve 78% of simple customer queries without human escalation, up from 65% last quarter.',
      tags: ['AI Agents', 'Automation', 'Efficiency']
    },
    {
      id: 2,
      title: 'Top customer issue: "Password reset" accounts for 34% of calls',
      category: 'Customer Issues',
      confidence: 'High',
      impact: 'Medium',
      summary: 'Password reset requests dominate customer interactions, suggesting need for improved self-service options or simplified authentication process.',
      tags: ['Password Reset', 'Self-Service', 'Volume']
    },
    {
      id: 3,
      title: 'Agent burnout indicators: 45% report high stress levels',
      category: 'Agent Wellbeing',
      confidence: 'Medium',
      impact: 'High',
      summary: 'Survey data shows 45% of agents report high stress levels, with peak stress during technical issue escalations and angry customer interactions.',
      tags: ['Agent Stress', 'Burnout', 'Wellbeing']
    },
    {
      id: 4,
      title: 'Product defect reports increased 67% after software update',
      category: 'Product Issues',
      confidence: 'High',
      impact: 'High',
      summary: 'Customer reports of software bugs and defects increased significantly following the latest product update, requiring immediate attention.',
      tags: ['Product Defects', 'Software Update', 'Bugs']
    },
    {
      id: 5,
      title: 'Customer sentiment analysis shows 23% increase in negative feedback',
      category: 'Customer',
      confidence: 'High',
      impact: 'High',
      summary: 'Sentiment analysis of customer feedback reveals a 23% increase in negative sentiment, primarily related to response times and issue resolution.',
      tags: ['Sentiment Analysis', 'Customer Feedback', 'Trends']
    },
    {
      id: 6,
      title: 'Peak call volume patterns shifted to 10-11 AM window',
      category: 'Operational',
      confidence: 'High',
      impact: 'Medium',
      summary: 'Analysis of call volume patterns shows a shift in peak hours from 2-4 PM to 10-11 AM, requiring staffing adjustments.',
      tags: ['Call Volume', 'Peak Hours', 'Staffing']
    },
    {
      id: 7,
      title: 'Knowledge base gaps identified in 15% of escalated cases',
      category: 'Knowledge Management',
      confidence: 'Medium',
      impact: 'Medium',
      summary: 'Analysis of escalated cases reveals knowledge base gaps in 15% of instances, indicating areas for content improvement.',
      tags: ['Knowledge Base', 'Escalations', 'Content Gaps']
    },
    {
      id: 8,
      title: 'Customer churn risk increased by 18% in premium segment',
      category: 'Customer',
      confidence: 'High',
      impact: 'High',
      summary: 'Predictive analysis shows 18% increase in churn risk for premium customers, primarily due to service quality concerns.',
      tags: ['Customer Churn', 'Premium Segment', 'Risk Analysis']
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
          <div className="flex items-center gap-3 mb-2">
            <Brain className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Analyst Insights</h1>
          </div>
          <p className="text-gray-600 mt-1">Deep analytical insights and predictive intelligence</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Filter Analyst Insights</h2>
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
              <option value="AI Performance">AI Performance</option>
              <option value="Customer Issues">Customer Issues</option>
              <option value="Agent Wellbeing">Agent Wellbeing</option>
              <option value="Product Issues">Product Issues</option>
              <option value="Customer">Customer</option>
              <option value="Operational">Operational</option>
              <option value="Knowledge Management">Knowledge Management</option>
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
        {['AI Performance', 'Customer Issues', 'Agent Wellbeing', 'Product Issues', 'Customer', 'Operational', 'Knowledge Management'].map((category) => {
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

export default AnalystInsights;
