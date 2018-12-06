import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TransactionFiles} from '../../models/tms_upload_files';
import {SwitchService} from '../switch.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { resolve } from 'url';
@Component({
    selector:'transaction-details',
    templateUrl:'./transaction-details.component.html',
    styleUrls:['./transaction-details.component.css']
})
export class TransactionDetailComponent implements OnInit{
    transactionFile:TransactionFiles;
    transactionFileCopy:TransactionFiles;
    transactionFilesFormGroup:FormGroup;
    showtxnFormGroup = false;
    flagOptions = ["P","U","F","D"];
    constructor(private route:ActivatedRoute,private switchService:SwitchService){
       // this.createFormGroup();
    }
    createFormGroup(){
        this.transactionFilesFormGroup = new FormGroup({
            macAddress:new FormControl({value:this.transactionFile.macAddress,disabled:true},[Validators.required]),
            dateUploaded:new FormControl({value:this.transactionFile.dateUploaded,disabled:true},[Validators.required]),
            filename:new FormControl(this.transactionFile.filename,[Validators.required]),
            token:new FormControl({value:this.transactionFile.token,disabled:true},[Validators.required]),
            flag:new FormControl({value:this.transactionFile.flag},[Validators.required]),
            valueTransactionCount:new FormControl(this.transactionFile.valueTransactionCount,[Validators.required]),
            valueTransactionAmount:new FormControl(this.transactionFile.valueTransactionAmount,[Validators.required]),
            valueTransactionVoidCount:new FormControl(this.transactionFile.valueTransactionVoidCount,[Validators.required]),
            valueTransactionVoidAmount:new FormControl(this.transactionFile.valueTransactionVoidAmount,[Validators.required]),
            commodityTransactionCount:new FormControl(this.transactionFile.commodityTransactionCount,[Validators.required]),
            commodityTransactionAmount:new FormControl(this.transactionFile.commodityTransactionAmount,[Validators.required]),
            commodityTransactionVoidCount:new FormControl(this.transactionFile.commodityTransactionVoidCount,[Validators.required]),
            commodityTransactionVoidAmount:new FormControl(this.transactionFile.commodityTransactionVoidAmount,[Validators.required]),
            firstReceiptNo:new FormControl(this.transactionFile.firstReceiptNo,Validators.required),
            lastReceiptNo:new FormControl(this.transactionFile.lastReceiptNo,Validators.required)

        })
    }
    fetchDeviceByToken(token:string){
        console.log("watch here..");
        new Promise((resolve,reject) =>{
            resolve(this.switchService.fetchTransactionFileByToken(token).subscribe(data =>{console.log(this.transactionFile),this.transactionFile = data;this.transactionFileCopy = data;console.log(data)})     )
        }).then((done)=>{
            this.createFormGroup();
            this.showtxnFormGroup = true;
        })
        //this.switchService.fetchTransactionFileByToken(token).subscribe(data =>{console.log(this.transactionFile),this.transactionFile = data;this.transactionFileCopy = data;console.log(data)});
    }

    updateTransaction(){

    }
    ngOnInit(){
        this.fetchDeviceByToken(this.route.snapshot.paramMap.get("token"));

    }
}