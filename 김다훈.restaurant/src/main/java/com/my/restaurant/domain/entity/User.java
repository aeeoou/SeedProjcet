package com.my.restaurant.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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

	@Column(unique = true, nullable = false)
	private String userId;
	private String userPw;
	private String userName;
	private String phoneNumber;
	private LocalDate birthDay;
	private String email;

//	@OneToMany
//	private List<Reservation> reservation;
//
//	@OneToMany
//	private List<Answer> answer;
}
