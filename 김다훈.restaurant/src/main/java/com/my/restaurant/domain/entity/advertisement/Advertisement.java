package com.my.restaurant.domain.entity.advertisement;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="advertisement")
@Getter
@ToString
@Builder //builder에 AllargsConstructor가 파라미터를 넘겨준다.
@AllArgsConstructor
@NoArgsConstructor
public class Advertisement {
    @Id //기본키(PK-key 설정)
    @GeneratedValue(strategy= GenerationType.IDENTITY, generator = "advertisementSequence")
    @SequenceGenerator(name = "advertisementSequence", sequenceName = "advertisement_seq", allocationSize = 1)
    private Long advertisementNo;
    private String restaurantName;
    private String advertisementTitle;
    private String advertisementContent;
    private LocalDate createDate;
    @Lob // 이미지를 저장할 필드에 @Lob 애너테이션 추가
    private byte[] advertisementImage; // 이미지 필드 추가

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public void setCreateDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public void setJoinDate(LocalDate createDate) {
        this.createDate = createDate;
    }

    public void setAdvertisementTitle(String advertisementTitle) {
        this.advertisementTitle = advertisementTitle;
    }

    public void setAdvertisementContent(String advertisementContent) {
        this.advertisementContent = advertisementContent;
    }

    // 이미지 필드를 위한 Setter 추가
    public void setAdvertisementImage(byte[] advertisementImage) {
        this.advertisementImage = advertisementImage;
    }
}