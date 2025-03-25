import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  standalone: false,
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {


    medicine :Medicine = new Medicine();

      constructor(private medicineService : MedicineService,private router : Router){

      }

      saveMedicine(){
        this.medicineService.createMedicine(this.medicine).subscribe(data=>{
          console.log(data);
          this.goToViewMedicine();
        })
      }


  onSubmit(){
    this.saveMedicine();
  }

  goToViewMedicine(){
    this.router.navigate(['/view-medicine'])
  }
}
