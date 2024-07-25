package com.my.restaurant.controller;

import com.my.restaurant.domain.dto.UserLoginDto;
import com.my.restaurant.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//restful app이라는것은 controller의 문제이다(다른점), 즉 front가 TV이건 스마트폰이건 json으로 데이터주고받는것은 동일
@RestController
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {

	@Autowired
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
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user");
		return "redirect:/";
	}





	

	
}
