package com.bookstore.onlinebookstore.controller;

import com.bookstore.onlinebookstore.service.BookService;
import com.bookstore.onlinebookstore.model.Book;
import com.bookstore.onlinebookstore.dto.BookDTO;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    // 🔥 SEARCH
    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String name) {
        return service.searchBooks(name);
    }

    // 🔥 FILTER
    @GetMapping("/filter")
    public List<Book> filterBooks(
            @RequestParam Double minPrice,
            @RequestParam Double maxPrice) {
        return service.filterByPrice(minPrice, maxPrice);
    }

    // 🔥 PAGINATION
    @GetMapping("/page")
    public Page<Book> getBooks(Pageable pageable) {
        return service.getBooks(pageable);
    }

    // ✅ GET ALL
    @GetMapping
    public List<Book> getBooks() {
        return service.getAllBooks();
    }

    // ✅ GET BY ID
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Integer id) {
        return service.getBookById(id);
    }

    // ✅ ADD BOOK (THIS WAS MISSING)
    @PostMapping
    public Book addBook(@RequestBody @Valid BookDTO dto) {

        Book book = new Book();
        book.setName(dto.getName());
        book.setAuthor(dto.getAuthor());
        book.setPrice(dto.getPrice());

        return service.addBook(book);
    }

    // ✅ UPDATE BOOK
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody Book newBook) {
        return service.updateBook(id, newBook);
    }


    // ✅ DELETE BOOK
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Integer id) {
        service.deleteBook(id);
        return "Deleted!";
    }
}