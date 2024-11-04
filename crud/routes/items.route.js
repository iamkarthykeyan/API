import express from "express";

const router = express.Router();

// READ
router.get('/', (req,res) => {
    res.send("I am read");
});

// CREATE
router.post('/', (req,res) => {
    res.send("I am read");
});

// UPDATE
router.put('/:id', (req,res) => {
    res.send("I am read");
});

// DELETE
router.delete('/:id', (req,res) => {
    res.send("I am read");
});

export default router;