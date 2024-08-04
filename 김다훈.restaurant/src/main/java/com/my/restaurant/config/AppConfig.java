package com.my.restaurant.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig implements WebMvcConfigurer { // WebMvcConfigurer-> CORS(cross origin resource sharing)설정: 다른 도메인 접근, URI
	@Bean // Spring 컨테이너 객체를 관리하는공간(재사용성 강화, 객체간 의존관계설정, DI)
	public ModelMapper getMapper() { // Entity <-> dto setter 없이 데이터를 맵핑시켜 복사하는 개념 https://squirmm.tistory.com/entry/Spring-modelMapper
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration()
			.setFieldMatchingEnabled(true) //필드맵핑을 허가한다는 설정
			.setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE) // 우리 필드는 private 필드이므로 private에 접근하도록 설정
			.setMatchingStrategy(MatchingStrategies.LOOSE); //맵핑 룰을 의미 https://velog.io/@easy_on7/JavaSpring-ModelMapper#loose 참고
		return modelMapper;
	}
	
	@Override
	public void addFormatters(FormatterRegistry registry) { // 날짜 포맷 등록
		registry.addFormatter(new DateFormatter());
	}
	
	@Override   
	public void addCorsMappings(CorsRegistry registry) { 
		// 이 설정으로 프론트엔드와 월활하게 대화가능
		// 즉 front와 backEnd의 url이 동일해야함.
		// https:velog.io/@yoonuk/Spring-Boot-CORS-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
		// https://velog.io/@wjdwl002/CORS%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%8F%99%EC%9E%91-%EB%B0%A9%EC%8B%9D%EB%B6%80%EC%A0%9C-Preflight-%EC%9A%94%EC%B2%AD%EC%9D%B4%EB%9E%80
		registry.addMapping("/**")
			.allowedOrigins("*") // origin(출처=uri, protocal, host, port)은 모두 허용
			.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS") // METHOD는 허용할것만 기재
			.maxAge(300) // request의 유효시간을 설정
			// https://engineerinsight.tistory.com/69#google_vignette: Authorization
			// 로그인인증
//			https://velog.io/@woosim34/Spring-Spring-Security-%EC%84%A4%EC%A0%95-%EB%B0%8F-%EA%B5%AC%ED%98%84SessionSpring-boot3.0-%EC%9D%B4%EC%83%81
			.allowedHeaders("Authorization", "Cache-Control", "Content-type");
	}
}
