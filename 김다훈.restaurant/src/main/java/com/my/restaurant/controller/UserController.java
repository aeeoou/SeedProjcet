package com.my.restaurant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.my.restaurant.domain.dto.UserDto;
import com.my.restaurant.service.UserService;

import lombok.RequiredArgsConstructor;

//restful app이라는것은 controller의 문제이다(다른점), 즉 front가 TV이건 스마트폰이건 json으로 데이터주고받는것은 동일
@RestController
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {
	private final UserService userService;
	
	@GetMapping("{userNo}") // 컨트롤러는 Dto를 다루고 repository는 entity를 다룬다.
	public UserDto getUser(String userId, String userPw) { //PathVariable: url에 입력된 매개변수를 읽는다. ex) user/1
		return userService.getUser(userNo);
	}
	
	@GetMapping("get")
	
}
