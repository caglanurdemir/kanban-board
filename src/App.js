import React, { useState } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import Sidebar from './components/Sidebar';
import './App.scss';

const App = () => {

  return (
    <div className="app">
      <Header />
      <div className='page'>
        <Sidebar />
        <div className="main-content">
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
};

export default App;

