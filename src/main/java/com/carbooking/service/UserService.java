package com.carbooking.service;

import com.carbooking.entity.AppUser;
import com.carbooking.payload.AppUserDto;
import com.carbooking.payload.LoginDto;
import com.carbooking.repository.AppUserRepository;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private AppUserRepository appUserRepository;
    private ModelMapper modelMapper;
    private JWTService jwtService;

    public UserService(AppUserRepository appUserRepository, ModelMapper modelMapper, JWTService jwtService) {
        this.appUserRepository = appUserRepository;
        this.modelMapper = modelMapper;
        this.jwtService = jwtService;
    }

    // *********************   SIGNUP AS USER  *******************

    public ResponseEntity<?> createUser(AppUser userDto) {
        Optional<AppUser> opUsername = appUserRepository.findByUsername(userDto.getUsername());
        if(opUsername.isPresent()){
            return new ResponseEntity<>("UserName already taken", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Optional<AppUser> opEmail = appUserRepository.findByEmail(userDto.getEmail());
        if(opEmail.isPresent()){
            return new ResponseEntity<>("Email already taken",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        //create a new user object
        AppUser user = new AppUser();
        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPhone(userDto.getPhone());
        user.setPassword(BCrypt.hashpw(userDto.getPassword(), BCrypt.gensalt(5))); // ✅ Encrypt password
        //user.setRole("ROLE_USER"); // ✅ Default role
        user.setRole(userDto.getRole().startsWith(" ") ? userDto.getRole() : " " + userDto.getRole());


        AppUser savedUser = appUserRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);

    }
    AppUserDto mapToDto(User user) {
        AppUserDto dto = modelMapper.map(user,AppUserDto.class);
        return dto;
    }
    AppUser mapToEntity(AppUserDto appUserDto){
        AppUser user = modelMapper.map(appUserDto, AppUser.class);
        return user;
    }

    // *************************  LOGIN  *****************

    public String verifyLogin(LoginDto loginDto){
        Optional<AppUser> opUser = appUserRepository.findByUsername(loginDto.getUsername());
        if(opUser.isPresent()) {
            AppUser appUser = opUser.get();
            boolean isPasswordMatch = BCrypt.checkpw(loginDto.getPassword(), appUser.getPassword());

            if (isPasswordMatch) {
                //Generate JWT token
                return jwtService.generateToken((appUser.getUsername()));
            } else {
                System.out.println("Password mismatch " + loginDto.getUsername());
            }
        }else {
            System.out.println("User not found" + loginDto.getUsername());
        }
        return null;
    }
}
