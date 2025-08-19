import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const InsightCard = ({ insight }) => {
  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      default:
        return <Minus className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{insight.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {insight.category}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {getTrendIcon(insight.trend)}
          <span className={`text-lg font-bold ${getTrendColor(insight.trend)}`}>
            {insight.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
