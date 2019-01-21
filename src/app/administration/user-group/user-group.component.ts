import { MessagingService } from './../../common/messaging.service';
import { AuthService } from './../../login/auth.service';
import {Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector:'user-group',
  templateUrl:'./user-group.component.html',
  styleUrls:['./user-group.component.css']
})
export class UserGroupComponent implements OnInit{
  acessFormGroup:FormGroup;
  dashboardFormGroup:FormGroup;
  adminFormGroup:FormGroup;
  usersFormGroup:FormGroup;
  usergroupFormGroup:FormGroup;
  switchFormGroup:FormGroup;
  transactionsFormGroup:FormGroup;
  zsequenceFormGroup:FormGroup;
  responsetoposFormGroup:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService,private messagingService:MessagingService){
    this.createDashboardFormGroup();
    this.createadminFormGroup();
    this.createSwitchFormGroup();
    this.createUserGroup();
  }
  createUserGroup(){
    this.acessFormGroup = new FormGroup({
      role:new FormControl('',[Validators.required]),
      menus:this.fb.array([this.dashboardFormGroup,this.adminFormGroup,this.switchFormGroup])
    })
  }
/****************switch****************** */
  createTransactionsFormGroup(){
    this.transactionsFormGroup = this.fb.group({
      name:new FormControl('transactions',[Validators.required]),
      label:new FormControl('Transactions',[Validators.required]),
      type:new FormControl('link',[Validators.required]),
      active:new FormControl(false,[Validators.required])
    })
  }
  createZSequenceFormGroup(){
    this.zsequenceFormGroup =  this.fb.group({
      name:new FormControl('zsequence',[Validators.required]),
      label:new FormControl('Zsequence',[Validators.required]),
      type:new FormControl('link',[Validators.required]),
      active:new FormControl(false,[Validators.required])
    })
  }
  createResponseToPOSFormGroup(){
    this.responsetoposFormGroup =  this.fb.group({
      name:new FormControl('responsetopos',[Validators.required]),
      label:new FormControl('Scope Response',[Validators.required]),
      type:new FormControl('link',[Validators.required]),
      active:new FormControl(false,[Validators.required])
    })
  }
  createSwitchFormGroup(){
    this.createTransactionsFormGroup();
    this.createZSequenceFormGroup();
    this.createResponseToPOSFormGroup();
    this.switchFormGroup =  this.fb.group({
      name:new FormControl('switch',[Validators.required]),
      label:new FormControl('Switch',[Validators.required]),
      icon:new FormControl('dashboard',[Validators.required]),
      type:new FormControl('parent',[Validators.required]),
      children:this.fb.array([this.transactionsFormGroup,this.zsequenceFormGroup,this.responsetoposFormGroup]),
      active:new FormControl(false,[Validators.required])
    })
  }
  setSwitchFormGroupStatus(){
    if(this.transactionsFormGroup.get('active').value == true || this.zsequenceFormGroup.get('active').value == true || this.responsetoposFormGroup.get('active').value == true ){
      this.switchFormGroup.get('active').setValue(true);
    }
    else{
      this.switchFormGroup.get('active').setValue(false);
    }
  }
/**************administration*********** */
  createUsersFormGroup(){
    this.usersFormGroup =  this.fb.group({
      name:new FormControl('users'),
      label:new FormControl('Users'),
      type:new FormControl('link'),
      active:new FormControl(false)
    })
  }

  createUserGroupFormGroup(){
    this.usergroupFormGroup =  this.fb.group({
      name:new FormControl('user-group'),
      label:new FormControl('User Group'),
      type:new FormControl('link'),
      active:new FormControl(false)
    })
  }

  createadminFormGroup(){
    this.createUsersFormGroup();
    this.createUserGroupFormGroup();
    this.adminFormGroup =  this.fb.group({
      name:new FormControl('admin'),
      label:new FormControl('Administration'),
      icon:new FormControl('dashboard'),
      type:new FormControl('parent'),
      children:this.fb.array([this.usersFormGroup,this.usergroupFormGroup]),
      active:new FormControl(false)
    })
  }
  setAdminFormGroupStatus(){
    if(this.usersFormGroup.get('active').value == true || this.usergroupFormGroup.get('active').value == true){
      this.adminFormGroup.get('active').setValue(true);
    }
    else{
      this.adminFormGroup.get('active').setValue(false);
    }
  }
  /***************dashboard**************** */

  createDashboardFormGroup(){
    this.dashboardFormGroup = this.fb.group({
      name:new FormControl('dashboard'),
      label:new FormControl('Dashboard'),
      icon:new FormControl('dashboard'),
      type:new FormControl('link'),
      active:new FormControl(false)
    })
  }
  testFormGroup(){
    console.log(this.acessFormGroup.getRawValue());
    this.authService.createUserGroup(this.acessFormGroup.getRawValue()).subscribe(resp=>{
      console.log(resp);
      if(resp.response_code){
        this.messagingService.alert(resp.response_message);
      }
      else{
        this.messagingService.alert(resp.response_message);
      }
    })
  }
  ngOnInit(){

  }
}
