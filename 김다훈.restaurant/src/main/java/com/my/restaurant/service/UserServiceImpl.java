package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserLoginDto;
import com.my.restaurant.domain.entity.User;
import com.my.restaurant.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor //Autowired를 사용하지않고 의존성주입을 할때 사용
public class UserServiceImpl implements UserService {

	private final ModelMapper modelMapper;
	private final UserRepository userRepository;

	public UserLoginDto findByUserId(String userId) {
		User user = userRepository.findByUserId(userId);
		UserLoginDto userLoginDto = modelMapper.map(user, UserLoginDto.class);
		return userLoginDto;
	}
}
