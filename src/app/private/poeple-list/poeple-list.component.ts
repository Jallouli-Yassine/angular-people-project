import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-poeple-list',
  templateUrl: './poeple-list.component.html',
  styleUrls: ['./poeple-list.component.css']
})
export class PoepleListComponent implements OnInit {



  constructor(private userService: UserService) { }

  poepleList = [];

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      result => {
        console.log(result);
        this.poepleList = result.users;
      },
      error => {
        console.log(error);
      }
    )
  }

  deletePerson(person) {
    let index = this.poepleList.indexOf(person);
    this.poepleList.splice(index, 1);
    this.userService.deleteUser(person._id).subscribe(res => console.log(res), err => console.log("err"));
  }
  
  deleteAllUsers() {
    let reponse;
    do{
       reponse = Number(prompt('kenek met2aked amel 1 makenech amel 0'));
    }while(reponse!=1 && reponse !=0);
   
    if (reponse === 1) {
      this.poepleList.splice(0, this.poepleList.length);
      this.userService.deleteAllUsers().subscribe(res => console.log(res), err => console.log(err));
      alert('user table lkol tfas5et');
    } else
      alert('matfasa5 had!');
  }
}
