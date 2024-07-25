package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserLoginDto;

public interface UserService {
	UserLoginDto findByUserId(String userId);
}
