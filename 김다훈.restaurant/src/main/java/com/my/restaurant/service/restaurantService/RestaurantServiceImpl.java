package com.my.restaurant.service.restaurantService;

import com.my.restaurant.domain.dto.restaurantDto.RestaurantDto;
import com.my.restaurant.domain.entity.restaurant.Restaurant;
import com.my.restaurant.repository.restaurantRepository.RestaurantRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantServiceImpl implements RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @Override
    public List<RestaurantDto> getAllRestaurants() {
        return restaurantRepository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public RestaurantDto getRestaurantById(Long id) {
        return restaurantRepository.findById(id)
                .map(this::convertToDto)
                .orElseThrow(() -> new EntityNotFoundException("Restaurant not found with id: " + id));
    }

    @Override
    public RestaurantDto addRestaurant(RestaurantDto restaurantDto) {
        if (restaurantDto.getRestaurantName() == null || restaurantDto.getRestaurantName().isEmpty()) {
            throw new IllegalArgumentException("Restaurant name cannot be empty");
        }
        Restaurant restaurant = convertToEntity(restaurantDto);
        return convertToDto(restaurantRepository.save(restaurant));
    }

    @Override
    public void deleteRestaurant(Long id) {
        if (!restaurantRepository.existsById(id)) {
            throw new EntityNotFoundException("Restaurant not found with id: " + id);
        }
        restaurantRepository.deleteById(id);
    }

    private RestaurantDto convertToDto(Restaurant restaurant) {
        RestaurantDto dto = new RestaurantDto();
        dto.setRestaurantId(restaurant.getRestaurantId());
        dto.setRestaurantName(restaurant.getRestaurantName());
        dto.setRestaurantCategory(restaurant.getRestaurantCategory());
        dto.setRestaurantPriceRange(restaurant.getRestaurantPriceRange());
        dto.setReservationAvailable(restaurant.isReservationAvailable());
        return dto;
    }

    private Restaurant convertToEntity(RestaurantDto dto) {
        Restaurant restaurant = new Restaurant();
        restaurant.setRestaurantName(dto.getRestaurantName());
        restaurant.setRestaurantCategory(dto.getRestaurantCategory());
        restaurant.setRestaurantPriceRange(dto.getRestaurantPriceRange());
        restaurant.setReservationAvailable(dto.isReservationAvailable());
        return restaurant;
    }
}