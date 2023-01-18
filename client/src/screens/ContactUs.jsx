import e from "express";
import React, {useState} from "react";


const ContactUS = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.taget.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name}
                onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email}
                onChange={handleChange} />
            </label>
            <label>
                message:
                <textarea name="message" value={formData.message}
                onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ContactUS;