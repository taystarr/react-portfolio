import React from "react";
import githugLogo from '../../github-icon.png'
import linkedinLogo from '../../linkedin-logo.png'

function Footer () {
    return(
            <footer className="footer">
                <div>
                    <a href="https://github.com/taystarr" target="_blank" rel="norefferer noopener">
                        <img className="logo-img" src={githugLogo} alt="github-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/taylor-roberts-a9812aa9/" target="_blank" rel="norefferer noopener">
                        <img className="logo-img2" src={linkedinLogo} alt="linkedin-logo" />
                    </a>
                </div>
            </footer>
    );
}

export default Footer;