import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, CheckCircle, Clock, Users, Target } from 'lucide-react';

const ActionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'I can help you implement this action. What specific steps would you like guidance on?' }
  ]);

  // Mock action data
  const action = {
    id: 1,
    title: 'Call flow audit',
    reasoning: 'High handling time on voice channel; analysis identified bottleneck in escalation process.',
    score: 8.9,
    confidence: 'High',
    effort: 'Low',
    tags: ['Quick', 'Process Improvement'],
    description: 'Conduct a comprehensive audit of the current call flow to identify and eliminate bottlenecks in the escalation process.',
    expectedOutcome: 'Reduce average handling time by 15-20% and improve customer satisfaction scores.',
    timeline: '2-3 weeks',
    resources: ['Call center manager', 'Process analyst', 'Quality assurance team'],
    steps: [
      'Review current call flow documentation',
      'Analyze call handling time data by agent and process step',
      'Identify bottlenecks in escalation procedures',
      'Interview agents about pain points in current process',
      'Develop optimized call flow with reduced handoffs',
      'Implement changes in test environment',
      'Train agents on new process',
      'Monitor performance metrics post-implementation'
    ],
    risks: [
      'Temporary disruption during transition period',
      'Resistance from agents to process changes',
      'Potential increase in call abandonment during initial rollout'
    ],
    successMetrics: [
      'Average handling time reduction',
      'Customer satisfaction scores',
      'First call resolution rate',
      'Agent satisfaction scores'
    ]
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = { type: 'user', message: chatMessage };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = { 
          type: 'bot', 
          message: 'Great question! Let me provide you with detailed implementation guidance for this step.' 
        };
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">{action.title}</h1>
      </div>

      {/* Action Overview */}
      <div className="card">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Action Overview</h2>
            <p className="text-gray-600 mb-4">{action.description}</p>
            <p className="text-gray-600">{action.reasoning}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
              Score: {action.score}
            </span>
          </div>
        </div>
      </div>

      {/* Key Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <Clock className="w-5 h-5 text-blue-500" />
            <h3 className="font-medium text-gray-900">Timeline</h3>
          </div>
          <p className="text-gray-600">{action.timeline}</p>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <Users className="w-5 h-5 text-green-500" />
            <h3 className="font-medium text-gray-900">Resources Needed</h3>
          </div>
          <ul className="space-y-1">
            {action.resources.map((resource, index) => (
              <li key={index} className="text-gray-600 text-sm">• {resource}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-3">
            <Target className="w-5 h-5 text-purple-500" />
            <h3 className="font-medium text-gray-900">Expected Outcome</h3>
          </div>
          <p className="text-gray-600 text-sm">{action.expectedOutcome}</p>
        </div>
      </div>

      {/* Implementation Steps */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Implementation Steps</h2>
        <div className="space-y-3">
          {action.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Risks and Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Potential Risks</h2>
          <ul className="space-y-2">
            {action.risks.map((risk, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600">{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Success Metrics</h2>
          <ul className="space-y-2">
            {action.successMetrics.map((metric, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{metric}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Implementation Chat */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Get Implementation Help</h2>
        <div className="space-y-4">
          <div className="h-64 overflow-y-auto space-y-3">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                  chat.type === 'user' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask for implementation guidance..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="btn-primary flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPage;
