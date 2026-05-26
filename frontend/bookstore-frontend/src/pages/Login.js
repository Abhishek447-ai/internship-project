import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  Box
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      
      let data;
      try {
        data = await res.json();
      } catch {
        data = await res.text();
      }

      console.log("LOGIN RESPONSE:", data);

      const token =
        typeof data === "string" ? data : data.token;

      if (!token) {
        alert("Login failed");
        return;
      }

      
      sessionStorage.setItem("token", token);

      
      window.location.href = "/home";

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      />

      
      <Card
        sx={{
          p: 4,
          width: 320,
          borderRadius: 3,
          zIndex: 1,
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
        }}
      >
        <Typography variant="h5" mb={2} fontWeight="bold">
          Login
        </Typography>

        <form onSubmit={login}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            LOGIN
          </Button>
        </form>
      </Card>
    </Box>
  );
}
