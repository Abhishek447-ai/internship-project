import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  TextField,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("COD");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (!name || !address || !phone) {
      alert("Please fill all details");
      return;
    }

    alert("✅ Order placed successfully!");

    setCart([]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        Checkout & Payment
      </Typography>

      
      {cart.map((item, index) => (
        <Card key={index} sx={{ mb: 2, p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: 60, height: 90, marginRight: 10 }}
            />
            <Box>
              <Typography>{item.title}</Typography>
              <Typography>₹{item.price}</Typography>
            </Box>
          </Box>
        </Card>
      ))}

      <Typography variant="h5">Total: ₹{total}</Typography>

      
      <Card sx={{ mt: 3, p: 3 }}>
        <Typography variant="h6">Shipping Details</Typography>

        <TextField
          fullWidth
          label="Name"
          sx={{ mt: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Address"
          sx={{ mt: 2 }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          fullWidth
          label="Phone"
          sx={{ mt: 2 }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Card>

      
      <Card sx={{ mt: 3, p: 3 }}>
        <Typography variant="h6">Payment Method</Typography>

        <RadioGroup
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
          <FormControlLabel value="CARD" control={<Radio />} label="Card" />
          <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />
        </RadioGroup>
      </Card>

      
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleOrder}
      >
        Place Order
      </Button>
    </Container>
  );
}
