import React, { useState } from 'react';
import { FileText, Upload, Search, Filter, Calendar, User, FileType } from 'lucide-react';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Call Transcripts Q3 2023',
      type: 'Transcripts',
      category: 'Call Data',
      uploadedBy: 'System Import',
      uploadedDate: '2023-10-15',
      size: '2.3 GB',
      insights: 12,
      status: 'Processed'
    },
    {
      id: 2,
      name: 'Customer Feedback Surveys',
      type: 'Survey',
      category: 'Customer Data',
      uploadedBy: 'Marketing Team',
      uploadedDate: '2023-10-10',
      size: '156 MB',
      insights: 8,
      status: 'Processed'
    },
    {
      id: 3,
      name: 'Agent Performance Reports',
      type: 'Report',
      category: 'Performance',
      uploadedBy: 'HR Department',
      uploadedDate: '2023-10-08',
      size: '89 MB',
      insights: 15,
      status: 'Processing'
    },
    {
      id: 4,
      name: 'Sales Database Export',
      type: 'Database',
      category: 'Sales Data',
      uploadedBy: 'Sales Team',
      uploadedDate: '2023-10-05',
      size: '1.2 GB',
      insights: 6,
      status: 'Processed'
    },
    {
      id: 5,
      name: 'Product Issue Logs',
      type: 'Logs',
      category: 'Product Data',
      uploadedBy: 'Support Team',
      uploadedDate: '2023-10-03',
      size: '445 MB',
      insights: 9,
      status: 'Processed'
    }
  ];

  const categories = ['all', 'Call Data', 'Customer Data', 'Performance', 'Sales Data', 'Product Data'];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processed': return 'text-green-600 bg-green-100';
      case 'Processing': return 'text-yellow-600 bg-yellow-100';
      case 'Failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
        <button className="btn-primary flex items-center space-x-2">
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Document</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Uploaded</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Insights</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">by {doc.uploadedBy}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {doc.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{doc.category}</td>
                  <td className="py-4 px-4 text-gray-600">{doc.uploadedDate}</td>
                  <td className="py-4 px-4 text-gray-600">{doc.size}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {doc.insights} insights
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Area */}
      {filteredDocuments.length === 0 && (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Upload your first document to start generating insights.'
            }
          </p>
          <button className="btn-primary">
            Upload Document
          </button>
        </div>
      )}

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-2xl font-bold text-gray-900">{documents.length}</div>
          <div className="text-sm text-gray-600">Total Documents</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-gray-900">
            {documents.reduce((sum, doc) => sum + doc.insights, 0)}
          </div>
          <div className="text-sm text-gray-600">Insights Generated</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-gray-900">
            {documents.filter(doc => doc.status === 'Processed').length}
          </div>
          <div className="text-sm text-gray-600">Processed</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-gray-900">
            {documents.filter(doc => doc.status === 'Processing').length}
          </div>
          <div className="text-sm text-gray-600">Processing</div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
