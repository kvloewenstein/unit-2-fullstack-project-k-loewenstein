package com.SkinSync.backend.controller;

import com.SkinSync.backend.model.UserSavedProduct;
import com.SkinSync.backend.repository.UserSavedProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/saved")
@CrossOrigin(origins = "http://localhost:5173")
public class UserSavedProductController {

    @Autowired
    private UserSavedProductRepository savedProductRepository;

    @GetMapping("/{userId}")
    public List<UserSavedProduct> getSavedProducts(@PathVariable Long userId) {
        return savedProductRepository.findByUserId(userId);
    }

    @PostMapping
    public UserSavedProduct saveProduct(@RequestBody UserSavedProduct savedProduct) {
        return savedProductRepository.save(savedProduct);
    }
}
