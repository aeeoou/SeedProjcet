package com.my.restaurant.repository;

import com.my.restaurant.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserIdAndUserPw(final String userId, final String userPw);

    User findByUserNameAndUserEmail(final String userName, final String userEmail);

    boolean existsByUserId(String userId);

}
