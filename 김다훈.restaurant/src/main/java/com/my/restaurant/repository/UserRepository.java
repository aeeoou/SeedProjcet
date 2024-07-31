package com.my.restaurant.repository;

import com.my.restaurant.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserIdAndUserPw(final String userId, final String userPw);

//    User findByUserNameAndUserEmail(final String userName, final String userEmail);

    @Query("SELECT u.userId from User u where u.userName = :userName and u.userEmail = :userEmail")
    String find_id(@Param("userName") String userName, @Param("userEmail") String userEmail);

    @Query("SELECT 1 from User u where u.userId = :userId and u.userEmail = :userEmail and u.phoneNumber = :phoneNumber")
    String find_pw(@Param("userId") String userId, @Param("userEmail") String userEmail, @Param("phoneNumber") String phoneNumber);

    @Modifying
    @Query("UPDATE User u set u.userPw = :userPw where u.userId = :userId")
    void patchPw(@Param("userPw") String userPw, @Param("userId") String userId);

    boolean existsByUserId(String userId);

}
