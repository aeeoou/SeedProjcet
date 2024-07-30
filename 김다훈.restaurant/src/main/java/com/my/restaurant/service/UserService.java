package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserFindDto;
import com.my.restaurant.domain.dto.UserSignUpDto;
import com.my.restaurant.domain.dto.UserLoginDto;

public interface UserService {
	UserLoginDto findBy(UserLoginDto params);
	UserFindDto findById(UserFindDto params);
	void addUser(UserSignUpDto userSignUpDto);
	void certifiedPhoneNumber(String u_phone, String cerNum);
	boolean isUserIdAvailable(String userId);
}
