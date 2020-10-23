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
                <Card />
                <Card />
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