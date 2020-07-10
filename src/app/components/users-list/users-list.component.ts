import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  onClick(){
  }

  constructor() {
   }

  ngOnInit() {
  }

  /*Users:any=[
    {name:"Fernando",lastname:"Chavez",email:"fernando@gmail.com",phone:"6311475421"},
    {name:"Felipe",lastname:"Gutierrez",email:"felipe@gmail.com",phone:"6312003025"},
  ];

  EditUser(data) : void{
    console.log(userInfo);
  }*/

}
