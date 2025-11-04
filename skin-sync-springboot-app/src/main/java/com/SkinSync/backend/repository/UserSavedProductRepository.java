package com.SkinSync.backend.repository;


import com.SkinSync.backend.model.UserSavedProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserSavedProductRepository extends JpaRepository<UserSavedProduct, Long> {
    List<UserSavedProduct> findByUserId(Long userId);
}
