package com.HMSApp.Hospital.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.HMSApp.Hospital.Management.System.entity.Patients;

@Repository
public interface PatientRepository extends JpaRepository<Patients,Long>{

}
