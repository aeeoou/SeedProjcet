package com.my.restaurant.service;

import com.my.restaurant.domain.dto.UserDto;
import com.my.restaurant.domain.dto.UserLoginDto;
import com.my.restaurant.domain.entity.User;
import com.my.restaurant.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.nurigo.sdk.NurigoApp;
import net.nurigo.sdk.message.exception.NurigoMessageNotReceivedException;
import net.nurigo.sdk.message.model.Message;
import net.nurigo.sdk.message.service.DefaultMessageService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor //Autowired를 사용하지않고 의존성주입을 할때 사용
public class AdvertisementServiceImpl implements AdvertisementService {

}
