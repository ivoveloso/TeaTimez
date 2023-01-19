import React, { useState } from 'react';
import { validateEmail } from '../../src/util/helpers';

function ContactUs() {

    const [email, setEmail] = useState('');
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        console.log({ inputType, inputValue });


        if (inputType === 'sender') {
            setSender(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !sender) {
            setErrorMessage('Email or name is invalid');
            return;
        }
        setSender('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
        alert(`Thankyou ${sender} for reaching out to us.`);
    };

    return (
        <section className='container-fluid text-center'>
            <h2 id="contact-title">Contact Us</h2>
            <div className='row contact-row' data-contact="hide">
                <form
                    action='mailto:'
                    method='POST'
                    encType='multipart/form-data'
                    id='contact-form'
                >
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            value={sender}
                            type="text"
                            className='form-control'
                            name="sender"
                            onChange={handleInputChange}
                            id="full-name"
                            placeholder='Name'
                            required
                        />

                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email:</label>
                        <input
                            value={email}
                            type="email"
                            className='form-control'
                            name='email'
                            onChange={handleInputChange}
                            id="email"
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            value={message}
                            className='form-control'
                            name='message'
                            onChange={handleInputChange}
                            id="message"
                            placeholder='Please Send us a Message'
                            rows="4"
                            cols=""
                            required
                        ></textarea>
                    </div>
                    <button type='submit'
                        id="email-btn"
                        className='subBtn'
                        onClick={handleFormSubmit}
                    >submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    );


}

export default ContactUs;