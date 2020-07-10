import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  /*onClick(){
  }*/

  constructor(
    private fb:FormBuilder,
    private http:HttpClientModule,
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      lastname: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
    });
  }

  addUser(){
    console.log(this.userForm);
  }

  /*onSubmit(data){
    console.log(data);
  }*/

  /*addUser(){
    this.http.({
      name:this.name,
      lastname:this.lastname,
      email:this.email,
      phone:this.phone
    })
  }*/

}
