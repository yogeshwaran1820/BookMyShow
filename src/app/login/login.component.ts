import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { concatAll } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginComponent {

  constructor(private router:Router, private myser:MyservService) { }

  myForm:any = new FormGroup({
    email:new FormControl((""),[Validators.required,Validators.minLength(10),Validators.email]),
    pass:new FormControl((""),[Validators.required,Validators.minLength(4),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).+$/)
    ]),
  })

  ngOnInit(){
  }

  diss(){
    if(this.myForm.controls['email'].errors?.['email'] || this.myForm.controls['pass'].errors?.['pattern']){
      return true
    }
    else{
      return false
    }
  }
  result:any = []



  submit(){
    // localStorage.setItem("userEmail",this.myForm.value.email)
    // localStorage.setItem("userpassword",this.myForm.value.pass)
    // console.log(this.myForm.value.email)

    // let emailid = localStorage.getItem("email")
    // let password  = localStorage.getItem("pass")
    // if(emailid == this.myForm.value.email || password == this.myForm.value.pass){
    //   this.router.navigate(['home'])
    // }
    // else{
    //   alert("invalid email and password !")
    //   this.myForm.reset()
    // }

    let userDetails = JSON.parse(localStorage.getItem("users") || '[]')

    console.log(userDetails)

    var users = userDetails.find((i:any)=> i.email === this.myForm.value.email  && i.pass === this.myForm.value.pass)
    
  
    if(users){
      alert("login successfully")
      this.router.navigate(['home'])
      let currentLogin = localStorage.setItem("currentUsers",JSON.stringify(users))
      // this.myser.userData = currentLogin
    }
    else{
      alert("login failed")
    }
  }

}
