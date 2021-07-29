import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm : FormGroup;

  constructor(private fb : FormBuilder) { 
    let formControls = {
      firstname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z]+"),
        Validators.minLength(3)
      ]),
      lastname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z] .'-]+"),
        Validators.minLength(3)
      ]),
      phone : new FormControl('',[
        Validators.required,
        Validators.pattern("[1-9]+"),
        Validators.minLength(8)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z] .'-]+"),
      ]),
      password : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z] .'-]+"),
        Validators.minLength(5)
      ]),
    }
    this.addUserForm = this.fb.group(formControls)
  }
  get firstname(){return this.addUserForm.get('firstname');}
  get lastname(){return this.addUserForm.get('lastname');}
  get phone(){return this.addUserForm.get('phone');}
  get email(){return this.addUserForm.get('email');}
  get password(){return this.addUserForm.get('password');}
  ngOnInit(): void {
  }
  addUser(){
    console.log(this.addUserForm.value);
  }
}
