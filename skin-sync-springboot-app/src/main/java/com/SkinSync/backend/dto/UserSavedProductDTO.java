package com.SkinSync.backend.dto;

import java.time.LocalDateTime;

public class UserSavedProductDTO {
    private Long id;
    private String productName;
    private String category;
    private String imageUrl;
    private String productLink;
    private String userFeedback;
    private String notes;
    private LocalDateTime savedAt;

    public UserSavedProductDTO(Long id, String productName, String category,
                               String imageUrl, String productLink,
                               String userFeedback, String notes,
                               LocalDateTime savedAt) {
        this.id = id;
        this.productName = productName;
        this.category = category;
        this.imageUrl = imageUrl;
        this.productLink = productLink;
        this.userFeedback = userFeedback;
        this.notes = notes;
        this.savedAt = savedAt;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getProductLink() {
        return productLink;
    }

    public void setProductLink(String productLink) {
        this.productLink = productLink;
    }

    public LocalDateTime getSavedAt() {
        return savedAt;
    }

    public void setSavedAt(LocalDateTime savedAt) {
        this.savedAt = savedAt;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getUserFeedback() {
        return userFeedback;
    }

    public void setUserFeedback(String userFeedback) {
        this.userFeedback = userFeedback;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }
}
