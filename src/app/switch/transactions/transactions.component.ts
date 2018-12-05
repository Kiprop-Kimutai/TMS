import {Component,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TransactionFiles} from '../../models/tms_upload_files';
import {SwitchService} from '../switch.service';
import {paginatorFunction} from '../../common/PaginatorFunction';
@Component({
    selector:'transactions',
    templateUrl:'./transactions.component.html',
    styleUrls:['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
    dataSource:MatTableDataSource<TransactionFiles>;
    transactionFiles:TransactionFiles[];
    transactionFilesCopy:TransactionFiles[];
    paginatedTransactionFiles:TransactionFiles[];
    displayedColumns:String[] = ['macAddress','dateUploaded','filename','token','flag','valueTransactionCount','valueTransactionAmount',
                                'valueTransactionVoidCount','valueTransactionVoidAmount','commodityTransactionCount','commodityTransactionAmount','commodityTransactionVoidCount',
                            'commodityTransactionVoidAmount','lastReceiptNo'];
    pageIndex:number = 0;
    dataLength:number;
    pageSize:number;

    constructor(private switchService:SwitchService){

    }

    fetchTransactionFiles(){
            this.switchService.fetchTransactionFiles().subscribe(data =>{this.transactionFiles=data.response_message;this.transactionFilesCopy=data.response_message;this.paginatedTransactionFiles=data.response_message;console.log(data);})
    }
    private filterTransactionFiles(text){
        queryString = text;
        this.transactionFiles = this.transactionFilesCopy.filter(this.filterTransactionFile);
    
      }
      private filterTransactionFile(transactionfile:TransactionFiles):TransactionFiles{
        let patt = new RegExp(queryString,"i");
        if(patt.test(transactionfile.macAddress) || patt.test(transactionfile.dateUploaded) || patt.test(transactionfile.filename) || patt.test(transactionfile.token) || patt.test(transactionfile.flag) ){
          return transactionfile;
        }
        return;
    
      }
    
      private paginateValues(pageSize:number,pageIndex:number):void{
        this.transactionFiles = <TransactionFiles[]>paginatorFunction(this.paginatedTransactionFiles,pageSize,pageIndex);
      }
    ngOnInit(){
        this.fetchTransactionFiles();
        this.pageSize = 10;
        this.dataSource = new  MatTableDataSource(this.transactionFiles);
        this.dataLength = 4;
    }
}

var queryString = "";