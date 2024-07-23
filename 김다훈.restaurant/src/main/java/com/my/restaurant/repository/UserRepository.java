package com.my.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.my.restaurant.domain.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
