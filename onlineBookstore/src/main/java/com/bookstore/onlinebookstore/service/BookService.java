package com.bookstore.onlinebookstore.service;

import com.bookstore.onlinebookstore.model.Book;
import com.bookstore.onlinebookstore.repository.BookRepository;

import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class BookService {

    private final BookRepository repository;

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    // PAGINATION + SORT
    public Page<Book> getBooks(Pageable pageable) {
        return repository.findAll(pageable);
    }

    // GET ALL
    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    // ADD
    public Book addBook(Book book) {
        return repository.save(book);
    }

    // DELETE
    public void deleteBook(Integer id) {
        repository.deleteById(id);
    }

    // UPDATE
    public Book updateBook(Integer id, Book newBook) {
        return repository.findById(id).map(book -> {
            book.setName(newBook.getName());
            book.setAuthor(newBook.getAuthor());
            book.setPrice(newBook.getPrice());
            return repository.save(book);
        }).orElseThrow(() -> new RuntimeException("Book not found"));
    }

    // GET BY ID
    public Book getBookById(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));
    }

    // SEARCH
    public List<Book> searchBooks(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    // 🔥 FILTER
    public List<Book> filterByPrice(Double min, Double max) {
        return repository.findByPriceBetween(min, max);
    }

}