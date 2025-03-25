import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { OrthopedicsComponent } from './orthopedics/orthopedics.component';
import { PediatricsComponent } from './pediatrics/pediatrics.component';
import { FooterComponent } from './footer/footer.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    SpecialtiesComponent,
    CardiologyComponent,
    NeurologyComponent,
    OrthopedicsComponent,
    PediatricsComponent,
    FooterComponent,
    DocdashComponent,
    CreatePatientComponent,
    MedicinelistComponent,
    AddMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DoctorLoginComponent,
    AdminLoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
