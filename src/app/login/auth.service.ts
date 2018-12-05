import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import {delay,tap} from 'rxjs/operators';
import {Users} from '../models/Users';
@Injectable()
export class AuthService{
  isLoggedIn:boolean = false;
  loggedInuser:string = '';
  redirectUrl:string = "";
    login(username:string,password:string):Observable<boolean>{
      console.log("Trying to login....");
      this.loggedInuser = username;
      window.localStorage.setItem("userToken",JSON.stringify(user));
      //return Observable.of(true).pipe(delay(1000),tap(val=>isLoggedIn=true));
      return of(true).pipe(delay(100),tap(() => this.isLoggedIn =true));
    }

    public getUserDetails(){
      return localStorage.getItem("userToken");
    }
    logout():void{
      this.isLoggedIn = false;
      localStorage.removeItem("userToken");
    }

}

const user:Users = new Users(0,"alex","alexander","waiganjo","alexander@scope.wfp.org","");
