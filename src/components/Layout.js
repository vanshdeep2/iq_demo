import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, FileText, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard' },
    { path: '/queries', icon: Search, label: 'Queries' },
    { path: '/documents', icon: FileText, label: 'Documents' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-sm border-r border-gray-200 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-2">
                <img src="/quantanite-logo.png" alt="Quantanite" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900">IQ</span>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-lg hover:bg-gray-100"
            >
              {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>
        </div>

        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-all duration-200 cursor-pointer font-medium mx-2 ${
                  isActive ? 'bg-gray-100 text-gray-900' : ''
                } ${sidebarCollapsed ? 'justify-center px-2' : ''}`}
              >
                <Icon size={20} />
                {!sidebarCollapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
