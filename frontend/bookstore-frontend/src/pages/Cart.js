import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        🛒 Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>No items in cart</Typography>
      ) : (
        <>
          
          {cart.map((item, index) => (
            <Card
              key={index}
              sx={{
                mb: 2,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 80,
                    height: 120,
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "15px",
                  }}
                />

                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography color="text.secondary">
                    ₹{item.price}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                REMOVE
              </Button>
            </Card>
          ))}

          
          <Card sx={{ mt: 3, p: 2, borderRadius: 2 }}>
            <Typography variant="h5">
              Total: ₹{total}
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => navigate("/checkout")} 
            >
              PROCEED TO CHECKOUT
            </Button>
          </Card>
        </>
      )}
    </Container>
  );
}
