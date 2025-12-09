import React from 'react';
import Card from "./card";
import "./CardsContainer.css";

function CardsContainer() {

    const cardData = [
        { title : "Card 1", discription: "This is the first card"},
        { title : "Card 2", discription: "This is the second card"},
        { title : "Card 3", discription: "This is the third card"},
        { title : "Card 4", discription: "This is the fouth card"},
    ];


    return (
        <div className="CardsContainer">
            {cardData.map((item, index) => (
            <Card
                key = {index}
                title = {item.title}
                discription = {item.discription}
                />
        ))}
        </div>
    );
   
}

export default CardsContainer;
