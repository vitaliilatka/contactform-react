const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/add-contact', (req, res) => {
    const { name, phone, email } = req.body;
    //here will be logic of contactAdding to mongodb and getting ID
    console.log('Recieved data:', { name, phone, email });
    //responsing to client
    res.status(200).json({ message: 'form added succesfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});