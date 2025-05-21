import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { cn } from '../../lib/utils';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header toggleSidebar={toggleSidebar} />

      {/* Container for sidebar and main content */}
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={sidebarOpen} />

        {/* Overlay on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}

        <main className="flex-1 overflow-y-auto z-0">
          <div className="container mx-auto py-6 px-4 md:px-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
