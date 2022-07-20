import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Msg } from '../msg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  user = new User();
  msg = new Msg();

  constructor(private service: FrontendService, private route : Router) { }

  ngOnInit(): void {
  }

  userlogin()
  {
    this.service.loginUserfromRemote(this.user).subscribe(
      data =>
      {
        console.log("Response received");        
        this.route.navigate(['/homepage']);
      },
      error =>
      {
        console.log("Error Occurred");
        this.msg.msg = "Wrong user credentials";
      })
  }

  signup()
  {
    console.log("In signup");
    this.route.navigate(['/signup']);
  }

}
