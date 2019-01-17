import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TransactionFiles} from '../../models/tms_upload_files';
import {SwitchService} from '../switch.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { resolve } from 'url';
import {MatTableDataSource} from '@angular/material/table';
import {paginatorFunction} from '../../common/PaginatorFunction';
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
    showtransactions = false;
    flagOptions = ["P","U","F","D"];
    dataSource:MatTableDataSource<any>;
    transactions:any;
    transactionsCopy:any;
    paginatedTransactions:any;
    //displayedColumns = ['voucherno','cardno','iccid','txntype','oid','rcpt','voc','ddv','username','date','macaddress','txns','auth','latitude','longitude'];
    displayedColumns = ['voucherno','cardno','iccid','rcpt','username','date','txns','latitude','longitude'];
    pageIndex:number = 0;
    dataLength:number;
    pageSize:number = 30;
    constructor(private route:ActivatedRoute,private switchService:SwitchService){
       // this.createFormGroup();
    }
    createFormGroup(){
        this.transactionFilesFormGroup = new FormGroup({
            macAddress:new FormControl({value:this.transactionFile.macAddress,disabled:true},[Validators.required]),
            dateUploaded:new FormControl({value:this.transactionFile.dateUploaded,disabled:true},[Validators.required]),
            filename:new FormControl({value:this.transactionFile.filename,diabled:true},[Validators.required]),
            token:new FormControl({value:this.transactionFile.token,disabled:true},[Validators.required]),
            flag:new FormControl({value:this.transactionFile.flag},[Validators.required]),
            valueTransactionCount:new FormControl(this.transactionFile.valueTransactionCount,[Validators.required]),
            valueTransactionAmount:new FormControl({value:this.transactionFile.valueTransactionAmount,disabled:true},[Validators.required]),
            valueTransactionVoidCount:new FormControl(this.transactionFile.valueTransactionVoidCount,[Validators.required]),
            valueTransactionVoidAmount:new FormControl(this.transactionFile.valueTransactionVoidAmount,[Validators.required]),
            commodityTransactionCount:new FormControl({value:this.transactionFile.commodityTransactionCount,disabled:true},[Validators.required]),
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
            this.fetchTransactions(this.transactionFilesFormGroup.get('filename').value);
        })
        //this.switchService.fetchTransactionFileByToken(token).subscribe(data =>{console.log(this.transactionFile),this.transactionFile = data;this.transactionFileCopy = data;console.log(data)});
    }

    updateTransaction(){

    }

    fetchTransactions(filename:string){
        new Promise((resolve,reject) =>{
            resolve(this.switchService.fetchBatchTransactionsByFilename(filename).subscribe(data =>{
                this.transactions = data.response_message.slice(0,this.pageSize);
                this.dataLength = data.response_message.length;
                this.transactionsCopy = data.response_message;
                this.paginatedTransactions = data.response_message;
                console.log(data);}))
        }).then(done=>{
            this.showtransactions = true;
        })
        //this.switchService.fetchBatchTransactionsByFilename(filename).subscribe(data =>{this.transactions = data.response_message;console.log(data);});
    }

    filterTransactions(text){
        queryString = text;
        this.transactions = this.transactionsCopy.filter(this.filterTransaction).slice(0,this.pageSize);
    }
    filterTransaction(transaction):any{
        let patt = new RegExp(queryString,"i");
        if(patt.test(transaction.voucherno) || patt.test(transaction.cardno) || patt.test(transaction.iccid) || patt.test(transaction.txntype) || patt.test(transaction.oid) ||
           patt.test(transaction.rcpt) || patt.test(transaction.voc) || patt.test(transaction.ddv) || patt.test(transaction.username || patt.test(transaction.date) ||
           patt.test(transaction.macaddress) || patt.test(transaction.txns) || patt.test(transaction.auth) || patt.test(transaction.latitude) || patt.test(transaction.longitude))){
          return transaction;
        }
        return;
    }
    private paginateValues(pageSize:number,pageIndex:number):void{
        this.transactions = <TransactionFiles[]>paginatorFunction(this.paginatedTransactions,pageSize,pageIndex);
        console.log(this.transactions);
    }
    private updateTxn(){
      console.log("will update txn");
    }
    ngOnInit(){
        this.fetchDeviceByToken(this.route.snapshot.paramMap.get("token"));

    }
}
var queryString = "";
