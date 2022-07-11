import React from 'react';

function Nav() {

    return (
        <header className='flex-row px-1'>
            <h2 className="home-btn">
                <a href='/'>
                    Taylor's Portfolio
                </a>
            </h2>
            <nav>
                <ul className='flex-row nav-list'>
                    <CustomLink href='/about'>About Me</CustomLink>
                    <CustomLink href='/portfolio'>Portfolio</CustomLink>
                    <CustomLink href='/contact'>Contact</CustomLink>
                    <CustomLink href='/resume'>Resume</CustomLink>

                    {/* <li className='mx-1'>
                        <a className='active' href='/about'>
                            About Me
                        </a>
                    </li> 
                    <li>
                        <a className='active' href='/portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a className='active' href='/contact'>Contact</a>
                    </li>
                    <li>
                        <a className='active' href='/resume'>Resume</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
   return (
    <li >
        <a className={path === href ? "active" : ""} href={href} {...props}>{children}</a>
    </li>
   )
}

export default Nav;