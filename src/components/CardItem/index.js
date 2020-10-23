import React from 'react';
import './style/style.css'
import Card from "../Card/index"

export default function CardItem() {
    return (

        <div className="cardItem">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}