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

            const sendData = await response.json();
            console.log(sendData);
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
        <div className='form-container'>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='form-input'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                >
                </input>
                <br />
                <input
                    className='form-input'
                    type='number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone number'
                >
                </input>
                <br />
                <input
                    className='form-input'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                >
                </input>
                <br />
                <button
                    className='form-button'
                    type='submit'
                >
                    Add Contact
                </button>
                <p className='form-message'>{message}</p>
            </form>
        </div>
    );
};

export default ContactForm;