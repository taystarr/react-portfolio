import React from "react";

function Footer () {
    return(
            <footer className="footer">
                <div>
                    <a href="https://github.com/taystarr" target="_blank" rel="norefferer noopener">
                        <img className="logo-img" src={require('../../github-icon.png')} alt="github-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/taylor-roberts-a9812aa9/" target="_blank" rel="norefferer noopener">
                        <img className="logo-img2" src={require('../../linkedin-logo.png')} alt="linkedin-logo" />
                    </a>
                </div>
            </footer>
    );
}

export default Footer;