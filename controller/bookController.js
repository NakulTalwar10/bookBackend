const books = require('../models/bookModels');

module.exports.addBooks = async (req, resp) => {
  try {
    const { author, description, image, bookName, ISBN, publishYear } = req.body;
    const book = new books({ author, description, image, bookName, ISBN, publishYear });
    await book.save();
    resp.status(201).json({
      message: "Book added successfully"
    });
  } catch (err) {
    resp.status(500).json({
      error: err
    });
  }
};

module.exports.getBooks = async (req, resp) => {
  try {
    const book = await books.find();
    resp.status(200).json({
      book
    });
  } catch (err) {
    resp.status(500).json({
      error: err
    });
  }
};

module.exports.updateBooks = async (req, resp) => {
  try {
    const book = await books.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (book) {
      resp.status(200).json({
        message: "Book updated successfully"
      });
    } else {
      resp.status(404).json({
        message: "Book not found"
      });
    }
  } catch (err) {
    resp.status(500).json({
      error: err
    });
  }
};

module.exports.deleteBooks = async (req, resp) => {
  try {
    const book = await books.findByIdAndDelete(req.params.id);
    if (book) {
      resp.status(200).json({
        message: "Book deleted successfully"
      });
    } else {
      resp.status(404).json({
        message: "Book not found"
      });
    }
  } catch (err) {
    resp.status(500).json({
      error: err
    });
  }
};
