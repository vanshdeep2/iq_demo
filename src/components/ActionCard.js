import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Edit, Flag, HelpCircle } from 'lucide-react';

const ActionCard = ({ action }) => {
  const navigate = useNavigate();

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEffortColor = (effort) => {
    switch (effort) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={() => navigate(`/action/${action.id}`)}
    >
      <div className="space-y-5">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{action.title}</h3>
          <p className="text-gray-600 leading-relaxed">{action.reasoning}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-900">{action.score}</div>
            <div className="text-sm text-gray-500 font-medium">Score</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-lg font-semibold text-gray-900">{action.confidence}</div>
            <div className="text-sm text-gray-500 font-medium">Confidence</div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {action.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Effort Level */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm font-medium text-gray-700">Effort Level:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEffortColor(action.effort)}`}>
            {action.effort}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Check className="w-5 h-5" />
            <span>Approve</span>
          </button>
          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Edit className="w-5 h-5" />
          </button>
          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Flag className="w-5 h-5" />
          </button>
          <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
