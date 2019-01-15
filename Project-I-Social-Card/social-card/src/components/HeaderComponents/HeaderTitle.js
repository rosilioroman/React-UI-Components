import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="header-title-container">
            <div className="header-title">
                <h4>Lambda School</h4>
                <a href="https://lambdaschool.com">@LambdaSchool</a>
                <p className="date">26 jan</p>
            </div>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;