import React from 'react'; 
import "./styles.css";
import logo from '../../assets/logo/long-logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from './ProfileMenu';
import { Link } from 'react-router-dom';

function Header() {
    return (
    <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo"/>
        <div className="search-bar">
            <div className="search-bar-text">Anywhere</div>
            <div className="search-bar-text">Any Week</div>
            <div className="search-bar-text-2">Add Guests</div>
            <SearchRoundedIcon className="search-icon-div"/>
        </div>
        <div className="profile-container">
            <div className="airbnb-your-home">Airbnb your home</div>
            <div className="globe-div">
                <LanguageRoundedIcon sx={{ fontSize: "1.5rem"}}/>
            </div>
            <Link to={'/login'} className="profile-div">
                <BasicMenu/>
            </Link>
        </div>
    </div>
    )
}


export default Header