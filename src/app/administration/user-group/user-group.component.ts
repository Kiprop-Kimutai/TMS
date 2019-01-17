import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector:'user-group',
  templateUrl:'./user-group.component.html',
  styleUrls:['./user-group.component.css']
})
export class UserGroupComponent implements OnInit{
  userGroup:FormGroup;
  constructor(){
    this.createUserGroup();
  }
  createUserGroup(){
    this.userGroup = new FormGroup({
      role:new FormControl('',[Validators.required])
    })
  }
  ngOnInit(){

  }
}
