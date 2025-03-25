package com.HMSApp.Hospital.Management.System.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.Hospital.Management.System.entity.Patients;
import com.HMSApp.Hospital.Management.System.repository.PatientRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PatientController {
	private PatientRepository patientRepository;

	public PatientController(PatientRepository patientRepository) {
		super();
		this.patientRepository = patientRepository;
	}
	
	
	@PostMapping("/patients")
	public Patients createpatient(@RequestBody Patients patients) {
		return patientRepository.save(patients);
	}
	
	@GetMapping("/patients")
	public List<Patients>getAllPatients	(){
		return patientRepository.findAll();
	}
	
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patients> getPatientByid(@PathVariable long id) throws AttributeNotFoundException {
		Patients patients =patientRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient Not found with id :- "+id));
		
		return ResponseEntity.ok(patients);
	
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String,Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {
			Patients patients =	patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Patient of "+id+" not found"));
	
			patientRepository.delete(patients);
			
			Map<String, Boolean> response = new HashMap<String, Boolean>();
			response.put("Patient Deleted", Boolean.TRUE);
			
			return ResponseEntity.ok(response);
	
	}
	
	
	@PutMapping("/patients/{id}")
	public ResponseEntity<Patients> updatePatientById(@PathVariable long id, @RequestBody Patients patientsDetails) throws AttributeNotFoundException {
			
		Patients patients =	patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Patient of "+id+" not found"));
		patients.setAge(patientsDetails.getAge());	
		patients.setName(patientsDetails.getName());
		patients.setDose(patientsDetails.getDose());
		patients.setBlood(patientsDetails.getBlood());
		patients.setPrescription(patientsDetails.getPrescription());
		patients.setFees(patientsDetails.getFees());
		patients.setUrgency(patientsDetails.getUrgency());
		
		
		Patients savedPatients= patientRepository.save(patients);
		
		return ResponseEntity.ok(savedPatients);
		
	}
}
 