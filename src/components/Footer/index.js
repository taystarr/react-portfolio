import React from "react";

function Footer () {
    return(
            <footer className="footer">
                <div>
                    <img className="logo-img" src={require('../../github-icon.png')} alt="github-logo" />
                    <img className="logo-img2" src={require('../../linkedin-logo.png')} alt="linkedin-logo" />
                </div>
            </footer>
    );
}

export default Footer;