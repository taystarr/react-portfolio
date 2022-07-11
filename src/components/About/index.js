import React from 'react';
import aboutImage from '../../portfolio.png'

function About() {
    return (
        <section className='about-me'>
            <h1 id='about'>About Me</h1>
            <img src={aboutImage} className='port fade-in' style={{ width: '45%'}} alt='about' />
            <p className='abouttext'>
            Hi! My name is Taylor and I’m a Registered Nurse turned Full-Stack Web Developer. 
            Born and raised in Florida, I’m a lifelong figure skater (yes, in Florida) that enjoys trying 
            new restaurants, going to Nats games with friends, and hanging out with my cat, <a href='https://drive.google.com/file/d/1SSwHWtlHMqZfnaKmVd5cbvqOkBDf5AXQ/view?usp=sharing' target="_blank" rel="norefferer noopener" className='light-txt'>Darren</a>. I recently moved to Washington, DC in the midst of the 
            global pandemic. Throughout the chaos of working in a pediatric ICU, I found solace in 
            experimenting with JavaScript. I soon became enthralled by the language’s challenges and 
            possibilities, which prompted me to take the plunge and enroll in a Full-Stack Web Development 
            Bootcamp through George Washington University. The bootcamp has developed my front-end and 
            back-end skills in CSS, Bootstrap, JavaScript, APIs, Node, mySQL, Sequelize, MongoDB, Mongoose, 
            React, among others. While I enjoy the puzzle that comes with back-end development, I especially 
            appreciate the process of making aesthetic UIs. My hope is to use the skills I’ve learned in the 
            bootcamp to further my front-end knowledge and become a well-rounded full-stack web developer. 
            Thanks for taking a look at my portfolio!</p>
        </section>
    );
}

export default About;