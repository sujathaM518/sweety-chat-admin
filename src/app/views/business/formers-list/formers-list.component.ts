import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'app/shared/services/auth/business.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-formers-list',
  templateUrl: './formers-list.component.html',
  styleUrls: ['./formers-list.component.scss']
})
export class FormersListComponent implements OnInit {
  formerslist: any;
  districts: any;
  distId: any;
  formers: any;
  show: boolean = false;
  singlrfarmerdata: any;
  showviewfarmer: boolean = true;
  userId: any;
  approvestatus: any;
  clientList: any;

  constructor(private business:BusinessService,private listService: ServicesService) { }

  ngOnInit(): void {
    this.getformersList()
    const distId= "2"
     this.business.DistrictFarmers(distId).subscribe(res=>{
       console.log("DistrictFarmers",res)
     })

     this.business.getmasterdata().subscribe(data=>{
       console.log("masterdata",data.response.districts)
       this.districts = data.response.districts
     })

     this.getClientsData();
     this.getUsersData();
  }

  getClientsData() {
    console.log("clients Data");
    let type = 2;
    this.listService.getClientList(type).subscribe((resp)=> {
      console.log("clientsListttt",resp);
      this.clientList = resp.data.users;
    })
  }

  getUsersData() {
    console.log("users Data");
  }

  searchdistrict(q){
    console.log("district",q)
    this.distId = q
  }
  viewfarmerdetails(p){
    this.singlrfarmerdata = p
    this.showviewfarmer = false;
    this.userId = p.userId,
    this.approvestatus =p.userApproveInfo.approveStatus
    console.log("approve",this.approvestatus)
    const obj={
      userId : p.userId
    }
    this.business.userprofile(obj).subscribe(res=>{
      console.log("userprofile",res)
      this.singlrfarmerdata = res
    })


  }
  serach(){
    const array = this.formerslist.filter(res=>{ return res.district.distId === this.distId
      
    })
    console.log("array",array)
    this.show = true
    this.formers = array


  }
  getformersList(){
    this.business.farmersList().subscribe(res=>{
      console.log("formers",res)
      this.formerslist = res.result
      console.log("certificate",res.result[0].certificates[0].certificate)
    })
  }
  All(){
    this.getformersList()
    this.show = false
  }
  back(){
  this.showviewfarmer = true
  }
  approved(){
    
    // alert("you are Successfully approved...")
    const obj ={
      userId : this.userId,
      approveStatus : "1"
    }
    console.log("approveobj",obj)
    this.business.userapprove(obj).subscribe(res=>{
      console.log("approve",res)
    })
    this.showviewfarmer = true
    this.getformersList()

  }

}
