package com.my.restaurant.service;

import com.my.restaurant.domain.dto.userDto.UserLoginDto;
import com.my.restaurant.domain.dto.userDto.UserPwFixDto;
import com.my.restaurant.domain.dto.userDto.UserSignUpDto;

public interface UserService {
//	UserDto getUser(String userName);
	UserLoginDto findBy(UserLoginDto params);
	String findBy_Id(String personalName, String userEmail);
	String findBy_pw(String personalName, String userEmail, String phoneNumber);
	void passwordFix(UserPwFixDto userPwFixDto);
	void addUser(UserSignUpDto userSignUpDto);
	void certifiedPhoneNumber(String u_phone, String cerNum);
	boolean isUserNameAvailable(String userName);
}
