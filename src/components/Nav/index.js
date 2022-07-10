import React from 'react';

function Nav() {
    return (
        <header className='flex-row px-1'>
            <h2>
                <a href='/'>
                    Taylor's Portfolio
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-1'>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;