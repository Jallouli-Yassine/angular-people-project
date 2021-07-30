import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z]+"),
        Validators.minLength(3)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z]+"),
        Validators.minLength(3)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    }
    this.addUserForm = this.fb.group(formControls)
  }
  get firstname() { return this.addUserForm.get('firstname'); }
  get lastname() { return this.addUserForm.get('lastname'); }
  get phone() { return this.addUserForm.get('phone'); }
  get email() { return this.addUserForm.get('email'); }
  get password() { return this.addUserForm.get('password'); }
  get repassword() { return this.addUserForm.get('repassword'); }

  ngOnInit(): void {
  }

  addUser() {
    let data = this.addUserForm.value;
    let user = new User(data.firstname, data.lastname, data.phone, data.email, data.password);
    console.log(user);
    this.userService.addUserD(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/poeple-list']);
      },
      err => console.log(err)
    );
  }
}
