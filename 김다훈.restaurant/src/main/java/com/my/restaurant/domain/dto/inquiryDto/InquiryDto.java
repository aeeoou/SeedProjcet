package com.my.restaurant.domain.dto.inquiryDto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InquiryDto {
    private Long inquiryId;
    private String inquiryTitle;
    private String inquiryAuthor;
    private LocalDateTime inquiryCreatedAt;
    private int inquiryViewCount;
    private String inquiryContent;
}