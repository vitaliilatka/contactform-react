const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const dbUri = process.env.DB_URI;
const app = express();
const PORT = process.env.PORT || 5000;

//Connecting to MongoDB
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
//Creating Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ nessage: 'Use POST method to add a contact' });
});

app.post('/add-contact', async (req, res) => {
    const { name, phone, email } = req.body;

    try {
        //Creating new Contact in Database
        const newContact = new Contact({ name, phone, email });
        await newContact.save();
        console.log('Recieved data:', { name, phone, email });
        console.log('Contact added:', new Contact);
        //responsing to client
        res.status(200).json({ message: 'form added succesfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error: Unable to add form' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});