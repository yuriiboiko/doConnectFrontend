import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {}

  constructor(private router:Router){

  }

  goToHomePage(){
    this.router.navigate(['']);
  }
  
  goToLoginPage(){
    this.router.navigate(['login']);
  }
}
