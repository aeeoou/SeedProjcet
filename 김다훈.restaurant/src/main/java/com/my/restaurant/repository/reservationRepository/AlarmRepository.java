package com.my.restaurant.repository.reservationRepository;

import com.my.restaurant.domain.entity.reservation.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmRepository extends JpaRepository<Alarm, Long> {

}
