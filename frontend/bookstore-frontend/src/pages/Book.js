import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
  TextField
} from "@mui/material";

export default function Book() {
  const [books, setBooks] = useState([]);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const [editId, setEditId] = useState(null);

  const loadBooks = () => {
    fetch("http://127.0.0.1:8080/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // ✅ ADD BOOK
  const addBook = () => {
    fetch("http://127.0.0.1:8080/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        author,
        price: parseFloat(price)
      })
    }).then(() => {
      loadBooks();
      clearForm();
    });
  };

  // ✅ DELETE BOOK
  const deleteBook = (id) => {
    fetch(`http://127.0.0.1:8080/books/${id}`, {
      method: "DELETE"
    }).then(() => loadBooks());
  };

  // ✅ START EDIT
  const startEdit = (book) => {
    setEditId(book.id);
    setName(book.name);
    setAuthor(book.author);
    setPrice(book.price);
  };

  // ✅ UPDATE BOOK
  const updateBook = () => {
    fetch(`http://127.0.0.1:8080/books/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        author,
        price: parseFloat(price)
      })
    }).then(() => {
      loadBooks();
      clearForm();
    });
  };

  // ✅ CLEAR FORM
  const clearForm = () => {
    setName("");
    setAuthor("");
    setPrice("");
    setEditId(null);
  };

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Books
      </Typography>

      {/* FORM */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={2}>
          {editId ? "Edit Book" : "Add Book"}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          {editId ? (
            <Button variant="contained" color="warning" onClick={updateBook}>
              Update
            </Button>
          ) : (
            <Button variant="contained" onClick={addBook}>
              Add
            </Button>
          )}

          {editId && (
            <Button variant="outlined" onClick={clearForm}>
              Cancel
            </Button>
          )}
        </Box>
      </Paper>

      {/* TABLE */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>₹{book.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={() => startEdit(book)}
                  >
                    Edit
                  </Button>

                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}