import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext); 
  

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          📚 BookStore
        </Typography>

        <Button color="inherit" href="/home">
          Home
        </Button>

        <Button color="inherit" href="/cart">
          Cart
        </Button>

        
        <Box sx={{ position: "relative", ml: 2 }}>
          <span
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: 12,
            }}
          >
            {cart.length}
          </span>
          🛒
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
