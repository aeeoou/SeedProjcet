package com.my.restaurant.service;

import java.util.List;

import com.my.restaurant.domain.dto.UserDto;

public interface UserService {
	UserDto getUser(Long userNo);
}
