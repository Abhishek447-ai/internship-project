import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <Box sx={{ flexGrow: 1 }}>

        {/* TOP NAVBAR */}
        <AppBar position="static" sx={{ background: "#0f4c5c" }}>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              Librarian Control Panel
            </Typography>

            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* MAIN CONTENT */}
        <Box sx={{ p: 3, background: "#f4f6f8", minHeight: "100vh" }}>
          {children}
        </Box>

      </Box>
    </Box>
  );
}

export default Layout;