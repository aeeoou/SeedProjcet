package com.my.restaurant.controller;

import com.my.restaurant.domain.dto.UserDto;
import com.my.restaurant.domain.dto.UserLoginDto;
import com.my.restaurant.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Random;

//restful app이라는것은 controller의 문제이다(다른점), 즉 front가 TV이건 스마트폰이건 json으로 데이터주고받는것은 동일
@RestController
@RequiredArgsConstructor // 의존성주입해줌
@RequestMapping("user")
public class UserController {
	private final UserService userService;

	@GetMapping("/login")
	public String moveToLogin() {
		System.out.println("go to loginForm");
		return "loginForm";
	}

	@PostMapping("/loginCheck")
	public String login(String userId, String userPw, HttpSession session, Model model) {
		UserLoginDto user = userService.findByUserId(userId);
		if(user != null && user.getUserPw().equals(userPw)) {
			session.setAttribute("user", user);
			return "redirect:/userMain";
		} else {
			model.addAttribute("error", "아이디 또는 비밀번호가 일치하지 않습니다.");
			return "loginForm";
		}
	}

	@PostMapping("/add")
	public Map<String, String> addUser(@RequestBody UserDto userDto) { //@RequestBody: 데이터를 담는 본문
		userService.addUser(userDto);
		return Map.of("result", "USER 추가");
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user");
		return "redirect:/";
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






	

	
}
