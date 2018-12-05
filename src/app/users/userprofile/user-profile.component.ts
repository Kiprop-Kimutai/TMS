import {Component,OnInit} from '@angular/core';
import {Users} from '../../models/users'
@Component({
    selector:'user-profile',
    templateUrl:'./user_profile.component.html',
    styleUrls:['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
    user:Users;
    
    get userDetails():Users{
        return JSON.parse(window.localStorage.getItem("userToken"));
    }
    ngOnInit(){

    }
}
