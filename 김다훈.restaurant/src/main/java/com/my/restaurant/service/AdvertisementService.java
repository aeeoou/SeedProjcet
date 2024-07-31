package com.my.restaurant.service;
import com.my.restaurant.domain.dto.AdvertisementDto;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface AdvertisementService {
    AdvertisementDto findByAdvertisementNo(Long advertisementNo);
    void addAdvertisement(AdvertisementDto advertisementDto); // 광고추가 메서드
    List<AdvertisementDto> getAllAdvertisements();            // 광고목록조회 메서드
    List<AdvertisementDto> searchAdvertisements(String type, String query); // 광고검색 메서드
    boolean deleteAdvertisement(Long advertisementNo);        // 광고 삭제 메서드 추가
}