package com.HMSApp.Hospital.Management.System.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.Hospital.Management.System.login.entity.Admins;

@Repository
public interface AdminRepository extends JpaRepository<Admins, Long> {
	Admins findByUsername(String username);
}
