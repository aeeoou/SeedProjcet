package com.my.restaurant.domain.dto.userDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder // UserSignUpDto 객체를 정의하고 그 객체를 생성할때 생성자 대신 사용
@AllArgsConstructor
@NoArgsConstructor
public class UserPwFixDto {
    private String userName;
    private String userPw;
}

