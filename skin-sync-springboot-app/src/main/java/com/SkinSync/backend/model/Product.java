package com.SkinSync.backend.model;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String category;
    private String skinType;
    private String skinCondition;
    private String imageUrl;
    private String productLink;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserSavedProduct> savedProducts;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getSkinType() {
        return skinType;
    }

    public String getSkinCondition() {
        return skinCondition;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getProductLink() {
        return productLink;
    }

    public List<UserSavedProduct> getSavedProducts() {
        return savedProducts;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setSkinType(String skinType) {
        this.skinType = skinType;
    }

    public void setSkinCondition(String skinCondition) {
        this.skinCondition = skinCondition;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setProductLink(String productLink) {
        this.productLink = productLink;
    }

    public void setSavedProducts(List<UserSavedProduct> savedProducts) {
        this.savedProducts = savedProducts;
    }
}

