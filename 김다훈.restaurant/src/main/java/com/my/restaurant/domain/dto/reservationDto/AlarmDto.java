package com.my.restaurant.domain.dto.reservationDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AlarmDto {
    private Long alarmId;
    private String alarmMessage;
}
