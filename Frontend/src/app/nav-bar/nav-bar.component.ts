import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  loggedinUser:string;
  constructor(private alertify:AlertifyService) {}

  ngOnInit() {}
  loggedin() {
    this.loggedinUser=localStorage.getItem('token');
   return  this.loggedinUser;//if the user is logged in it will contain a value otherwise it will retrun undefined
  }
  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success("You are logged out"!);

  }
}
