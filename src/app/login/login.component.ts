import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from '../model/jwtRequest';
import { LoginService } from '../service/loginService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: JwtRequest= new JwtRequest();

  constructor(private loginService:LoginService, private router:Router){

  }
  ngOnInit(): void {}
  

  formSubmit() {
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.hopePage();
      },
      error: (err) => console.log(err)
    });
  }

  hopePage(){
    this.router.navigate(['']);
  }

  goToRegisterPage() {
    this.router.navigate(['register']);

  }
  goToHomePage(){
    this.router.navigate(['']);
  }



}
