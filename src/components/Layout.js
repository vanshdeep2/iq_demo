import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BarChart3, FileText, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Check if we're on a detailed page that needs less top padding
  const isDetailedPage = location.pathname.includes('/insight/') || location.pathname.includes('/action/');

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Queries', href: '/queries', icon: Search },
    { name: 'Documents', href: '/documents', icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Collapsible Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-80'} bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-gray-100">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              {/* Quantanite Logo */}
              <img 
                src="/quantanite-logo.png?v=5" 
                alt="Quantanite Logo" 
                className="w-56 h-36 object-contain"
                style={{ width: '224px', height: '144px', maxWidth: 'none' }}
              />
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`sidebar-item ${isActive ? 'active' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}
                title={sidebarCollapsed ? item.name : ''}
              >
                <item.icon className={`w-6 h-6 ${sidebarCollapsed ? '' : 'mr-3'}`} />
                {!sidebarCollapsed && item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <main className={`p-8 ${isDetailedPage ? 'pt-14' : 'pt-20'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
