package com.HMSApp.Hospital.Management.System.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.Hospital.Management.System.doclogin.entity.Medicines;
import com.HMSApp.Hospital.Management.System.doclogin.repository.MedicinesRepository;
import com.HMSApp.Hospital.Management.System.entity.Patients;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v3")
public class MedicineController {
	
	private MedicinesRepository medicinesRepository;

	public MedicineController(MedicinesRepository medicinesRepository) {
		super();
		this.medicinesRepository = medicinesRepository;
	}

	@PostMapping("/medicines")
	public Medicines createMedicine(@RequestBody Medicines medicines) {
		return medicinesRepository.save(medicines);
		
	}
	
	@GetMapping("/medicines")
	public List<Medicines>getAllMedicines(){
		return medicinesRepository.findAll();
	}
	
	
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Medicines> getmedicineById(@PathVariable long id) throws AttributeNotFoundException{
			Medicines medicines =  medicinesRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not found with id :- "+id));
	
			return ResponseEntity.ok(medicines);
	}
	
	@PutMapping("/medicines/{id}")
	public ResponseEntity<Medicines> updatemedicine(@PathVariable long id, @RequestBody Medicines medicinesDetails) throws AttributeNotFoundException{
		Medicines medicines =  medicinesRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not found with id :- "+id));
		medicines.setDrug(medicinesDetails.getDrug());
		medicines.setStock(medicinesDetails.getStock());
		
		medicinesRepository.save(medicines);
		return ResponseEntity.ok(medicines) ;

	}
	
	@DeleteMapping("/medicines/{id}")
	public ResponseEntity<Map<String, Boolean>> delete(@PathVariable long id) throws AttributeNotFoundException {
		Medicines medicines =  medicinesRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not found with id :- "+id));
		 medicinesRepository.delete(medicines);
		 Map<String, Boolean> response = new HashMap<String, Boolean>();
		 
		 response.put("Medicine deleted", Boolean.TRUE);
		 return ResponseEntity.ok(response); 
	}
}
