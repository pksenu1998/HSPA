import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';

import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Route, RouterModule, Routes } from '@angular/router';

import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{UserServiceService} from './services/user-service.service';
import {AlertifyService} from './services/alertify.service';
import {AuthService} from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {TabsModule}  from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import { Property } from 'src/app/model/property';
const appRoutes: Routes = [
  //no need to give diff components inside component inseted here make array and call them in href in html file
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent }, //creating the javascript object to map all the component using Routing( Dictionary concept)
  {path:'rent-property', component:PropertyListComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'user-register', component:UserRegisterComponent},
  {path:'**', component:PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), //now application know route exists
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [HousingService,UserServiceService,AlertifyService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
