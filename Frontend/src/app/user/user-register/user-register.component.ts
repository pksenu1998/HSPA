import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import{User} from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user:User;//this the model we use here ! i.e is interface
  userSubmitted:boolean;
  constructor(private alertyfy:AlertifyService ,private fb:FormBuilder, private userService:UserServiceService) { }

  ngOnInit() {
    // this.registrationForm=new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email:new FormControl(null, [Validators.required, Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null,[Validators.minLength(8)]),
    //   mobile:new FormControl (null,[Validators.required,Validators.minLength(10)])


    // },this.passwordMatchingValidators);
    this.createRegistrationForm();

  }

   //using form builder by angular which help to automaticlly initiize  the instance
   createRegistrationForm(){
    this.registrationForm=this.fb.group({
      userName:[null,Validators.required], //username is key ...when you go to defination key:[string]
      email:[null,[Validators.required, Validators.email],],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]


    },{validators:this.passwordMatchingValidators});
  }
//custome validatior
  passwordMatchingValidators(fg:FormGroup):Validators{
    return fg.get('password').value===fg.get('confirmPassword').value?null:{notmatched:true}
  }

   //these are getter provided by angular , Getter methods for all form controls
 //---------------------
 get userName(){
  return this.registrationForm.get('userName') as FormControl;
}
get email()
{
  return this.registrationForm.get('email') as FormControl
}
get password()
{
  return this.registrationForm.get('password') as FormControl
}
get confirmPassword()
{
  return this.registrationForm.get('confirmPassword') as FormControl
}
get mobile()
{
  return this.registrationForm.get('mobile') as FormControl
}


  //created model and using here to get data
  userData():User{
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }

  }
   //--------------------
   onSubmit()
   {
     console.log(this.registrationForm.value);
     this.userSubmitted=true;
     if(this.registrationForm.valid){
    // this.user=Object.assign(this.user,this.registrationForm.value);

     //this.userService.addUser(this.user);
     this.userService.addUser(this.userData())
     this.registrationForm.reset();
     this.userSubmitted=false;
     this.alertyfy.success('Congrats, You are successfully registererd');
     }
     else{
     this.alertyfy.error('Kindly provide the required fields');
     }
   }



}
