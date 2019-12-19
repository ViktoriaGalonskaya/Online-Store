import React from 'react';
import BrandLogo from "../../images/brand-logo-black.svg";
import { Link } from "react-router-dom";
import "../../styles/logo.scss"

const Logo = () => {

    return(
        <div className="logo-wrapper">
            <div className="logo">
                <Link to="/">
                    <img src={BrandLogo} alt="" className="logo-image" />
                </Link>
            </div>
        </div>
    )
};

export default Logo;