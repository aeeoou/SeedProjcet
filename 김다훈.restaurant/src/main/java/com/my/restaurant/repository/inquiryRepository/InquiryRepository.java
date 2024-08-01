package com.my.restaurant.repository.inquiryRepository;

import com.my.restaurant.domain.entity.inquiry.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long> {

}
