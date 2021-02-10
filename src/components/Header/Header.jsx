import React from 'react';
import { Fade } from 'react-reveal';


const Header = ({ title, light }) => {
    const color = light ? 'light' : 'dark';

    return (
        <div className='header'>
            <header className={color}>{title}</header>
        </div>
    )
}


export default Header;