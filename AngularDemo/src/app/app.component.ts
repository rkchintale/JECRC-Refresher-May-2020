import { Component } from '@angular/core';
import { Person } from "./Person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  username: string;
  password: string;
  message: string;
  c: string;
  isLoggedIn: boolean = false;

  onLoginClick()
  {
    if (this.username == "jecrc" && this.password == "123")
    {
      this.message = "Success";
      this.c = "green";
      this.isLoggedIn= true;
    }
    else
    {
      this.message = "Invalid login, please try again";
      this.c = "red";
      this.isLoggedIn = false;
    }

    this.username = "harsha";
  }



  /* Person */
  persons: Person[] = [];

  constructor()
  {
    this.persons = [
      new Person("John", "john@gmail.com"),
      new Person("Allen", "allen@gmail.com"),
      new Person("Jones", "jones@gmail.com"),
      new Person("Scott", "scott@gmail.com")
    ];
  }
}
