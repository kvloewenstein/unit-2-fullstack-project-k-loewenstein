package com.SkinSync.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Forward all routes except ones starting with /api or containing a dot (like .js, .css)
        registry.addViewController("/{path:[^\\.]*}")
                .setViewName("forward:/index.html");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // allow all backend paths
                .allowedOrigins("http://localhost:5173") // frontend URL
                .allowedMethods("GET","POST","PUT","DELETE")
                .allowCredentials(true);
    }
}