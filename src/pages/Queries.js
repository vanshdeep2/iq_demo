import React, { useState } from 'react';
import { Search, Send, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import InsightCard from '../components/InsightCard';

const Queries = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const sampleQueries = [
    'What is our customer satisfaction trend?',
    'Which products have the most support issues?',
    'How has agent performance changed this quarter?',
    'What are the main reasons for customer churn?',
    'Which regions are performing best?',
    'What is the average call handling time?'
  ];

  const insights = [
    {
      id: 1,
      title: 'Revenue increased 7% from the previous quarter',
      category: 'Financial',
      confidence: 'High',
      impact: 'High',
      summary: 'Total revenue grew by 7.0% compared to the prior quarter. This increase marks the third consecutive quarter of revenue growth.',
      tags: ['Revenue', 'Growth', 'Quarterly']
    },
    {
      id: 2,
      title: 'The North region had the highest sales growth',
      category: 'Regional',
      confidence: 'Medium',
      impact: 'Medium',
      summary: 'North region sales increased by 12% while other regions showed moderate growth of 3-5%.',
      tags: ['Regional', 'Sales', 'Growth']
    },
    {
      id: 3,
      title: 'Customer churn rate declined 15%',
      category: 'Customer',
      confidence: 'High',
      impact: 'High',
      summary: 'Customer retention improved significantly with churn rate dropping from 8% to 6.8%.',
      tags: ['Customer', 'Retention', 'Churn']
    },
    {
      id: 4,
      title: 'Operating expenses grew 5% year-over-year',
      category: 'Financial',
      confidence: 'Medium',
      impact: 'Medium',
      summary: 'Operating expenses increased by 5% compared to last year, primarily due to increased staffing costs.',
      tags: ['Expenses', 'Operations', 'Costs']
    }
  ];

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    
    // Simulate AI search delay
    setTimeout(() => {
      // Filter insights based on query keywords
      const keywords = query.toLowerCase().split(' ');
      const filtered = insights.filter(insight => 
        keywords.some(keyword => 
          insight.title.toLowerCase().includes(keyword) ||
          insight.summary.toLowerCase().includes(keyword) ||
          insight.tags.some(tag => tag.toLowerCase().includes(keyword))
        )
      );
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 1500);
  };

  const handleSampleQuery = (sampleQuery) => {
    setQuery(sampleQuery);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Queries</h1>
      </div>

      {/* Search Interface */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Ask IQ anything about your data</h2>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Ask a question about your call center data..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="btn-primary flex items-center space-x-2 px-6"
            >
              {isSearching ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span>{isSearching ? 'Searching...' : 'Ask'}</span>
            </button>
          </div>

          {/* Sample Queries */}
          <div>
            <p className="text-sm text-gray-600 mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {sampleQueries.map((sampleQuery, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleQuery(sampleQuery)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {sampleQuery}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Relevant Insights ({searchResults.length})
            </h3>
            <p className="text-sm text-gray-600">
              Based on your query: "{query}"
            </p>
          </div>
          
          <div className="space-y-4">
            {searchResults.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {query && searchResults.length === 0 && !isSearching && (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No insights found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any insights matching your query. Try rephrasing your question or use one of the sample queries above.
          </p>
          <button
            onClick={() => setQuery('')}
            className="btn-secondary"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Recent Queries */}
      {!query && (
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Queries</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Customer satisfaction trends</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <span className="text-sm text-gray-500">3 insights found</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Agent performance analysis</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
              <span className="text-sm text-gray-500">5 insights found</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Call volume patterns</p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
              <span className="text-sm text-gray-500">2 insights found</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
