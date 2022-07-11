import React from "react";

function Project() {
    return (
        <section className="folio-pics">
            <div className="row">
                <div className="column">
                    <div className="img-wrap">
                        <img className="img-img" src={require('../../FS_GGSS.png')} alt="grade-gatsby" />
                        <div className="img-overlay img-overlay--blur">
                            <a href="https://grade-gatsby.herokuapp.com/" target="_blank" rel="norefferer noopener" className="click" >
                                <h1 className="img-title">The Grade Gatsby</h1>
                            </a>
                            <p className="img-desc">A full-stack, team-made application that allows teachers to create student profiles and enter grades for those students. Then allows for those students to access their grades.</p>
                        </div>
                    </div>
                    <div className="img-wrap">
                        <img className="img-img" src={require('../../BE_TPSS.png')} alt="thought-provoking" />
                        <div className="img-overlay img-overlay--blur">
                            <a href="https://github.com/taystarr/thought-provoking" target="_blank" rel="norefferer noopener" className="click" >
                                <h1 className="img-title">Thought Provoking</h1>
                            </a>
                            <p className="img-desc">A backend social media application that allows the user to create 'thoughts', add comments, and add friends using MongoDB and Mongoose.</p>
                        </div>
                    </div>
                    <div className="img-wrap">
                    
                        <img className="img-img" src={require('../../FE_B&BSS.png')} alt="ballz-booze" />
                        <div className="img-overlay img-overlay--blur">
                            <a href="https://blindsweatyhansolo.github.io/ballzandbooze/" target="_blank" rel="norefferer noopener" className="click" >
                                <h1 className="img-title">Ballz & Booze</h1>
                            </a>
                            <p className="img-desc">A team-made application that allows the user to find NBA games for specified dates and bars in their area to watch the games using APIs to fetch the data.</p>
                        </div>
                    </div>
                </div>
                <div className="column2">
                    <div className="img-wrap">
                        <img className="img-img" src={require('../../BE_e-comss.png')} alt="e-com" />
                        <div className="img-overlay img-overlay--blur">
                            <a href="https://github.com/taystarr/backend-e-commerce" target="_blank" rel="norefferer noopener" className="click" >
                                <h1 className="img-title">Backend E-Commerce</h1>
                            </a>
                            <p className="img-desc">A backend project that uses mySQL to create and modify shop inventory including tags, products, and categories.</p>
                        </div>
                    </div>
                    <div className="img-wrap">
                        <img className="img-img" src={require('../../FE_WDSS.png')} alt="weather-dash-API" />
                        <div className="img-overlay img-overlay--blur">
                            <a href="https://taystarr.github.io/weather-dashboard/" target="_blank" rel="norefferer noopener" className="click" >
                                <h1 className="img-title">Weather Dashboard</h1>
                            </a>
                            <p className="img-desc">A simple weather dashboard using a weather API to look up current and five-day forecast for the city searched.</p>
                        </div>
                    </div>
                    <div className="img-wrap">
                        <img className="img-img" src={require('../../FE_OGportSS.png')} alt="original portfolio" />
                        <div className="img-overlay img-overlay--blur">
                            <a href="https://taystarr.github.io/challenge-2/" target="_blank" rel="norefferer noopener" className="click" >
                                <h1 className="img-title">HTML & CSS Portfolio</h1>
                            </a>
                            <p className="img-desc">Original portfolio created only with HTML and CSS at the beginning of my coding career, a great example of my growth as a web developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;

