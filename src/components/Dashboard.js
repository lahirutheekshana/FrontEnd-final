import React, { useState } from 'react';
import { HomeOutlined } from '@mui/icons-material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SubtitlesOffIcon from '@mui/icons-material/SubtitlesOff';
import { Menu } from 'antd';
import './Dashboard.css';
import Logo from '../assets/trading.png';

function Dashboard() {
  const [page, setPages] = useState("Dashboard");

  const items = [
    { label: 'Dashboard', key: 'Dashboard', icon: <HomeOutlined /> },
    { label: 'Market', key: 'Market', icon: <StorefrontIcon /> },
    { label: 'Orders', key: 'Orders', icon: <LocalGroceryStoreIcon /> },
    { label: 'Trade', key: 'Trade', icon: <DisplaySettingsIcon /> },
    { label: 'Win/Loss', key: 'Win/Loss', icon: <SubtitlesOffIcon /> },
  ];

  const handleMenuClick = (e) => {
    setPages(e.key);
  };

  return (
    <div className='App'>
      <div className='AppGlass'>
        <div className="dashboard-container">
          {/* Sidebar with Logo */}
          <div className="sidebar-container">
            <div className="logo-text-container">
              <img src={Logo} alt="Trading Logo" className="trading-logo" />
              <span className="trading-name">
                TP<span>l</span>an
              </span>
            </div>

            <div className='menu'>
              <Menu
                className="menu-sidebar"
                mode="vertical"
                onClick={handleMenuClick}
                items={items}
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="content-area">
            <div className='Dashboard1'>
              {page === 'Dashboard' && (
                <div className="dashboard-inputs">
                  <h1>WELCOME TO X-TRADING SETUP</h1>
                </div>
              )}
              
            {page === 'Market' && <div>Welcome to Market</div>}
            {page === 'Orders' && <div>Welcome to Orders</div>}
            {page === 'Trade' && <div>Welcome to Trade</div>}
            {page === 'Win/Loss' && <div>Welcome to Win/Loss</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
