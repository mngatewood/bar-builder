import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom'

export const Dashboard = () => {
  return <aside className="dashboard-container">
    <NavLink to='/inventory'>
      <button>
        Inventory
      </button>
    </NavLink>
    <button>
      Menu
    </button>
  
  </aside>
}