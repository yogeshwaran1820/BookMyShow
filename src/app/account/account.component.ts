import { Component } from '@angular/core';
import { MyservService } from '../myserv.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  constructor(private myse:MyservService, private route:Router) { }

  myForm:any = new FormGroup({
    oldpass:new FormControl(("")),
    newpass:new FormControl(("")),
    repass:new FormControl(("")),
  })

  details:any = []
  userDetails:any = []
  myDetails:any = []

  ngOnInit(){
    this.userDetails.push(localStorage.getItem("users") || "[]")
    console.log(this.userDetails)
    // this.details = []
    // this.details.push(this.myse.userData)
    this.details.push(JSON.parse(localStorage.getItem("currentUsers") || '[]'))
    console.log("details ",this.details)
    this.dataCheck()
  }

  movies(){

  }

  sports(){

  }

  dataCheck(){
    this.userDetails.filter((i:any)=>{
      if(i.email === this.details.email && i.pass === this.details.pass){
        this.myDetails.push(i)
      }
    })
  }

  changepass:any = false

  back(){
    this.route.navigate(['home'])
  }

  backAcc(){
    this.changepass = false
  }

  change(){
    this.changepass = true
  }
  setArray(array:any[]){
    localStorage.setItem("users",JSON.stringify(array))
  }

  passwordCheck(){
    if(this.myForm.value.oldpass === this.details[0].pass){
      if(this.myForm.value.newpass === this.myForm.value.repass){
        let array = this.userDetails ? JSON.parse(this.userDetails) : [];

        const updateIndex = array.findIndex((obj:any) => obj.pass === this.details[0].pass && obj.email=== this.details[0].email)
        if(updateIndex !== -1){
          alert("Password successfully changed !!!!")
          array[updateIndex].pass = this.myForm.value.newpass
          this.setArray(array);
        }
      }
    }
    else{
      alert("Enter Correct Password !!!")
    }    
    
  }

}
