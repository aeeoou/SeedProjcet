package com.my.restaurant.repository.userRepository;

import com.my.restaurant.domain.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

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

    @Modifying
    @Query("UPDATE User u set u.userName = :userName, u.personalName = :personalName, u.birthDay = :birthDay, " +
            "u.phoneNumber = :phoneNumber, u.userPw = :userPw, u.userEmail = :userEmail where u.userId = :userId")
    void patchUser(@Param("userName") String userName, @Param("personalName") String personalName,
                   @Param("birthDay") LocalDate birthDay, @Param("phoneNumber") String phoneNumber,
                   @Param("userPw") String userPw, @Param("userEmail") String userEmail, @Param("userId") Long userId);


    @Query("SELECT nvl(u.userName, 1) from User u where u.userName = :userName")
    Boolean duplicatedUserName(@Param("userName") String userName);
}
