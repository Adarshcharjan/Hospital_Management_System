import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { subscribeOn } from 'rxjs';
import { DocauthenticateService } from '../docauthenticate.service';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  medicine : Medicine = new Medicine();

  constructor(private route : ActivatedRoute, private medicineService : MedicineService , private router : Router, private docauthservice : DocauthenticateService){

  }
  id:number = 0;

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getmedicineById(this.id).subscribe(data=>{
      this.medicine =data;
    })
  }
 

  onSubmit(){
    this.medicineService.updatemedicine(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicineList();
    })
  }

  goToMedicineList(){
    this.router.navigate(['/view-medicine'])
  }

  logout(){
    this.docauthservice.logout();
    this.router.navigate(['/home'])
  }
}
