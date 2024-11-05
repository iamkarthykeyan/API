import express from "express";
import { ItemCreate, ItemDelete, ItemIndex, ItemUpdate } from "../controllers/items.controller.js";

const router = express.Router();

// READ
router.get('/', ItemIndex);

// CREATE
router.post('/', ItemCreate);

// UPDATE
router.put('/:id', ItemUpdate);

// DELETE
router.delete('/:id', ItemDelete);

export default router;