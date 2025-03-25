import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  constructor(private appointmentService : AppointmentService){}

  ngOnInit():void{
    this.getAppointments(); 

  }
  appointments  : Appointment[]=[];
getAppointments(){
  this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointments=data;

  })
}

delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
}

}
