import React from 'react';
import './style/style.css'


export default function Card(props) {
    return (
        <div className="card">
            <div className="card-container">
                <div> <span>
                    <svg width="60" height="60" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* <circle cx="35" cy="35" r="35" fill="#713BDB" fill-opacity="0.05" /> */}
                        {props.circle}
                    </svg>
                </span>
                    <span className='card-iteam-2'>
                        {props.logo}
                    </span></div>
                <div className="card-text">
                    <span Style="font-size: 25px; font-weight: bold;margin-bottom: 10px;">{props.num}</span>
                    <span Style="color:#a6acbe">{props.mark}</span>
                </div>
            </div>
        </div>
    );
}