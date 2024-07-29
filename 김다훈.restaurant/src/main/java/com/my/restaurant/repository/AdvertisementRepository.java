package com.my.restaurant.repository;

import com.my.restaurant.domain.entity.Advertisement;
import org.springframework.data.jpa.repository.JpaRepository;

import com.my.restaurant.domain.entity.User;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {

}