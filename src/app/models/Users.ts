export class Users{
  constructor(public id:number,public username:string,public firstname:string,public lastname:string,public email:string,public password:string){

  }

}

export interface User{
  username:string;
  email:string;
  role:string;
  status:boolean
}
