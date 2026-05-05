package com.bookstore.onlinebookstore.repository;

import com.bookstore.onlinebookstore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {

    // SEARCH
    List<Book> findByNameContainingIgnoreCase(String name);

    // 🔥 FILTER BY PRICE
    List<Book> findByPriceBetween(Double minPrice, Double maxPrice);
}