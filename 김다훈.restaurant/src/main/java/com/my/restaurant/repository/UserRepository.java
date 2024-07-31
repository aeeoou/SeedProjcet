package com.my.restaurant.repository;

import com.my.restaurant.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserNameAndUserPw(final String userName, final String userPw);

    @Query("SELECT u.userName, u.userId from User u where u.personalName = :personalName and u.userEmail = :userEmail")
    String find_id(@Param("personalName") String personalName, @Param("userEmail") String userEmail);

    @Query("SELECT 1 from User u where u.userName = :userName and u.userEmail = :userEmail and u.phoneNumber = :phoneNumber")
    String find_pw(@Param("userName") String userName, @Param("userEmail") String userEmail, @Param("phoneNumber") String phoneNumber);

    @Modifying
    @Query("UPDATE User u set u.userPw = :userPw where u.userName = :userName")
    void patchPw(@Param("userPw") String userPw, @Param("userName") String userName);

    boolean existsByUserName(String userName);

}
