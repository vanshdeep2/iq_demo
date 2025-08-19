import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const InsightCard = ({ insight }) => {
  const navigate = useNavigate();

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (title) => {
    if (title.toLowerCase().includes('increased') || title.toLowerCase().includes('growth')) {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (title.toLowerCase().includes('declined') || title.toLowerCase().includes('decreased')) {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    }
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden"
      onClick={() => navigate(`/insight/${insight.id}`)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getTrendIcon(insight.title)}
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">{insight.title}</h3>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{insight.summary}</p>
        
        <div className="flex items-center space-x-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConfidenceColor(insight.confidence)}`}>
            {insight.confidence} Confidence
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(insight.impact)}`}>
            {insight.impact} Impact
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            {insight.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {insight.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Click to view detailed analysis</span>
          <span className="text-gray-600 font-medium">→</span>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
