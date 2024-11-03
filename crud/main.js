import express from 'express';

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.json({ msg: "Hey there! Whatsapp?" });
});

// Http methods

// READ
app.get('/items', () => {

});

// CREATE
app.post('/items', () => {

});

// UPDATE
app.put('/items/:id', () => {

});

// DELETE
app.delete('/items/:id', () => {

});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});