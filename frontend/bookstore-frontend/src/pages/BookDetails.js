import { useParams } from "react-router-dom";
import books from "../data/books";
import {
  Container,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function BookDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book not found</h2>;

  const handleAdd = () => {
    addToCart(book);
    setOpen(true); 
  };

  return (
    <Container sx={{ mt: 4 }}>
      <img
        src={book.image}
        alt={book.title}
        width="200"
        style={{ borderRadius: "10px" }}
      />

      <Typography variant="h4" mt={2}>
        {book.title}
      </Typography>
      <Typography>{book.author}</Typography>
      <Typography>₹{book.price}</Typography>
      <Typography>⭐ {book.rating}</Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleAdd}
      >
        Add to Cart
      </Button>

      
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Book added successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
