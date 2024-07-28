package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserDto;
import com.my.restaurant.domain.dto.UserLoginDto;

public interface UserService {
	UserLoginDto findByUserId(String userId);
	void addUser(UserDto userDto);
	void certifiedPhoneNumber(String u_phone, String cerNum);
}
