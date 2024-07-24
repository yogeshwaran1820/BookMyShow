import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  myForm:any = new FormGroup({
    name:new FormControl((""),[Validators.required,Validators.minLength(3),
      Validators.pattern(/^[A-Z].+$/)
    ]),
    phn:new FormControl((""),[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl((""),[Validators.required,Validators.minLength(8),Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$]')
    ]),
    pass:new FormControl((""),[Validators.required,Validators.minLength(4),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).+$/)
    ]),
  })

  userDetails:any = []

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

  submit(){

    // let email = localStorage.setItem("email",this.myForm.value.email)
    // let password = localStorage.setItem("pass",this.myForm.value.pass)

    let values = {
      name:this.myForm.value.name,
      phn:this.myForm.value.phn,
      email:this.myForm.value.email, 
      pass:this.myForm.value.pass,
    }
    this.userDetails = JSON.parse(localStorage.getItem('users') || '[]')

    const existingUsers = this.userDetails.find((i:any)=> i.email === this.myForm.value.email)

    if(existingUsers){
      alert("Already Existing !!!!")
    }

    this.userDetails.push(values)  

    localStorage.setItem("users",JSON.stringify(this.userDetails))
    console.log(this.userDetails)

  }

}
