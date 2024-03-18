const Router = require('express')
const booksModels = require('../models/books.models')

const router = Router();

router.get("/", async (req, res) => {
  try {
    const books = await booksModels.find();
    if (books.length === 0)
      return res.status(404).json({ message: "No books found" });
    res.json(books);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(400).json({ message: "No id provided" });
    const book = await booksModels.findById(id);
    res.json(book);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  const { title, author, genre, publicacion_date } = req.body;
  try {
    if (!title || !author || !genre || !publicacion_date)
      return res.status(400).json({ message: "No data provided" });
    const newBook = new booksModels({ title, author, genre, publicacion_date });
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, genre, publicacion_date } = req.body;
  try {
    if (!id) return res.status(400).json({ message: "No id provided" });
    const book = await booksModels.findByIdAndUpdate(id, {
      title,
      author,
      genre,
      publicacion_date,
    });

    res.json(book);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.status(400).json({ message: "No id provided" });
    const book = await booksModels.findByIdAndDelete(id);
    res.json(book);
  } catch (error) {}
});

module.exports=router;
