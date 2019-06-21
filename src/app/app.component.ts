import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegisterApp';

  Users = []

  username : string = "";
  surname : string = "";
  age : string = "";
  email : any;
  number : number = null;
  ValForm
   constructor(public formBuilder : FormBuilder){
     this.ValForm = formBuilder.group ({
       username : ["", Validators.required],

       surname : [ "", Validators.required],

       age : ["",Validators.required],

       email : ["", Validators.email],

       number : [null, Validators.length]

     })

   }

   addUser(){
     this.Users.push({username: this.username,surname:this.surname, age:this.age, email:this.email, number:this.number })
   }
}
export class PizzaPartyAppModule { }
