import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersList: any;

  constructor(private listService: ServicesService) { }

  ngOnInit(): void {
    this.loadUsersList();
  }

  loadUsersList() {
    console.log("clients Data");
    let type = 1;
    this.listService.getClientList(type).subscribe((resp)=> {
      console.log("clientsListttt",resp);
      this.usersList = resp.data.users;
    })
  }

}
