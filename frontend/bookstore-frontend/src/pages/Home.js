import books from "../data/books";
import { Grid, Container, TextField } from "@mui/material";
import BookCard from "../components/BookCard";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <TextField
        fullWidth
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={3}>
        {filteredBooks.map((book) => (
          <Grid item xs={12} sm={6} md={3} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}