import { Component, OnInit } from '@angular/core';
import {Dashboard} from './dashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   
   dashboard: Dashboard = {
    Id: 1,
    Age: 32,
    Home: "Homepage",
    Class: "SS1",
    Department: "Science",
    FirstName: "",
    LastName: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}


 