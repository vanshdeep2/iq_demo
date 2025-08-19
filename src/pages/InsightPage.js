import React from 'react';
import { useParams } from 'react-router-dom';
import { Send, Check, Edit, Flag, HelpCircle } from 'lucide-react';

const InsightPage = () => {
  const { id } = useParams();

  const insight = {
    id: id,
    title: 'Call Volume Increase',
    description: 'Call volume has increased by 15% compared to last week',
    trend: 'up',
    value: '+15%',
    category: 'Performance',
    details: 'This increase is primarily due to seasonal demand and recent marketing campaigns. The peak hours are between 2-4 PM.',
    recommendations: [
      'Increase staffing during peak hours',
      'Implement call routing optimization',
      'Consider adding self-service options'
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{insight.title}</h1>
        <p className="text-gray-600 mt-1">Detailed analysis and recommendations</p>
      </div>

      {/* Insight Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{insight.title}</h2>
            <p className="text-gray-600 mb-4">{insight.description}</p>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {insight.category}
              </span>
              <span className="text-lg font-bold text-green-600">
                {insight.value}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysis</h3>
            <p className="text-gray-600">{insight.details}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h3>
            <ul className="space-y-2">
              {insight.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          <Send size={20} />
          <span>Share Insight</span>
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
          <Edit size={20} />
          <span>Edit</span>
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
          <Flag size={20} />
          <span>Flag</span>
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
          <HelpCircle size={20} />
          <span>Help</span>
        </button>
      </div>
    </div>
  );
};

export default InsightPage;
