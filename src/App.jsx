import React from 'react'
import "./app.css";
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';

export default function App() {
  return (
    <div className='App'>
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        
      </div>
    </div>
  )
}
