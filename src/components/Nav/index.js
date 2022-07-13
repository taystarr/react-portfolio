import React from 'react';

function Nav({updatePage}) {

    return (
        <header className='flex-row px-1'>
            <h2 className="home-btn">
                <a href='#about' onClick={() => updatePage('about')}>
                    Taylor Roberts
                </a>
            </h2>
            <nav>
                <ul className='flex-row nav-list'>
                    <li className='mx-1'>
                        <a className='active' href='#about' onClick={() => updatePage('about')}>
                            About Me
                        </a>
                    </li> 
                    <li>
                        <a className='active' href='#portfolio' onClick={() => updatePage('portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a className='active' href='#resume' onClick={() => updatePage('resume')}>Resume</a>
                    </li>
                    <li>
                        <a className='active' href='#contact' onClick={() => updatePage('contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;