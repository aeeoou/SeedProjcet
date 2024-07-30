package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserLoginDto;
import com.my.restaurant.domain.dto.UserSignUpDto;

public interface UserService {
	UserLoginDto findBy(UserLoginDto params);
	String findBy_Id(String userName, String userEmail);
	String findBy_pw(String userName, String userEmail, String phoneNumber);
	void addUser(UserSignUpDto userSignUpDto);
	void certifiedPhoneNumber(String u_phone, String cerNum);
	boolean isUserIdAvailable(String userId);
}
