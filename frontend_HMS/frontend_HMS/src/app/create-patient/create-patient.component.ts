import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthenticateService } from '../docauthenticate.service';

@Component({
  selector: 'app-create-patient',
  standalone: false,
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patient : Patient = new Patient();

  constructor(private patientServive : PatientService, private rounter:Router, private docauthservice  : DocauthenticateService){

  }

  savePatient(){
    this.patientServive.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    })
  }


  onSubmit(){
    this.savePatient();
  }

  goToPatientList(){
    this.rounter.navigate(['/docdash'])
  }

  logout(){
    this.docauthservice.logout();
    this.rounter.navigate(['/home'])
  }

}
