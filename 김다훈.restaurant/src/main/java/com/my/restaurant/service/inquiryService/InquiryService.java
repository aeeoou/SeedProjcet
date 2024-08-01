package com.my.restaurant.service.inquiryService;

import com.my.restaurant.domain.dto.inquiryDto.InquiryDto;

import java.util.List;

public interface InquiryService {
    List<InquiryDto> getAllInquiries();
    InquiryDto getInquiryById(Long id);
    InquiryDto addInquiry(InquiryDto inquiryDto);
    InquiryDto updateInquiry(Long id, InquiryDto updatedInquiryDto);
    void deleteInquiry(Long id);
}
