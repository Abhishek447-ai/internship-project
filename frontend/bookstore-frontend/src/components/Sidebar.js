import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        background: "#0f4c5c",
        color: "white",
      }}
    >
      
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6">Welcome</Typography>
        <Typography>Admin</Typography>
      </Box>

      
      <List>
  <ListItem button onClick={() => navigate("/dashboard")}>
    <ListItemText primary="Home" />
  </ListItem>

  <ListItem button onClick={() => navigate("/books")}>
    <ListItemText primary="Browse Books" />
  </ListItem>

  <ListItem>
    <ListItemText primary="Cart" />
  </ListItem>

  <ListItem>
    <ListItemText primary="Orders" />
  </ListItem>
</List>
    </Box>
  );
}

export default Sidebar;
