package com.my.restaurant.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder // UserDto 객체를 정의하고 그 객체를 생성할때 생성자 대신 사용
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	private Long userNo;
	private String userId;
	private String userPw;
	private String userName;
	private String phoneNumber;
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private LocalDate birthDay;
	private String email;
}
