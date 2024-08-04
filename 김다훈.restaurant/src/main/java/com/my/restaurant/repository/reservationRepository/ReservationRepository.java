package com.my.restaurant.repository.reservationRepository;

import com.my.restaurant.domain.entity.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
