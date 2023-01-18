
// import React, { useState } from 'react';


// const ContactUS = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.taget.value });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type='text' name='name' value={formData.name}
//                     onChange={handleChange} />
//             </label>
//             <label>
//                 Email:
//                 <input type='email' name='email' value={formData.email}
//                     onChange={handleChange} />
//             </label>
//             <label>
//                 Message:
//                 <textarea name='message' value={formData.message}
//                     onChange={handleChange} />
//             </label>
//             <button type='submit'>Submit</button>
//         </form>
//     );
// };
// export default ContactUS;


import React, { useState } from 'react';
import {validateEmail } from '../../Utils/helpers';

function ContactUs() {
  
  const [email, setEmail] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log({inputType, inputValue});

    
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
    alert(`Cheers ${sender}, thanks for the message.`)
  };

  return (
    <section className='container-fluid contact'>
      <h2 id="contact-title">Contact Me</h2>
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
            name="name"
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
              placeholder='Please Send Me a Message'
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
  )
   
  
}

export default ContactUs;