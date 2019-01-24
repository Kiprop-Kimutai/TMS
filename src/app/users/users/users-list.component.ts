import { MessagingService } from './../../common/messaging.service';
import { AuthService } from './../../login/auth.service';
import {Component,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {paginatorFunction} from '../../common/PaginatorFunction';
import {User} from '../../models/Users';
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector:'user-list',
  templateUrl:'./users-list.component.html',
  styleUrls:['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users:User[];
  usersCopy:User[];
  paginatedUsers:User[];
  dataSource:MatTableDataSource<User>;
  displayedColumns:string[] = ['username','email','role','status'];
  dataLength:number;
  pageSize:number = 30;
  pageIndex = 0;
  userFormGroup:FormGroup;
  createUser = false;
  userRoles = [];
  constructor(private authService:AuthService,private messagingService:MessagingService){
    //this.createUserForm();
  }

  fetchAllUsers(){
    this.authService.fetchAllUsers().subscribe(resp =>{
      this.users = resp.response_message.slice(0,this.pageSize);
      this.usersCopy = resp.response_message;
      this.paginatedUsers = resp.response_message;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataLength = resp.response_message.length;
    })
  }

   filterUsers(text){
    queryString = text;
    this.users = this.usersCopy.filter(this.filterUser);

  }
   filterUser(user:User):User{
     console.log("Init..");
     console.log(user);
    let patt = new RegExp(queryString,"i");
    if(patt.test(user.email) || patt.test(user.role) || patt.test(""+user.status)){
      return user;
    }
    return;
  }

   paginateValues(pageSize:number,pageIndex:number):void{
    this.users = <User[]>paginatorFunction(this.paginatedUsers,pageSize,pageIndex);
  }
  addUser(){
    this.createUser = true;
    this.createUserForm();
    this.fetchUserRoles();
  }
  cancelUserCreation(){
    this.createUser = false
  }
  createUserForm(){
    this.userFormGroup = new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required]),
      status:new FormControl(false,[Validators.required])
    })
  }
  fetchUserRoles(){
    this.authService.fetchAllAccessGroups().subscribe(resp=>{
      console.log("====================");
      console.log(resp);
      this.userRoles = resp.response_message;
    })
  }

  registerUser(){
    this.authService.register(this.userFormGroup.getRawValue()).subscribe(resp =>{
      console.log(resp);
      if(resp.status){
        this.messagingService.alert("user registered successfully");
        this.createUser = false;
      }
      else{
        this.messagingService.alert("enrollment failed");
      }
    })
  }
  ngOnInit(){
    this.fetchAllUsers();
  }
}
var queryString = "";
