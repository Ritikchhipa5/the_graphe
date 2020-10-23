import React from 'react';
import './style/style.css';
export default function Ver3() {
    return (
        <div className="ver3card-top ">
            <div className="ver3card-top-border">
                <span className="f-small" Style="color:black">Students by average mark</span>
                <div Style="display:flex">
                    <div Style="margin-right: 26px;"><span><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#00B2FF" />
                    </svg>
                    </span>Applied</div>
                    <div Style="margin-right: 26px;" ><span><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#FF7A00" />
                    </svg>
                    </span>Left</div>
                </div>
            </div>
        </div>
    );
}