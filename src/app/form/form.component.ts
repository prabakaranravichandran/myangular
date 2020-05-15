import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder){
    this.formCreate()
  }
    aboutForm:FormGroup;
    submitted = false;
    get getData(){return this.aboutForm.controls}
    formCreate(){
      this.aboutForm = this.fb.group({
        "Name":['',Validators.required],
        "Email":['',[Validators.required,Validators.email]],
        "Password":['',[Validators.required,Validators.minLength(8)]],
        "MobileNumber":['',[Validators.required,Validators.pattern("((\\+91-?)|0)?[0-9]{10}$")]]
      })
    }
    onSubmit(){
      this.submitted = true
      //alert('Name ' + (this.getData.Name.value)+ "\n" +'Email ' + (this.getData.Email.value))
     // alert('Success '+ JSON.stringify(this.aboutForm.value) )
    }

  ngOnInit(): void {
  }

}
