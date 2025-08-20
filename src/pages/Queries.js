import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Queries = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'Hello! I can help you analyze your call center data. What would you like to know?' }
  ]);

  const searchSuggestions = [
    'Show me call volume trends for the last 30 days',
    'What are the top customer complaints?',
    'Agent performance metrics by department',
    'Customer satisfaction scores over time',
    'Which products have the most support issues?'
  ];

  const queries = [
    {
      id: 1,
      query: 'Show me call volume trends for the last 30 days',
      category: 'Analytics',
      status: 'completed',
      result: 'Call volume increased by 15%'
    },
    {
      id: 2,
      query: 'What are the top customer complaints?',
      category: 'Customer Service',
      status: 'in-progress',
      result: 'Processing...'
    },
    {
      id: 3,
      query: 'Agent performance metrics',
      category: 'Performance',
      status: 'pending',
      result: 'Pending execution'
    }
  ];



  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = { type: 'user', message: chatMessage };
      setChatHistory([...chatHistory, newMessage]);
      setChatMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = { 
          type: 'bot', 
          message: `I've analyzed your query: "${chatMessage}". Here are the key insights:\n\n• Call volume trends show a 15% increase over the last 30 days\n• Peak hours are between 2-4 PM\n• Technical issues account for 34% of calls\n• Customer satisfaction scores average 4.2/5\n\nWould you like me to dive deeper into any specific aspect?`
        };
        setChatHistory(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setChatMessage(suggestion);
  };

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6 p-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Queries</h1>
            <p className="text-gray-600 mt-1">Chat with AI to analyze your call center data</p>
          </div>

          {/* Chat Interface */}
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Analysis Chat</h2>
            <div className="space-y-4">
              <div className="h-96 overflow-y-auto space-y-3">
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
                  placeholder="Ask a question about your data..."
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
            </div>
          </div>

          {/* Search Suggestions */}
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1 rounded-full border border-gray-200 transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Queries Sidebar */}
      <div className="w-[500px] bg-white border-l border-gray-200 p-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Queries</h2>
        <div className="space-y-4">
          {queries.map((query) => (
            <div key={query.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 mb-2">{query.query}</h3>
                <p className="text-gray-600 text-xs mb-3">{query.result}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {query.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-600 bg-gray-100">
                    {query.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queries;
