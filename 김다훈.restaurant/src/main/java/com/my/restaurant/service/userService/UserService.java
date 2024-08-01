package com.my.restaurant.service.userService;

import com.my.restaurant.domain.dto.userDto.*;

public interface UserService {
	void userUpdate(UserUpdateDto userUpdateDto);
	UserDto getUser(Long userId);
	UserLoginDto findBy(UserLoginDto params);
	String findBy_Id(String personalName, String userEmail);
	String findBy_pw(String personalName, String userEmail, String phoneNumber);
	void passwordFix(UserPwFixDto userPwFixDto);
	void addUser(UserSignUpDto userSignUpDto);
	void certifiedPhoneNumber(String u_phone, String cerNum);
	boolean isUserNameAvailable(String userName);
}
