import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, CheckCircle, Clock, Users, Target, TrendingUp, AlertTriangle, Calendar } from 'lucide-react';

const ActionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'Hello! I can help you implement this action. What would you like to know about getting started?' }
  ]);

  // Enhanced action data based on ID
  const getActionData = (id) => {
    const actionsData = {
      // Insight 1 actions (Call handling time)
      101: {
        id: 101,
        title: 'Call Flow Optimization',
        description: 'Analyze and streamline call escalation processes',
        priority: 'high',
        status: 'pending',
        details: 'Analyze and streamline call escalation processes to reduce handling time for complex technical issues. This involves reviewing current workflows and implementing process improvements.',
        impact: 'High',
        effort: 'Medium',
        assignee: 'Operations Team',
        dueDate: '2024-02-15',
        reasoning: 'Analyze and streamline call escalation processes to reduce handling time for complex technical issues.',
        score: 9.2,
        confidence: 'High',
        tags: ['Process Improvement', 'Efficiency'],
        implementationSteps: [
          'Analyze current call escalation workflows',
          'Identify bottlenecks and delays',
          'Design streamlined processes',
          'Implement new procedures',
          'Monitor performance improvements'
        ],
        risks: [
          'Process changes may initially slow down operations',
          'Staff resistance to new procedures',
          'Potential impact on call quality'
        ],
        metrics: [
          'Average call handling time reduction',
          'Escalation rate decrease',
          'Agent efficiency improvement'
        ]
      },
      102: {
        id: 102,
        title: 'Agent Training on New Features',
        description: 'Provide comprehensive training on recent product updates',
        priority: 'high',
        status: 'pending',
        details: 'Provide comprehensive training on recent product updates to reduce resolution time for technical issues. This will ensure agents are equipped with the latest knowledge.',
        impact: 'High',
        effort: 'Medium',
        assignee: 'Training Team',
        dueDate: '2024-02-01',
        reasoning: 'Provide comprehensive training on recent product updates to reduce resolution time for technical issues.',
        score: 8.5,
        confidence: 'High',
        tags: ['Training', 'Product Knowledge'],
        implementationSteps: [
          'Assess current agent knowledge gaps',
          'Develop training materials for new features',
          'Schedule training sessions',
          'Conduct hands-on workshops',
          'Evaluate training effectiveness'
        ],
        risks: [
          'Training time may temporarily reduce agent availability',
          'Some agents may struggle with new features',
          'Training costs and resource allocation'
        ],
        metrics: [
          'Agent knowledge assessment scores',
          'Call resolution time improvement',
          'Training completion rates'
        ]
      },
      103: {
        id: 103,
        title: 'Implement Knowledge Base',
        description: 'Create detailed troubleshooting guides',
        priority: 'medium',
        status: 'pending',
        details: 'Create detailed troubleshooting guides for common technical issues to speed up resolution. This will provide agents with quick reference materials.',
        impact: 'Medium',
        effort: 'High',
        assignee: 'Knowledge Management Team',
        dueDate: '2024-03-15',
        reasoning: 'Create detailed troubleshooting guides for common technical issues to speed up resolution.',
        score: 7.8,
        confidence: 'Medium',
        tags: ['Knowledge Management', 'Long-term'],
        implementationSteps: [
          'Identify common technical issues',
          'Research solutions and best practices',
          'Create comprehensive guides',
          'Review and validate content',
          'Launch knowledge base platform'
        ],
        risks: [
          'High initial development costs',
          'Content may become outdated quickly',
          'Complex system integration requirements'
        ],
        metrics: [
          'Knowledge base usage rates',
          'Issue resolution time improvement',
          'Agent satisfaction with resources'
        ]
      },
      // Insight 5 actions (Agent burnout)
      5: {
        id: 5,
        title: 'Implement Mental Health Support Program',
        description: 'Create comprehensive mental health support resources for agents',
        priority: 'high',
        status: 'pending',
        details: 'Based on survey data showing 45% of agents report high stress levels, this action involves implementing counseling services, stress management resources, and mental health support programs to improve agent wellbeing and reduce burnout.',
        impact: 'High',
        effort: 'Medium',
        assignee: 'HR Team',
        dueDate: '2024-02-15',
        reasoning: 'Implement counseling services and stress management resources for agents.',
        score: 9.3,
        confidence: 'High',
        tags: ['Wellbeing', 'Support'],
        implementationSteps: [
          'Conduct needs assessment survey',
          'Partner with mental health providers',
          'Create support program guidelines',
          'Train managers on mental health awareness',
          'Launch pilot program with select teams'
        ],
        risks: [
          'Privacy concerns about mental health data',
          'Cost of professional counseling services',
          'Stigma around seeking mental health support'
        ],
        metrics: [
          'Agent stress level reduction',
          'Turnover rate improvement',
          'Employee satisfaction scores'
        ]
      }
    };
    
    return actionsData[id] || actionsData[101];
  };

    const action = getActionData(parseInt(id));

  // Action-specific chat suggestions
  const getActionSuggestions = (actionId) => {
    const suggestions = {
      101: [ // Call Flow Optimization
        'What are the current bottlenecks in our call flow?',
        'How long should each step take?',
        'Which agents need training on the new process?',
        'What tools would help streamline the workflow?'
      ],
      102: [ // Agent Training
        'What specific skills do agents need training on?',
        'How can we measure training effectiveness?',
        'Which agents would benefit most from training?',
        'What training materials should we create?'
      ],
      103: [ // Knowledge Base
        'What topics should be covered in the knowledge base?',
        'How can we keep the content up to date?',
        'Which agents will maintain the knowledge base?',
        'How can we measure knowledge base usage?'
      ],
      5: [ // Mental Health Support
        'What mental health resources are currently available?',
        'How can we ensure agent privacy in counseling?',
        'What training do managers need for mental health awareness?',
        'How can we measure the effectiveness of support programs?'
      ]
    };
    return suggestions[actionId] || suggestions[101];
  };

  const actionSuggestions = getActionSuggestions(parseInt(id));

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = { type: 'user', message: chatMessage };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      
      // Simulate bot response with implementation guidance
      setTimeout(() => {
        const botResponse = { 
          type: 'bot', 
          message: `Great question! For implementing "${action.title}", here are some key steps:\n\n1. Start with ${action.implementationSteps[0]}\n2. Then move to ${action.implementationSteps[1]}\n3. Consider the risks: ${action.risks[0]}\n\nWould you like me to elaborate on any specific step?`
        };
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6 p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{action.title}</h1>
              <p className="text-gray-600 mt-1">Action details and implementation guidance</p>
            </div>
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
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
            
            {/* Action Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{action.score}</div>
                <div className="text-sm text-gray-500 font-medium">Action Score</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{action.confidence}</div>
                <div className="text-sm text-gray-500 font-medium">Confidence</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{action.effort}</div>
                <div className="text-sm text-gray-500 font-medium">Effort Level</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">{action.impact}</div>
                <div className="text-sm text-gray-500 font-medium">Impact</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-600 bg-gray-100">
                {action.priority} Priority
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-600 bg-gray-100">
                {action.status}
              </span>
            </div>

            {/* Action Tags */}
            <div className="flex flex-wrap gap-2">
              {action.tags && action.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Details</h3>
              <p className="text-gray-600">{action.details}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Reasoning</h3>
              <p className="text-gray-600">{action.reasoning}</p>
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

          {/* Implementation Steps */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Implementation Steps</h2>
            <div className="space-y-3">
              {action.implementationSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risks and Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Potential Risks</h2>
              <ul className="space-y-2">
                {action.risks.map((risk, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Success Metrics</h2>
              <ul className="space-y-2">
                {action.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="btn-primary flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>Mark Complete</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <Send size={20} />
              <span>Start Action</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Clock size={20} />
              <span>Update Status</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chat Interface Sidebar */}
      <div className="w-[500px] bg-white border-l border-gray-200 p-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Chat</h2>
        <p className="text-gray-600 mb-6">Ask me about implementing this action step-by-step</p>
        
        <div className="space-y-4">
          <div className="h-64 overflow-y-auto space-y-3">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                  chat.type === 'user' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  <div className="whitespace-pre-line">{chat.message}</div>
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
              placeholder="Ask about implementation steps..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="btn-primary flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send</span>
            </button>
          </div>
          
          {/* Chat Suggestions */}
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {actionSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setChatMessage(suggestion)}
                  className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1 rounded-full border border-gray-200 transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPage;
