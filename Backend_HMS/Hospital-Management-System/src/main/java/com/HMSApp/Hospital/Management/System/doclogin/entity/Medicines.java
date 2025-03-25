package com.HMSApp.Hospital.Management.System.doclogin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medicines")
public class Medicines {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id; 
	
	@Column(name = "drug_name")
	private String drug;
	
	private String stock;

	public Medicines(long id, String drug, String stock) {
		super();
		this.id = id;
		this.drug = drug;
		this.stock = stock;
	}

	public Medicines() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDrug() {
		return drug;
	}

	public void setDrug(String drug) {
		this.drug = drug;
	}

	public String getStock() {
		return stock;
	}

	public void setStock(String stock) {
		this.stock = stock;
	}
	
	

}

