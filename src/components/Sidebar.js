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
                        <span className='sidebar-button-text'>Dashboard</span>
                    </button>
                    <button className="sidebar-button">
                        <img src={chat} alt="Feedback" className='icons' />
                        <span className='sidebar-button-text'>Feedback</span>
                    </button>
                    <button className="sidebar-button">
                        <img src={task} alt="Task" className='icons' />
                        <span className='sidebar-button-text'>Task</span>
                    </button>
                    <button className="sidebar-button">
                        <img src={explore} alt="Roadmap" className='icons' />
                        <span className='sidebar-button-text'>Roadmap</span>
                    </button>
                    <button className="sidebar-button">
                        <img src={repeat} alt="Changelog" className='icons' />
                        <span className='sidebar-button-text'>Changelog</span>
                    </button>
                </div>
            </div>
            <div className="sidebar-bottom">
                <button className="sidebar-button">
                    <img src={plus} alt="Invite People" className='icons' />
                    <span className='sidebar-button-text'>Invite People</span>
                </button>
                <button className="sidebar-button">
                    <img src={help} alt="Help Community" className='icons' />
                    <span className='sidebar-button-text'>Help Community</span>
                </button>
                <button className="sidebar-button-user">
                    <img src={bell} alt="Notifications" className='icons' />
                    <span className='sidebar-button-text'>Notifications</span>
                </button>
                <img src={line} alt="Line" className='line' />
                <button className="sidebar-button-user">
                    <img src={name} alt="Name Surname" className='user-logo' />
                    <span className='sidebar-button-user-text'>Neil Larkins</span>
                </button>
                <img src={line} alt="Line" className='line' />
                <button className="sidebar-button-user">
                    <img src={company} alt="Company Logo" className='user-logo' />
                    <span className='sidebar-button-user-text'>Epodpay Inc.</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
