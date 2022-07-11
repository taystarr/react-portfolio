import React, { useState } from "react";
import { validateEmail } from '../../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        const subjectLine = 'Mail from Online Portfolio';
        const mailTo = `mailto:tstarrroberts@gmail.com?subject=${subjectLine}&body=${message}`;
    
        if ((name, email, message)) {
            window.open(mailTo, 'email');
        }
    }

    return (
        <section>
            <h1 className="contact-title">Contact me</h1>
            <form action="mailto:tstarrroberts@gmail.com" method="POST" className='contact-form' id='contact-form' onSubmit={handleSubmit}>
                {/* name */}
                <div>
                    <label className='contact-label' htmlFor='name'>Name:</label>
                    <input className='contact-form' type='text' defaultValue={name} onBlur={handleChange} name='name' />
                </div>
                {/* email */}
                <div>
                    <label className='contact-label' htmlFor="email">Email address:</label>
                    <input className='contact-form' type='email' defaultValue={email} name='email' onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label className='contact-label' htmlFor="message">Message:</label>
                    <textarea className='contact-text' name="message" defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className='contact-btn' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;