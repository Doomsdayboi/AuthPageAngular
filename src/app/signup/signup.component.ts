import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Msg } from '../msg';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  msg = new Msg();

  constructor(private service: FrontendService, private route: Router) { }

  ngOnInit(): void {
  }

  usersignup()
  {
    this.service.signupUserfromRemote(this.user).subscribe(data => {
      console.log("Response received");
      this.msg.msg = "Signup successful. Welcome!";
      this.route.navigate(['/']);
    },
      error => {
        console.log("Error Occurred");
        this.msg.msg = "User already exists";
      })    
  }

  login()
  {
    console.log("In login");
    this.route.navigate(['/']);
  }

}
