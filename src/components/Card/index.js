import React from 'react';
import './style/style.css'


export default function Card() {
    return (
        <div className="card">
            <div className="card-container">
                <div> <span>
                    <svg width="60" height="60" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#713BDB" fill-opacity="0.05" />
                    </svg>
                </span>
                    <span className='card-iteam-2'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" Style='align-items: center;'>
                            <path d="M1 19C1 15.625 5.5 15.625 7.75 13.375C8.875 12.25 5.5 12.25 5.5 6.625C5.5 2.87538 6.99962 1 10 1C13.0004 1 14.5 2.87538 14.5 6.625C14.5 12.25 11.125 12.25 12.25 13.375C14.5 15.625 19 15.625 19 19" stroke="#00B2FF" stroke-width="2" stroke-linecap="square" />
                        </svg>
                    </span></div>
                <div className="card-text">
                    <span Style="font-size: 25px; font-weight: bold;margin-bottom: 10px;">62</span>
                    <span Style="color:#a6acbe">Students</span>
                </div>
            </div>
        </div>
    );
}