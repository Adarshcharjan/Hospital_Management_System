package com.HMSApp.Hospital.Management.System.loginauth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")   
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginData, HttpSession session) {
        String username = loginData.get("username");
        String password = loginData.get("password");
        String role = loginData.get("role");

        boolean isAuthenticated = authService.authenticate(session, username, password, role);

        if (isAuthenticated) {
            return ResponseEntity.ok("Login Successful. Session started.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        authService.logout(session);
        return ResponseEntity.ok("Logged out successfully.");
    }

    @GetMapping("/session")
    public ResponseEntity<?> getSessionDetails(HttpSession session) {
        String user = (String) session.getAttribute("user");
        String role = (String) session.getAttribute("role");

        if (user != null) {
            return ResponseEntity.ok(Map.of("user", user, "role", role));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No active session found.");
        }
    }

}


