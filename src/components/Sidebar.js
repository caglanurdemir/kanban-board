import React from 'react';
import '../styles/Sidebar.scss';
import dashboard from '../assets/sidebarIcons/dashboard.svg';
import chat from '../assets/sidebarIcons/chat.svg';
import task from '../assets/sidebarIcons/task.svg';
import explore from '../assets/sidebarIcons/explore.svg';
import repeat from '../assets/sidebarIcons/repeat.svg';
import bell from '../assets/sidebarIcons/bell.svg';
import company from '../assets/sidebarIcons/company.svg';
import name from '../assets/sidebarIcons/name.svg';
import help from '../assets/sidebarIcons/chat-alt.svg';
import plus from '../assets/sidebarIcons/plus.svg';
import line from '../assets/sidebarIcons/line.svg';

const Sidebar = () => {
    return (
        <div className={`sidebar`}>
            <div className="sidebar-top">
                <div className="sidebar-buttons">
                    <button className="sidebar-button">
                        <img src={dashboard} alt="Dashboard" className='icons' />
                        Dashboard
                    </button>
                    <button className="sidebar-button">
                        <img src={chat} alt="Feedback" className='icons' />
                        Feedback
                    </button>
                    <button className="sidebar-button">
                        <img src={task} alt="Task" className='icons' />
                        Task
                    </button>
                    <button className="sidebar-button">
                        <img src={explore} alt="Roadmap" className='icons' />
                        Roadmap
                    </button>
                    <button className="sidebar-button">
                        <img src={repeat} alt="Changelog" className='icons' />
                        Changelog
                    </button>
                </div>
            </div>
            <div className="sidebar-bottom">
                <button className="sidebar-button">
                    <img src={plus} alt="Invite People" className='icons' />
                    Invite People
                </button>
                <button className="sidebar-button">
                    <img src={help} alt="Help Community" className='icons' />
                    Help Community
                </button>
                <button className="sidebar-button-user">
                    <img src={bell} alt="Notifications" className='icons' />
                    Notifications
                </button>
                <img src={line} alt="Line" className='line' />
                <button className="sidebar-button-user">
                    <img src={name} alt="Name Surname" className='user-logo' />
                    Name Surname
                </button>
                <img src={line} alt="Line" className='line' />
                <button className="sidebar-button-user">
                    <img src={company} alt="Company Logo" className='user-logo' />
                    Company
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
