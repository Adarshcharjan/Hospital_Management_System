package com.HMSApp.Hospital.Management.System.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.Hospital.Management.System.login.entity.Doctors;

@Repository
public interface DoctorRepository extends JpaRepository<Doctors, Long> {
	 Doctors findByUsername(String username);
}