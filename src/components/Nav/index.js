import React from 'react';

function Nav(props) {

    // const {
    //     projectSelected,
    //     setProjectSelected
    // } = props;

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href='/'>
                    Taylor's Portfolio
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-1 active'>
                        <a href='/about'>
                            About Me
                        </a>
                    </li>
                    <li className='active'>
                        {/* <link to="/project"> */}
                        <a href='/portfolio'>Portfolio</a>
                        {/* </link> */}
                    </li>
                    <li className='active'>
                        <a href='/contact'>Contact</a>
                    </li>
                    <li className='active'>
                        <a href='/resume'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;