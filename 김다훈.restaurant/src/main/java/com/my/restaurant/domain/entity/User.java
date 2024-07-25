package com.my.restaurant.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="users")
@Getter
@ToString
@Builder //builder에 AllargsConstructor가 파라미터를 넘겨준다.
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id //기본키(PK-key 설정)
	@GeneratedValue(strategy=GenerationType.IDENTITY, generator = "userSequence")
	@SequenceGenerator(name = "userSequence", sequenceName = "user_seq", allocationSize = 1)
	private Long userNo;
	private String userId;
	private String userPw;
	private String userName;
	private String phoneNumber;
	private LocalDate joinDate;
	private String email;
	
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public void setJoinDate(LocalDate joinDate) {
		this.joinDate = joinDate;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
}
