import React from 'react';
import './style/style.css';

export default function Ver() {
    return (
        <div>
            <div className='ver-item f-small'>
                <div Style=" display: flex; "><span><a href="/"><img src={process.env.PUBLIC_URL + 'image/user.jpg'} alt='user' className="user-img"></img></a></span>
                    <div Style="align-self: center;">Annette Watson</div></div>
                <span Style="color:black;
    align-self: center;">9.3</span>
            </div>
        </div>
    );
}
