import React from 'react';
import { Check, Edit, Flag, HelpCircle } from 'lucide-react';

const ActionCard = ({ action }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-blue-600 bg-blue-100';
      case 'pending':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4" />;
      case 'in-progress':
        return <Edit className="w-4 h-4" />;
      case 'pending':
        return <Flag className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{action.title}</h3>
        <div className="flex items-center space-x-2">
          {getStatusIcon(action.status)}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{action.description}</p>
      
      <div className="flex items-center space-x-3">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(action.priority)}`}>
          {action.priority} Priority
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(action.status)}`}>
          {action.status}
        </span>
      </div>
    </div>
  );
};

export default ActionCard;
