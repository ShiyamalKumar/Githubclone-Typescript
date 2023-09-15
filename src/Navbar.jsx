import React from 'react';
import { useSelector } from 'react-redux';
import '../src/styles/Navbar.css';
import { faSun, faMoon, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user } = useSelector((state) => state.repositories);
    return (
        <div className="navbar">
            <div className='custom-nav-align'>
                <div className="avatar">
                    {user && user.avatar_url ? (
                        <img src={user.avatar_url} alt="User Avatar" />
                    ) : (
                        <img src={require('./assets/default.png')} alt="Default Avatar" />
                    )}
                </div>
                {/* Search Bar
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                </div> */}
            </div>

            {/* Dark/Light Mode Toggle */}
            <div className="dark-light-toggle">
                <FontAwesomeIcon icon={faSun} />
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <FontAwesomeIcon icon={faMoon} />

                {/* Notification Button */}
                <div className="notification-button">

                    <button><FontAwesomeIcon icon={faBell} /></button>


                </div>
            </div>
        </div>
    );
};

export default Navbar;
