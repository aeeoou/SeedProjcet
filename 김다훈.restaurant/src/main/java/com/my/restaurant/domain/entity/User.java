package com.my.restaurant.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="users")
@Data
@ToString
@Builder //builder에 AllargsConstructor가 파라미터를 넘겨준다.
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id //기본키(PK-key 설정)
	@GeneratedValue(strategy=GenerationType.IDENTITY, generator = "userSequence")
	@SequenceGenerator(name="userSequence", sequenceName = "user_seq", initialValue = 1, allocationSize = 1)
	private Long userNo;
	private String userId;
	private String userPw;
	private String userName;
	private String phoneNumber;
	private LocalDate birthDay;
	private String userEmail;
}
