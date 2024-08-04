package com.my.restaurant.service.inquiryService;

import com.my.restaurant.domain.dto.inquiryDto.InquiryDto;
import com.my.restaurant.domain.entity.inquiry.Inquiry;
import com.my.restaurant.repository.inquiryRepository.InquiryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InquiryServiceImpl implements InquiryService {
    @Autowired
    private InquiryRepository inquiryRepository;

    @Override
    public List<InquiryDto> getAllInquiries() {
        return inquiryRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public InquiryDto getInquiryById(Long id) {
        return inquiryRepository.findById(id)
                .map(this::convertToDto)
                .orElseThrow(() -> new EntityNotFoundException("Inquiry not found with id: " + id));
    }

    @Override
    public InquiryDto addInquiry(InquiryDto inquiryDto) {
        if (inquiryDto.getInquiryTitle() == null || inquiryDto.getInquiryTitle().isEmpty()) {
            throw new IllegalArgumentException("Inquiry title cannot be empty");
        }
        Inquiry inquiry = convertToEntity(inquiryDto);
        return convertToDto(inquiryRepository.save(inquiry));
    }

    @Override
    public InquiryDto updateInquiry(Long id, InquiryDto updatedInquiryDto) {
        return inquiryRepository.findById(id)
                .map(inquiry -> {
                    inquiry.setInquiryTitle(updatedInquiryDto.getInquiryTitle());
                    inquiry.setInquiryContent(updatedInquiryDto.getInquiryContent());
                    return convertToDto(inquiryRepository.save(inquiry));
                })
                .orElseThrow(() -> new EntityNotFoundException("Inquiry not found with id: " + id));
    }

    @Override
    public void deleteInquiry(Long id) {
        if (!inquiryRepository.existsById(id)) {
            throw new EntityNotFoundException("Inquiry not found with id: " + id);
        }
        inquiryRepository.deleteById(id);
    }

    private InquiryDto convertToDto(Inquiry inquiry) {
        InquiryDto dto = new InquiryDto();
        dto.setInquiryId(inquiry.getInquiryId());
        dto.setInquiryTitle(inquiry.getInquiryTitle());
        dto.setInquiryAuthor(inquiry.getInquiryAuthor());
        dto.setInquiryCreatedAt(inquiry.getInquiryCreatedAt());
        dto.setInquiryViewCount(inquiry.getInquiryViewCount());
        dto.setInquiryContent(inquiry.getInquiryContent());
        return dto;
    }

    private Inquiry convertToEntity(InquiryDto dto) {
        Inquiry inquiry = new Inquiry();
        inquiry.setInquiryTitle(dto.getInquiryTitle());
        inquiry.setInquiryAuthor(dto.getInquiryAuthor());
        inquiry.setInquiryCreatedAt(dto.getInquiryCreatedAt());
        inquiry.setInquiryViewCount(dto.getInquiryViewCount());
        inquiry.setInquiryContent(dto.getInquiryContent());
        return inquiry;
    }
}