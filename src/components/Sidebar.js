import React, { useState } from 'react';
import '../styles/Sidebar.scss';
import dashboard from '../assets/sidebarIcons/dashboard.svg';
import chat from '../assets/sidebarIcons/chat.svg';
import home from '../assets/sidebarIcons/home-alt.svg';
import explore from '../assets/sidebarIcons/explore.svg';
import repeat from '../assets/sidebarIcons/repeat.svg';
import bell from '../assets/sidebarIcons/bell.svg';
import company from '../assets/sidebarIcons/company.svg';
import name from '../assets/sidebarIcons/name.svg';
import help from '../assets/sidebarIcons/chat-alt.svg';
import plus from '../assets/sidebarIcons/plus.svg';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-top">
                <div className="sidebar-buttons">
                    <button className="sidebar-button">
                        <img src={dashboard} alt="Dashboard" />
                        Dashboard
                    </button>
                    <button className="sidebar-button">
                        <img src={chat} alt="Feedback" />
                        Feedback
                    </button>
                    <button className="sidebar-button">
                        <img src={home} alt="Task" />
                        Task
                    </button>
                    <button className="sidebar-button">
                        <img src={explore} alt="Roadmap" />
                        Roadmap
                    </button>
                    <button className="sidebar-button">
                        <img src={repeat} alt="Changelog" />
                        Changelog
                    </button>
                </div>
            </div>
            <div className="sidebar-bottom">
                <button className="sidebar-button">
                    <img src={plus} alt="Invite People" />
                    Invite People
                </button>
                <button className="sidebar-button">
                    <img src={help} alt="Help Community" />
                    Help Community
                </button>
                <button className="sidebar-button">
                    <img src={bell} alt="Notifications" />
                    Notifications
                </button>
                <div className="sidebar-button">
                    <img src={name} alt="Name Surname" />
                    <div className="user-name">Name Surname</div>
                </div>
                <div className="sidebar-button">
                    <img src={company} alt="Company Logo" />
                    <div className="company">Company</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
