const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = 'mongodb+srv://ilomask:1234@cluster0.olb0cun.mongodb.net/';

//Connecting to MongoDB
mongoose.connect(mongoURI, {
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

app.post('/add-contact', async (req, res) => {
    const { name, phone, email } = req.body;
    console.log('Recieved data:', { name, phone, email });

    try {
        //Creating new Contact in Database
        const newContact = new Contact({ name, phone, email });
        await newContact.save();
        //responsing to client
        res.status(200).json({ message: 'form added succesfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error: Unable to add form' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});