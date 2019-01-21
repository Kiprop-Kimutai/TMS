import { AuthService } from './../../login/auth.service';
import {Component,OnInit} from '@angular/core';
import {Users} from '../../models/users'
@Component({
    selector:'user-profile',
    templateUrl:'./user_profile.component.html',
    styleUrls:['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit{
    user:Users;
    constructor(private authService:AuthService){}
    get userDetails():UserDetails{
       // return JSON.parse(window.localStorage.getItem("userToken"));
       return this.authService.getUserDetails();
    }
    logout(){
      console.log("attempt to log out....");
      this.authService.logout();
    }
    ngOnInit(){

    }
}
export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}
