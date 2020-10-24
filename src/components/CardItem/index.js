import React from 'react';
import './style/style.css'
import Card from "../Card/index"

export default function CardItem() {
    return (

        <div className="cardItem">
            <Card logo={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" Style='align-items: center;'>
                <path d="M1 19C1 15.625 5.5 15.625 7.75 13.375C8.875 12.25 5.5 12.25 5.5 6.625C5.5 2.87538 6.99962 1 10 1C13.0004 1 14.5 2.87538 14.5 6.625C14.5 12.25 11.125 12.25 12.25 13.375C14.5 15.625 19 15.625 19 19" stroke="#00B2FF" stroke-width="2" stroke-linecap="square" /></svg>}
                circle={<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#713BDB" fill-opacity="0.05" />
                </svg>
                } num={62}mark={"Students "}/>
            <Card logo={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 16L8 11" stroke="#21B8C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z" stroke="#21B8C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 16C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16Z" stroke="#21B8C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 14L21 8M10 11L13 14L10 11Z" stroke="#21B8C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            } circle={<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#33D69F" fill-opacity="0.07" />
            </svg>
            } num={6.8}mark={"Average mark " } />
            <Card logo={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7L9 13L13 9L20.405 16.405" stroke="#FF4C61" stroke-width="2" stroke-linecap="square" />
                <path d="M20.405 16.405L21 17" stroke="#FF4C61" stroke-width="2" stroke-linecap="round" />
                <path d="M21 14V17H18" stroke="#FF4C61" stroke-width="2" stroke-linecap="square" />
            </svg>
            } circle={<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#FF4C61" fill-opacity="0.05" />
            </svg>
            } num={9} mark={"Underperforming students " }/>
            <Card logo={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3V21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7956 5 18V6C5 5.20435 5.31607 4.44129 5.87868 3.87868C6.44129 3.31607 7.20435 3 8 3H19Z" stroke="#4CB8FF" stroke-width="2" stroke-linecap="square" />
                <path d="M5 18C5 17.2044 5.31607 16.4413 5.87868 15.8787C6.44129 15.3161 7.20435 15 8 15H19" stroke="#4CB8FF" stroke-width="2" stroke-linecap="square" />
            </svg>
            } circle={<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#4CB8FF" fill-opacity="0.07" />
            </svg>
            } num={"83%"} mark={"Finished homeworks"}/>
        </div>
    );
}