import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup
  constructor(private fb: FormBuilder) {
    let formControls = {

    }
    this.myForm=this.fb.group(formControls);
  }
  
  ngOnInit(): void {
  }

}
