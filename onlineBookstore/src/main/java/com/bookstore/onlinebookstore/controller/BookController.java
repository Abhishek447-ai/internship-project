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

    
    @GetMapping("/search")
    public List<Book> searchBooks(@RequestParam String name) {
        return service.searchBooks(name);
    }

    
    @GetMapping("/filter")
    public List<Book> filterBooks(
            @RequestParam Double minPrice,
            @RequestParam Double maxPrice) {
        return service.filterByPrice(minPrice, maxPrice);
    }

    
    @GetMapping("/page")
    public Page<Book> getBooks(Pageable pageable) {
        return service.getBooks(pageable);
    }

    
    @GetMapping
    public List<Book> getBooks() {
        return service.getAllBooks();
    }

    
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Integer id) {
        return service.getBookById(id);
    }

    
    @PostMapping
    public Book addBook(@RequestBody @Valid BookDTO dto) {

        Book book = new Book();
        book.setName(dto.getName());
        book.setAuthor(dto.getAuthor());
        book.setPrice(dto.getPrice());

        return service.addBook(book);
    }

    
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody Book newBook) {
        return service.updateBook(id, newBook);
    }


    
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Integer id) {
        service.deleteBook(id);
        return "Deleted!";
    }
}
