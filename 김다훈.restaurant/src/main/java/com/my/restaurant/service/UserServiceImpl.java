package com.my.restaurant.service;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.my.restaurant.domain.dto.UserDto;
import com.my.restaurant.domain.entity.User;
import com.my.restaurant.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor //Autowired를 사용하지않고 의존성주입을 할때 사용
public class UserServiceImpl implements UserService {
	private final ModelMapper modelMapper;
	private final UserRepository userRepository;
	
	@Override
	public UserDto getUser(Long userNo) { //Optional: NPE(NullPointException)이 발생하지않도록 감싸는 wrapper 클래스
		Optional<User> result = userRepository.findById(userNo);
		User user = result.orElseThrow(); //orElseThrow: optional 예외처리 수행 (user가 있다면 return, 없다면 예외처리)
		UserDto userDto = modelMapper.map(user, UserDto.class);
		return userDto;
	}
}
