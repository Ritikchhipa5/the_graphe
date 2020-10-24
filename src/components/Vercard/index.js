import React from 'react';
import './style/style.css';
import Ver from './Ver'
import Ver2 from './Ver2'
import Ver3 from './Ver3'
import Card from "../Card/index"
export default function Vercard() {
    return (
        <div Style="display: inline-flex;margin-bottom: 31px;     background: #EBEBEB;">
            <div Style="display:flex; flex-direction:column;margin-left:80px">
                <Ver3 />
                <div Style="display:flex;flex-direction:row;margin-left: 25px;">
                    <Card logo={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 21H17M6 2H18V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V2Z" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 17V21" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 5V11H5C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5H6ZM18 11V5H19C20.6569 5 22 6.34315 22 8C22 9.65685 20.6569 11 19 11H18Z" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    } circle={<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#FFB800" fill-opacity="0.07" />
                    </svg>
                    } mark={"Lections left"} num={25} />
                    <Card logo={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8FF" stroke-width="2" stroke-linecap="square" />
                        <path d="M12 5V12L16 16" stroke="#4CB8FF" stroke-width="2" stroke-linecap="square" />
                    </svg>
                    } circle={<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#4CB8FF" fill-opacity="0.07" />
                    </svg>
                    } mark={"Hours spent on lections "} num={139} />
                </div>
            </div>
            <div className='vercard'>
                <div className="vercard-top ">
                    <div className="vercard-top-border">
                        <span className="f-small" Style="color:black">Students by average mark</span>
                        <div>
                            <div className="f-small">Descending
                                <span>
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 8L10 12L14 8" stroke="#B0B9C7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                        <Ver />
                    </div>
                </div>
                <div className="vercard-top">
                    <div className="vercard-top-border v-1">
                        <span className="f-small" Style="color:black;margin-left: 25px;">Students by type of studying</span>
                    </div>
                    <div>
                        <div className="ver-box"></div>
                        <div><Ver2 /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}