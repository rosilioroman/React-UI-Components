import React from 'react';
import HeaderContent from './HeaderContent';
import moment from 'moment';
import './Header.css';

const time = moment();

function HeaderTitle() {
    return (
        <div className="header-title-container">
            <div className="header-title">
                <h3>Lambda School</h3>
                <a href="https://lambdaschool.com">@LambdaSchool</a>
                <span className="dot"></span>
                <span className="time-stamp">{time.format('Do MMM')}</span>
            </div>
            <HeaderContent />
        </div>
    );
};

export default HeaderTitle;