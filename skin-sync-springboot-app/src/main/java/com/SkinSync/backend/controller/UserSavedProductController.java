package com.SkinSync.backend.controller;

import com.SkinSync.backend.model.Product;
import com.SkinSync.backend.model.User;
import com.SkinSync.backend.model.UserSavedProduct;
import com.SkinSync.backend.repository.ProductRepository;
import com.SkinSync.backend.repository.UserRepository;
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


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    // Bulk save endpoint
    @PostMapping("/bulk")
    public String saveAllProducts(@RequestBody BulkSaveRequest request) {
        User user = userRepository.findById(request.getUserId()).orElse(null);
        if (user == null) return "User not found";

        List<Product> products = productRepository.findAllById(request.getProductIds());

        for (Product product : products) {
            UserSavedProduct usp = new UserSavedProduct();
            usp.setUser(user);
            usp.setProduct(product);
            savedProductRepository.save(usp);
        }

        return "Recommendations saved successfully!";
    }

    // Get saved products for a user
    @GetMapping("/{userId}")
    public List<UserSavedProduct> getSavedProducts(@PathVariable Long userId) {
        return savedProductRepository.findByUserId(userId);
    }

    @PutMapping("/{savedId}/feedback")
    public String updateFeedback(
            @PathVariable Long savedId,
            @RequestBody FeedbackRequest request
    ) {
        UserSavedProduct saved = savedProductRepository.findById(savedId).orElse(null);
        if (saved == null) return "Saved product not found";

        saved.setUserFeedback(request.getFeedback());
        savedProductRepository.save(saved);

        return "Feedback updated";
    }

    // UPDATE NOTES
    @PutMapping("/{savedId}/notes")
    public String updateNotes(
            @PathVariable Long savedId,
            @RequestBody NotesRequest request
    ) {
        UserSavedProduct saved = savedProductRepository.findById(savedId).orElse(null);
        if (saved == null) return "Saved product not found";

        saved.setNotes(request.getNotes());
        savedProductRepository.save(saved);

        return "Notes updated";
    }


    public static class BulkSaveRequest {
        private Long userId;
        private List<Long> productIds;

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public List<Long> getProductIds() {
            return productIds;
        }

        public void setProductIds(List<Long> productIds) {
            this.productIds = productIds;
        }
    }

    public static class FeedbackRequest {
        private String feedback;

        public String getFeedback() {
            return feedback;
        }

        public void setFeedback(String feedback) {
            this.feedback = feedback;
        }
    }

    public static class NotesRequest {
        private String notes;

        public String getNotes() {
            return notes;
        }

        public void setNotes(String notes) {
            this.notes = notes;
        }
    }
}