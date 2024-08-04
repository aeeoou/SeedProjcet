package com.my.restaurant.controller;

import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice   //https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80
public class Advice {
	// controller로 argument가 하나도 넘어오지않으면 처리할 handler
	@ExceptionHandler(NoSuchElementException.class)
	protected ResponseEntity<?> none(NoSuchElementException e) { //protected만 사용하는 이유는 controller 패키지에서만 호출되게 하려고
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(Map.of("msg", e.getMessage()));
	}

	// controller로 엉뚱한 argument가 넘어오면 처리할 handler
	protected ResponseEntity<?> invalidArg(MethodArgumentNotValidException e) {
		return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
				.body(Map.of("msg", e.getMessage()));
	}
}
