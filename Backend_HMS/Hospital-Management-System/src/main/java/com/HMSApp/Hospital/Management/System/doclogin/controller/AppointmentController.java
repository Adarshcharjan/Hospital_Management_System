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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HMSApp.Hospital.Management.System.doclogin.entity.Appointments;
import com.HMSApp.Hospital.Management.System.doclogin.repository.AppointmentsRepository;
import com.HMSApp.Hospital.Management.System.entity.Patients;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class AppointmentController {

	 AppointmentsRepository appointmentsRepository;

	
	
	public AppointmentController(AppointmentsRepository appointmentsRepository) {
		super();
		this.appointmentsRepository = appointmentsRepository;
	} 

 
	@PostMapping("/appointments")
	public Appointments createAppointment( @RequestBody Appointments appointments) {
		return appointmentsRepository.save(appointments);
	}
	
	@GetMapping("/appointments")
	public List<Appointments>getAllAppointments	(){ 
		return appointmentsRepository.findAll();
	}
	
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String, Boolean>>deleteAppointment(@PathVariable long id) throws AttributeNotFoundException{
		 	Appointments appointments= appointmentsRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Appointment not found with given id :- "+id));
		 	
		 	appointmentsRepository.delete(appointments);
		 	Map<String, Boolean> response = new HashMap<String, Boolean>();
		 	response.put("Appointment Deleted", Boolean.TRUE);
		 	return ResponseEntity.ok(response);
		 	
		 	
	}
}
