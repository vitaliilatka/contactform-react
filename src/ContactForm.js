import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //submitting to server - to do later
        const data = { name, phone, email };
        setMessage('Sending data...');
        console.log(data);
        //later to add logic for sending data to server
        //after successfull sending - need to reset form and get message
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </label>
            <br />
            <label>
                Phone:
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </label>
            <br />
            <label>
                Email:
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <br />
            <button type='submit'>Add Contact</button>
            <p>{message}</p>
        </form>
    );
};

export default ContactForm;