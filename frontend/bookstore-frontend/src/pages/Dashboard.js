import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const books = [
  {
    title: "The Alchemist",
    price: "₹299",
    img: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    title: "Atomic Habits",
    price: "₹450",
    img: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    price: "₹350",
    img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    title: "Ikigai",
    price: "₹399",
    img: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
  },
];

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        📚 Explore Books
      </Typography>

      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={book.img}
              />

              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography color="green">{book.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}