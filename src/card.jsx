import React from 'react';
import "./card.css";

function Card({ title, discription }) {
    return (
        <div className="Card">
            <h3>{title}</h3>
            <p>{discription}</p>
        </div>
    );

}

export default Card;