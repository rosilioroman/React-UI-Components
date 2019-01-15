import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content">
            <h3 className="card-text-heading">Get started with React</h3>
            <p className="card-text-content">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a className="card-text-content" href="https://reactjs.org">reactjs.org</a>
        </div>
    );
}

export default CardContent;