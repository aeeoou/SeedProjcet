package com.my.restaurant.repository.advertisementRepository;

import com.my.restaurant.domain.entity.advertisement.Advertisement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {
    @Query
    Advertisement findByAdvertisementNo(Long advertisementNo);
    List<Advertisement> findByRestaurantNameContaining(String restaurantName);
    List<Advertisement> findByCreateDate(LocalDate createDate);
}