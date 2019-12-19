import React from "react";
import "../../styles/button.scss";

const Button = ({ title, className = '', href = '#', className2='' }) => (
    <div className={`button ${className}`}>
        <a href={href} className={`button-link ${className2}`}>
            {title || '... falied ...'}</a>
    </div>
);

export default Button;