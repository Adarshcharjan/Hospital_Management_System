package com.HMSApp.Hospital.Management.System.loginauth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.HMSApp.Hospital.Management.System.login.entity.Admins;
import com.HMSApp.Hospital.Management.System.login.entity.Doctors;
import com.HMSApp.Hospital.Management.System.login.repository.AdminRepository;
import com.HMSApp.Hospital.Management.System.login.repository.DoctorRepository;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.servlet.http.HttpSession;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private AdminRepository adminRepository;

    public boolean authenticate(HttpSession session, String username, String password, String role) {
        if ("doctor".equalsIgnoreCase(role)) {
            Doctors doctor = doctorRepository.findByUsername(username);
            if (doctor != null && doctor.getPassword().equals(password)) {
                session.setAttribute("user", username);
                session.setAttribute("role", "doctor");
                return true;
            }
        } else if ("admin".equalsIgnoreCase(role)) {
            Admins admin = adminRepository.findByUsername(username);
            if (admin != null && admin.getPassword().equals(password)) {
                session.setAttribute("user", username);
                session.setAttribute("role", "admin");
                return true;
            }
        }
        return false;
    }

    public void logout(HttpSession session) {
        session.invalidate();
    }
}



