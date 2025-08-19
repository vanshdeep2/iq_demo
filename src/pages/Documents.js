import React from 'react';
import { FileText, Upload, Search, Filter, Calendar, User, FileType } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Call Center Procedures.pdf',
      type: 'PDF',
      size: '2.4 MB',
      uploadedBy: 'John Smith',
      uploadDate: '2024-01-15',
      category: 'Procedures'
    },
    {
      id: 2,
      name: 'Customer Feedback Report.xlsx',
      type: 'Excel',
      size: '1.8 MB',
      uploadedBy: 'Sarah Johnson',
      uploadDate: '2024-01-14',
      category: 'Reports'
    },
    {
      id: 3,
      name: 'Training Manual.docx',
      type: 'Word',
      size: '3.2 MB',
      uploadedBy: 'Mike Wilson',
      uploadDate: '2024-01-13',
      category: 'Training'
    }
  ];

  const getFileTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'excel':
      case 'xlsx':
        return <FileText className="w-5 h-5 text-green-500" />;
      case 'word':
      case 'docx':
        return <FileText className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 mt-1">Manage your call center documents</p>
        </div>
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          <Upload size={20} />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search documents..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
        <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">All Documents</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {documents.map((doc) => (
            <div key={doc.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {getFileTypeIcon(doc.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">{doc.size}</span>
                    <span className="text-xs text-gray-500">{doc.type}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{doc.category}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{doc.uploadedBy}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{doc.uploadDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
