import React, { useState } from 'react';
import '../styles/Header.scss';
import ModalComponent from './ModalComponent';
import producterLogo from '../assets/headerIcons/producterLogo.svg';
import filterIcon from '../assets/headerIcons/filterIcon.svg';
import filterIcon2 from '../assets/headerIcons/filterIcon2.svg';
import plusIcon from '../assets/headerIcons/plusIcon.svg';
import search from '../assets/headerIcons/searchIcon.svg';

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handlePlusIconClick = () => {
        setModalOpen(true);
    };

    return (
        <div className="header">
            <div className="header-left">
                <img src={producterLogo} alt="Producter Logo" className="producterLogo" />
                <div className="search-bar">
                    <img src={search} alt="Search Icon" className="search-icon" />
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <img src={filterIcon} alt="Filter Icon 1" className="icon" />
                <img src={filterIcon2} alt="Filter Icon 2" className="icon" />
            </div>
            <div className="header-right">
                <img
                    src={plusIcon}
                    alt="Plus Icon"
                    className="plus-icon"
                    onClick={handlePlusIconClick}
                />
            </div>
            {isModalOpen && <ModalComponent onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default Header;
