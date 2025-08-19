import React, { useState } from 'react';
import { Search, Send, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const Queries = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Queries</h1>
        <p className="text-gray-600 mt-1">Ask questions about your data</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Ask a question about your data..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Search Suggestions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Try asking:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {searchSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors duration-200"
            >
              <p className="text-gray-700 font-medium">{suggestion}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Queries List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent Queries</h2>
        {queries.map((query) => (
          <div key={query.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{query.query}</h3>
                <p className="text-gray-600 text-sm mb-3">{query.result}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {query.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(query.status)}`}>
                    {query.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
