package com.my.restaurant.controller;

import com.my.restaurant.domain.dto.*;
import com.my.restaurant.repository.UserRepository;
import com.my.restaurant.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Random;

//restful app이라는것은 controller의 문제이다(다른점), 즉 front가 TV이건 스마트폰이건 json으로 데이터주고받는것은 동일
@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor // 의존성주입해줌
@RequestMapping("user")
public class UserController {
	private final UserService userService;
	private final UserRepository userRepository;

	@PostMapping("/login")
	public UserLoginDto login(@RequestBody final UserLoginDto params) {
		UserLoginDto userLoginDto = userService.findBy(params);
		return userLoginDto;
	}

	@PostMapping("/findUserId")
	public String userFindId(@RequestBody final UserFindIdDto params) {
		String result= userService.findBy_Id(params.getUserName(), params.getUserEmail());
		return result;
	}

	@PostMapping("/findUserPw")
	public String userFindPw(@RequestBody final UserFindPwDto params) {
		String result= userService.findBy_pw(params.getUserId(), params.getUserEmail(), params.getPhoneNumber());
		return result;
	}

	@PatchMapping("/passwordFix")
	public void passwordFix(@RequestBody UserPwFixDto UserPwFixDto) {
		userService.passwordFix(UserPwFixDto);
	}

	@PostMapping("/add")
	public Map<String, String> addUser(@RequestBody UserSignUpDto userSignUpDto) { //@RequestBody: 데이터를 담는 본문
		userService.addUser(userSignUpDto);
		return Map.of("result", "USER 추가");
	}


	@PostMapping("/sendSMS")
	public String sendSMS (@RequestParam String u_phone) { // u_phone은 수신번호
		Random rnd = new Random(); // 인증번호 랜덤생성
		StringBuffer buffer = new StringBuffer(); // StringBuffer: string을 담을 string객체
		for (int i=0; i<4; i++) {
			buffer.append(rnd.nextInt(10)); // 0~9사이의 값을 4번 뽑아서 buffer객체에 담는다.
		}
		String cerNum = buffer.toString(); // buffer안에 들어있는 인증번호
		System.out.println("수신자 번호 : " + u_phone);
		System.out.println("인증번호 : " + cerNum);
		userService.certifiedPhoneNumber(u_phone, cerNum);
		return cerNum;
	}

	@GetMapping("/checkUserId/{userId}")
	public ResponseEntity<Boolean> checkUserIdDuplicate(@PathVariable String userId) throws BadRequestException{
			return ResponseEntity.ok(userService.isUserIdAvailable(userId));
	}
}
