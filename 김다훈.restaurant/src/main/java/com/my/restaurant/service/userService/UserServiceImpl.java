package com.my.restaurant.service.userService;

import com.my.restaurant.domain.dto.userDto.*;
import com.my.restaurant.domain.entity.user.User;
import com.my.restaurant.repository.userRepository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor //Autowired를 사용하지않고 의존성주입을 할때 사용
public class UserServiceImpl implements UserService {
	private final ModelMapper modelMapper;
	private final UserRepository userRepository;

	@Override
	public UserLoginDto findBy(UserLoginDto params) {
		User user = userRepository.findByUserNameAndUserPw(params.getUserName(), params.getUserPw());
		System.out.println(user);
		UserLoginDto userLoginDto = modelMapper.map(user, UserLoginDto.class);
		return userLoginDto;
	}

	@Override
	public void passwordFix(UserPwFixDto userPwFixDto) {
		userRepository.patchPw(userPwFixDto.getUserPw(), userPwFixDto.getUserName());
	}


	@Override
	public String findBy_Id(String personalName, String userEmail) {
		String result = "";
		try {
			result = userRepository.find_id(personalName, userEmail);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String findBy_pw(String personalName, String userEmail, String phoneNumber) {
		String result = "";
		try {
			result = userRepository.find_pw(personalName, userEmail, phoneNumber);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public void addUser(UserSignUpDto userSignUpDto) {
		User user = modelMapper.map(userSignUpDto, User.class);
		userRepository.save(user);
	}

	@Override
	public UserDto getUser(Long userId) {
		Optional<User> result = userRepository.findById(userId);
		User user = result.orElseThrow();
		UserDto userDto = modelMapper.map(user, UserDto.class);
		return userDto;
	}

	@Override
	public void userUpdate(UserUpdateDto userUpdateDto) {
		userRepository.patchUser(userUpdateDto.getUserName(), userUpdateDto.getPersonalName(), userUpdateDto.getBirthDay(),
				userUpdateDto.getPhoneNumber(), userUpdateDto.getUserPw(), userUpdateDto.getUserEmail(), userUpdateDto.getUserId());
	}

	@Override
	public void certifiedPhoneNumber(String u_phone, String cerNum) {
		String api_key = "";
		String api_secret = "";
		DefaultMessageService messageService =  NurigoApp.INSTANCE.initialize(api_key, api_secret, "http://api.coolsms.co.kr");
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

	public Boolean isUserNameAvailable(String userName) {
		Optional result = userRepository.duplicatedUserName(userName);

		if(result.isEmpty()) {
			return true;
		} else {
			return false;
		}
	}

}
