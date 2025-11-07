package com.SkinSync.backend.controller;

import com.SkinSync.backend.model.Product;
import com.SkinSync.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // GET all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // GET one product by id
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }
    // GET recommendations
    @GetMapping("/recommendations")
    public List<Product> getRecommendations(
            @RequestParam String skinType,
            @RequestParam String skinCondition
    ) {
        return productRepository.findBySkinTypeIgnoreCaseAndSkinConditionIgnoreCase(skinType, skinCondition);
    }
}