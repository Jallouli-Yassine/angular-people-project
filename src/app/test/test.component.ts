import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  booksTab = ["angular", "css", "js", "html"]
  name = "ali";
  imageUrl = "./assets/images/girl.jpg";


  usersList = [];


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      result => {
        this.usersList = result;
        console.log(this.usersList);
      },
      error => {
        console.log(error);
      });
  }

  hello(name: String) {
    alert(`hello ${name}`);
  }

}


