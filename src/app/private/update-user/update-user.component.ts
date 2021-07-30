import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
    let formControls = {
      firstname: new FormControl(),
      lastname: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    }
    this.updateUserForm = this.fb.group(formControls);
  }

  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    this.userService.getOneUser(idUser).subscribe(
      res => {
        let user = res.user;
        console.log(res.user);
        this.updateUserForm.patchValue({
          firstname: user.firstname,
          lastname: user.lastname,
          phone: user.phone,
          email: user.email,
        })
      },
      err => {
        console.log(err);
      });
  }

  updateUser() {

  }
}
