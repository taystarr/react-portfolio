import React from "react";

function Resume () {
    return (
        <body className="resume">
            <div className="row">
                <div className="column">
                    <h2>
                        Front-end Proficiencies
                    </h2>
                    <ul>
                        <li className="list">
                            HTML
                        </li>
                        <li className="list">
                            CSS
                        </li>
                        <li className="list">
                            JavaScript
                        </li>
                        <li className="list">
                            JQuery
                        </li>
                        <li className="list">
                            React
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h2>
                        Back-end Proficiencies   
                    </h2>
                    <ul>                
                        <li className="list">
                            APIs
                        </li>
                        <li className="list">
                            Node
                        </li>
                        <li className="list">
                            Express
                        </li>
                        <li className="list">
                            MySQL & Sequelize
                        </li>
                        <li className="list">
                            MongoDB & Mongoose
                        </li>
                        <li className="list">
                            REST
                        </li>
                        <li className="list">
                            GraphQL
                        </li>    
                    </ul>
                </div>
            </div>
            <h3 className="resume-txt">
                Click <a className="light-txt" href='https://docs.google.com/document/d/1ElYjKFoo_eK9jW_VAaK9I-4yA5SjcSrLUoiV3Fp98MI/edit?usp=sharing' target="_blank" rel="norefferer noopener">here</a> to view my resume!
            </h3>
        </body>
    )
}

export default Resume;