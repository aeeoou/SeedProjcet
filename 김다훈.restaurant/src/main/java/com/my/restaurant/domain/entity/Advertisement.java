package com.my.restaurant.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="advertisements")
@Getter
@ToString
@Builder //builder에 AllargsConstructor가 파라미터를 넘겨준다.
@AllArgsConstructor
@NoArgsConstructor
public class Advertisement {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY, generator = "adSequence")
    @SequenceGenerator(name = "adSequence", sequenceName = "user_seq", allocationSize = 1)
    private Long advertisementNo;

//    @OneToOne
//    private Restaurant restaurantName;
    private String advertisementName;
    private String advertisementContent;
    private LocalDate uploadDay;
}
