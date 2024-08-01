package com.my.restaurant.domain.dto.restaurantDto;

import lombok.Data;

@Data
public class RestaurantDto {
    private Long restaurantId;
    private String restaurantName;
    private String restaurantCategory;
    private String restaurantPriceRange;
    private boolean isReservationAvailable;
}