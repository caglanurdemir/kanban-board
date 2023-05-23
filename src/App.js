import React, { useState } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import Sidebar from './components/Sidebar';
import './App.scss';

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app">
      <Header />
      <div className={`content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Sidebar />
        <KanbanBoard />
        <button className="collapse-button" onClick={handleToggleSidebar}>
          {sidebarCollapsed ? '>' : '<'}
        </button>
      </div>
    </div>
  );
};

export default App;

