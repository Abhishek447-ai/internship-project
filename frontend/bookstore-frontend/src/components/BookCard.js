import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    addToCart(book);
    setOpen(true); 
  };

  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia component="img" height="220" image={book.image} />

        <CardContent>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2">{book.author}</Typography>
          <Typography>₹{book.price}</Typography>
          <Typography>⭐ {book.rating}</Typography>

          <Button
            variant="contained"
            sx={{ mt: 1, mr: 1 }}
            onClick={handleAdd}
          >
            ADD
          </Button>

          <Button
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => navigate(`/book/${book.id}`)}
          >
            DETAILS
          </Button>
        </CardContent>
      </Card>

      
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
    </>
  );
}
