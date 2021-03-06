import React from 'react';
import './style/style.css'

export default function Sidebar() {
    return (
        <header className="side-header">
            <div className="logo-rectangle">
                <a href="/"><svg Style="width:26px;height:30px;display:inline-block;" className="logo-word" width="26" height="30" viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M35.4062 1.0625V5.90625L29.9375 7.3125C30.9375 8.875 31.4375 10.625 31.4375 12.5625C31.4375 16.3125 30.125 19.2396 27.5 21.3438C24.8958 23.4271 21.2708 24.4688 16.625 24.4688L14.9062 24.375L13.5 24.2188C12.5208 24.9688 12.0312 25.8021 12.0312 26.7188C12.0312 28.0938 13.7812 28.7812 17.2812 28.7812H23.2188C27.0521 28.7812 29.9688 29.6042 31.9688 31.25C33.9896 32.8958 35 35.3125 35 38.5C35 42.5833 33.2917 45.75 29.875 48C26.4792 50.25 21.5938 51.375 15.2188 51.375C10.3438 51.375 6.61458 50.5208 4.03125 48.8125C1.46875 47.125 0.1875 44.75 0.1875 41.6875C0.1875 39.5833 0.84375 37.8229 2.15625 36.4062C3.46875 34.9896 5.39583 33.9792 7.9375 33.375C6.95833 32.9583 6.10417 32.2812 5.375 31.3438C4.64583 30.3854 4.28125 29.375 4.28125 28.3125C4.28125 26.9792 4.66667 25.875 5.4375 25C6.20833 24.1042 7.32292 23.2292 8.78125 22.375C6.94792 21.5833 5.48958 20.3125 4.40625 18.5625C3.34375 16.8125 2.8125 14.75 2.8125 12.375C2.8125 8.5625 4.05208 5.61458 6.53125 3.53125C9.01042 1.44792 12.5521 0.40625 17.1562 0.40625C18.1354 0.40625 19.2917 0.5 20.625 0.6875C21.9792 0.854167 22.8438 0.979167 23.2188 1.0625H35.4062ZM8.4375 40.9375C8.4375 42.25 9.0625 43.2812 10.3125 44.0312C11.5833 44.7812 13.3542 45.1562 15.625 45.1562C19.0417 45.1562 21.7188 44.6875 23.6562 43.75C25.5938 42.8125 26.5625 41.5312 26.5625 39.9062C26.5625 38.5938 25.9896 37.6875 24.8438 37.1875C23.6979 36.6875 21.9271 36.4375 19.5312 36.4375H14.5938C12.8438 36.4375 11.375 36.8438 10.1875 37.6562C9.02083 38.4896 8.4375 39.5833 8.4375 40.9375ZM11.9062 12.5C11.9062 14.3958 12.3333 15.8958 13.1875 17C14.0625 18.1042 15.3854 18.6562 17.1562 18.6562C18.9479 18.6562 20.2604 18.1042 21.0938 17C21.9271 15.8958 22.3438 14.3958 22.3438 12.5C22.3438 8.29167 20.6146 6.1875 17.1562 6.1875C13.6562 6.1875 11.9062 8.29167 11.9062 12.5Z" fill="white" />
                </svg>
                </a>
            </div>
            <div className="side-header-menu">
                <a href="/" className="side-header-menu-item">
                    <span>
                        <svg width="18" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15.2222C21 15.6937 20.7893 16.1459 20.4142 16.4793C20.0391 16.8127 19.5304 17 19 17H3C2.46957 17 1.96086 16.8127 1.58579 16.4793C1.21071 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.21071 1.8541 1.58579 1.5207C1.96086 1.1873 2.46957 1 3 1H8L10 3.66667H19C19.5304 3.66667 20.0391 3.85397 20.4142 4.18737C20.7893 4.52076 21 4.97295 21 5.44444V15.2222Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </a>
                <a href="/" className="side-header-menu-item">
                    <span>
                        <svg width="60" height="60" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className>
                            <g filter="url(#filter0_d)">
                                <rect x="10" y="6" width="54" height="54" rx="10" fill="white" />
                            </g>
                            <path d="M27 33V42H31V33H27Z" fill="#C1EDFF" stroke="#00B2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M43 28V42H47V28H43Z" fill="#C1EDFF" stroke="#00B2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M35 24V42H39V24H35Z" fill="#C1EDFF" stroke="#00B2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <filter id="filter0_d" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="5" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </span></a>
                <a href="/" className="side-header-menu-item">
                    <span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </span>
                </a>
                <a href="/" className="side-header-menu-item">
                    <span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 2V9H20" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </a>
            </div>
            <div Style="position:fixed; bottom: 0;left: 0;">
                <span >
                    <svg width="64" height="1" viewBox="0 0 100 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="100" y2="0.5" stroke="#494E67" />
                    </svg>
                </span>
                <div className="side-header-menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </header>
    );
}