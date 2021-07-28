import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-poeple-list',
  templateUrl: './poeple-list.component.html',
  styleUrls: ['./poeple-list.component.css']
})
export class PoepleListComponent implements OnInit {



  constructor(private userService: UserService) { }

  poepleList = [{
    "role": "user",
    "_id": "60fec2ac4eddcd0017c07749",
    "firstname": "nesrine",
    "lastname": "amdouni",
    "phone": "52905456",
    "email": "ee5d314b3b@4g3c1b5.com",
    "__v": 0
  }
  ];

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      result => {
        console.log("result");
        this.poepleList = result;
      },
      error => {
        console.log("error");
      }
    )
  }
  deletePerson(person: any) {
    let index = this.poepleList.indexOf(person);
    this.poepleList.splice(index, 1);
    this.userService.deleteUser(person._id).subscribe(res => console.log(res), err => console.log("err"));
  }

}
