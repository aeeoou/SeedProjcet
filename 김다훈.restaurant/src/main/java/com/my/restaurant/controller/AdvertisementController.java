package com.my.restaurant.controller;

import com.my.restaurant.domain.entity.Advertisement;
import com.my.restaurant.service.AdvertisementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/advertisement")
public class AdvertisementController {

    @Autowired
    private AdvertisementService advertisementService;

    @PostMapping
    public ResponseEntity<String> createAdvertisement(
            @RequestParam("file") MultipartFile file,
            @RequestParam("restaurantName") String restaurantName,
            @RequestParam("advertisementContent") String advertisementContent) {
        try {
            Advertisement advertisement = new Advertisement();
            advertisement.setRestaurantName(restaurantName);
            advertisement.setAdvertisementContent(advertisementContent);
            advertisement.setCreatedDate(LocalDate.now());
            advertisement.setAdvertisementImage(file.getBytes());


            return ResponseEntity.ok("Advertisement created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to create advertisement");
        }
    }
}