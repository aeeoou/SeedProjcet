package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserDto;
import com.my.restaurant.domain.dto.UserLoginDto;
import com.my.restaurant.domain.entity.User;
import com.my.restaurant.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor //Autowired를 사용하지않고 의존성주입을 할때 사용
public class UserServiceImpl implements UserService {
	private final ModelMapper modelMapper;
	private final UserRepository userRepository;

	@Override
	public UserLoginDto findByUserId(String userId) {
		User user = userRepository.findByUserId(userId);
		UserLoginDto userLoginDto = modelMapper.map(user, UserLoginDto.class);
		return userLoginDto;
	}

	@Override
	public void addUser(UserDto userDto) {
		User user = modelMapper.map(userDto, User.class);
		userRepository.save(user);
	}

	@Override
	public void certifiedPhoneNumber(String u_phone, String cerNum) {
		String api_key = "NCSYYDVMXOMBSQWA";
		String api_secret = "8S8PDZBCMFKXHEJ9DHQ0CPEN5COAVXZD";
		DefaultMessageService messageService =  NurigoApp.INSTANCE.initialize(api_key, api_secret, "https://api.coolsms.co.kr");
		Message message = new Message();
		message.setFrom("01087817327"); // 발신번호
		message.setTo(u_phone); // 수신번호
		message.setText("휴대폰인증 메시지 : 인증번호는" + "[" + cerNum + "]" + "입니다."); // 4자리 인증번호: 1~9난수 4자리

		try {
			messageService.send(message);
		} catch (NurigoMessageNotReceivedException exception) {
			// 발송에 실패한 메시지 목록을 확인할 수 있다.
			System.out.println(exception.getFailedMessageList());
			System.out.println(exception.getMessage());
		} catch (Exception exception) {
			System.out.println(exception.getMessage());
		}
	}
}
