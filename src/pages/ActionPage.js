import React from 'react';
import { useParams } from 'react-router-dom';
import { Send, ArrowLeft, CheckCircle, Clock, Users, Target } from 'lucide-react';

const ActionPage = () => {
  const { id } = useParams();

  const action = {
    id: id,
    title: 'Review Call Scripts',
    description: 'Update call scripts based on recent feedback',
    priority: 'high',
    status: 'pending',
    details: 'Customer feedback indicates that current call scripts are not addressing common concerns effectively. This action involves reviewing and updating scripts to improve customer satisfaction.',
    impact: 'High',
    effort: 'Medium',
    assignee: 'Sarah Johnson',
    dueDate: '2024-01-25'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{action.title}</h1>
          <p className="text-gray-600 mt-1">Action details and progress tracking</p>
        </div>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      {/* Action Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{action.title}</h2>
            <p className="text-gray-600 mb-4">{action.description}</p>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                action.priority === 'high' ? 'text-red-600 bg-red-100' : 'text-gray-600 bg-gray-100'
              }`}>
                {action.priority} Priority
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                action.status === 'completed' ? 'text-green-600 bg-green-100' : 
                action.status === 'in-progress' ? 'text-blue-600 bg-blue-100' : 'text-gray-600 bg-gray-100'
              }`}>
                {action.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Details</h3>
              <p className="text-gray-600">{action.details}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Target size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Impact: <span className="font-medium">{action.impact}</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Effort: <span className="font-medium">{action.effort}</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Assignee: <span className="font-medium">{action.assignee}</span></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Due: <span className="font-medium">{action.dueDate}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <CheckCircle size={20} />
          <span>Mark Complete</span>
        </button>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Send size={20} />
          <span>Start Action</span>
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
          <Clock size={20} />
          <span>Update Status</span>
        </button>
      </div>
    </div>
  );
};

export default ActionPage;
