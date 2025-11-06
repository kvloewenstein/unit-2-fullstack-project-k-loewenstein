package com.SkinSync.backend.repository;

import com.SkinSync.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Filter products by skinType and skinCondition
    List<Product> findBySkinTypeIgnoreCaseAndSkinConditionIgnoreCase(String skinType, String skinCondition);
}
