//package com.my.restaurant.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//// spring security 5.7이상에서 더 이상 WebSecurityConfigurerAdapter 사용을 권장하지않음
//// 따라서 SecurityFilterChain Bean 등록을 통해 해결
//// deprecated: 더이상 중요성이 떨어져 사용하지않게 된 기능을 일컬음
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration {
//    @Bean
//    public BCryptPasswordEncoder encoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        //csrf : Cross site Request forgery
//        http.csrf(AbstractHttpConfigurer::disable) //사이트 위변조 요청 방지
//                        .sessionManagement((sessionManagement) ->
//                                sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//
//                http.authorizeHttpRequests().a
//
//
//
//    }
//}
