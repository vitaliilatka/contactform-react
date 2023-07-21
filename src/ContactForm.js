import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //submitting to server - to do later
        const data = { name, phone, email };
        setMessage('Sending data...');
        console.log(data);

        try {
            const response = await fetch('http://localhost:5000/add-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json',
                },
                body: JSON.stringify({ name, phone, email }),
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setMessage('Form added successfully');
                setName('');
                setPhone('');
                setEmail('');
            } else {
                setMessage('Error: Unable to add form');
            }
        } catch (error) {
            setMessage('Error: Unable to connect to server');
        }
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