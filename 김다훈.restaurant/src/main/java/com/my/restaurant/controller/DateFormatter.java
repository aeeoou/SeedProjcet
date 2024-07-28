package com.my.restaurant.controller;

import org.springframework.format.Formatter;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class DateFormatter implements Formatter<LocalDate> {
	@Override //특정형식의 문자(String)을 localDate로 변환
	public LocalDate parse(String str, Locale locale) {
		return LocalDate.parse(str, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
	}
	
	@Override //localDate을 특정형식의 문자(String)으로 변환
	public String print(LocalDate date, Locale locale) {
		return DateTimeFormatter.ofPattern("yyyy-MM-dd").format(date);
	}
}
