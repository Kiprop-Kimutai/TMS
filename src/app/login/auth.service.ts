import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import {delay,tap} from 'rxjs/operators';
import {Users} from '../models/Users';
import {Router} from '@angular/router';
export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
  role?:string;
  status?:string;
}
@Injectable()
export class AuthService{
  API = "http://localhost:2000/api";
  constructor(private http:HttpClient,private router:Router){}
  //isLoggedIn:boolean = false;
  loggedInuser:string = '';
  redirectUrl:string = "";
  role:string;
  token:string;
    /*login(username:string,password:string):Observable<boolean>{
      console.log("Trying to login....");
      this.loggedInuser = username;
      window.localStorage.setItem("userToken",JSON.stringify(user));
      this.setUseRole('service desk'); //mock role returned in login token data
      return of(true).pipe(delay(100),tap(() => this.isLoggedIn =true));
    }*/

    public saveToken(token:string):void{
      localStorage.setItem('userToken',token);
      this.token = token;
    }
    public getToken():string{
      if(!this.token){
        this.token = localStorage.getItem('userToken');
      }
      return this.token;
    }
    /*public getUserDetails(){
      return localStorage.getItem("userToken");
    }*/
    public setUserRole(role){
      window.sessionStorage.setItem('role',role);
    }
    public getUserRole():string{
      if(!this.role){
          return window.sessionStorage.getItem('role');
      }
      return this.role;
    }
    public logout():void{
      this.token = '';
      window.localStorage.removeItem('userToken');
      window.sessionStorage.removeItem("role");
      this.router.navigateByUrl('/');
    }

    public getUserDetails():UserDetails{
        const token = this.getToken();
        let payload;
        if(token){
          payload = token.split('.')[1];
          payload = window.atob(payload);
          return JSON.parse(payload);
        }
        else{
          return null;
        }
    }

    public isLoggedIn(): boolean {
      const user = this.getUserDetails();
      if (user) {
        return user.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }

    public register(user:TokenPayload):Observable<any>{
      let headers = new HttpHeaders({'Content-Type':'application/json'});
      console.log(user);
      return this.http.post(`${this.API}/register`,user,{headers:headers});
    }

    public login(user:TokenPayload):Observable<any>{
      let headers = new HttpHeaders({'Content-Type':'application/json'});
      console.log(user);
      return this.http.post(`${this.API}/login`,user,{headers:headers});
    }

    public profile():Observable<any>{
      return this.http.get(`${this.API}/profile`,{headers:{Authorization:`Bearer ${this.getToken()}`}});
    }
    public createUserGroup(usergroup):Observable<any>{
      let headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.post(`${this.API}/accesscontrol/newaccessgroup`,{usergroup:usergroup},{headers:headers});
    }

    public fetchUserGroupByRole(role):Observable<any>{
      let httpheaders = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.post(`${this.API}/accesscontrol/fetchaccessgroupbyrole`,{role:role},{headers:httpheaders});
    }

    public fetchAllAccessGroups():Observable<any>{
      return this.http.get(`${this.API}/accesscontrol/fetchallaccessgroups`);
    }

    public fetchAllUsers():Observable<any>{
      return this.http.get(`${this.API}/users/fetchusers`);
    }

}

const user:Users = new Users(0,"alex","alexander","waiganjo","alexander@scope.wfp.org","");
