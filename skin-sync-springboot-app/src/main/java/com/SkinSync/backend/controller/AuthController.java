package com.SkinSync.backend.controller;

import com.SkinSync.backend.model.User;
import com.SkinSync.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;
import java.util.Map;
import java.util.HashMap;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // ----- SIGNUP -----
    @PostMapping("/signup")
    public Map<String, Object> signup(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return Collections.singletonMap("error", "Email already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Signup successful");
        response.put("email", user.getEmail());
        response.put("id", user.getId());
        return response;
    }

    // ----- LOGIN -----
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent() &&
                passwordEncoder.matches(user.getPassword(), existingUser.get().getPassword())) {
            User loggedInUser = existingUser.get();
            Map<String, Object> response = new HashMap<>();
            response.put("id", loggedInUser.getId());
            response.put("email", loggedInUser.getEmail());
            response.put("message", "Login successful");

            return response;
        }

        return Collections.singletonMap("error", "Invalid email or password");
    }
    }
