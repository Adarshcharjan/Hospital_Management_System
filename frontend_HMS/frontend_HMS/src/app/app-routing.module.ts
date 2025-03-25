import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { OrthopedicsComponent } from './orthopedics/orthopedics.component';
import { PediatricsComponent } from './pediatrics/pediatrics.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DocauthgaurdService } from './docauthgaurd.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path : 'admin', component:AdmindashComponent , canActivate:[AdminauthguardService]},
{path:'appointments',component:AppointmentComponent ,  canActivate:[AdminauthguardService]},
{path:'create_appointment',component:CreateAppointmentComponent,  canActivate:[AdminauthguardService]},
{path:'home',component:HomeComponent},
{path:'', redirectTo:'home',pathMatch:'full' },
{ path: 'specialties', component: SpecialtiesComponent },
{ path: 'cardiology', component: CardiologyComponent },
{ path: 'neurology', component: NeurologyComponent },
{ path: 'orthopedics', component: OrthopedicsComponent },
{ path: 'pediatrics', component: PediatricsComponent },
{path:'docdash',component:DocdashComponent,canActivate:[DocauthgaurdService]},
{path:'create-patient',component:CreatePatientComponent,canActivate:[DocauthgaurdService]},
{ path:'view-medicine',component:MedicinelistComponent ,canActivate:[DocauthgaurdService]},
{ path:'add-medicine',component:AddMedicineComponent ,canActivate:[DocauthgaurdService]},
{ path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DocauthgaurdService]},
{ path:'view-patient/:id',component:ViewPatientComponent ,canActivate:[DocauthgaurdService]},
{ path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DocauthgaurdService] },
{ path:'doctor-login', component:DoctorLoginComponent},
{ path:'admin-login',component:AdminLoginComponent},
{ path: 'login',component:LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
