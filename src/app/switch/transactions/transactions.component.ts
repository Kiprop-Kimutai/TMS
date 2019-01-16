import {Component,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TransactionFiles} from '../../models/tms_upload_files';
import {SwitchService} from '../switch.service';
import {paginatorFunction} from '../../common/PaginatorFunction';
import {Router} from '@angular/router';
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
    pageSize:number = 30;

    constructor(private switchService:SwitchService,private router:Router){

    }

    fetchTransactionFiles(){
            this.switchService.fetchTransactionFiles().subscribe(data =>{
              this.dataLength = data.response_message.length;
              this.transactionFiles=data.response_message.slice(0,this.pageSize);
              this.transactionFilesCopy=data.response_message;
              this.paginatedTransactionFiles=data.response_message;
              console.log(data);})
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
    
       paginateValues(pageSize:number,pageIndex:number):void{
        this.transactionFiles = <TransactionFiles[]>paginatorFunction(this.paginatedTransactionFiles,pageSize,pageIndex);
      }

      navigateToTransactionDetails(token:string){
        console.log("watching...");
        console.log(token);
        this.router.navigate(['/layout/switch/transactions',token]);
      }
    ngOnInit(){
        this.fetchTransactionFiles();
        this.pageSize = 15;
        this.dataSource = new  MatTableDataSource(this.transactionFiles);
        //this.dataLength = 4;
    }
}

var queryString = "";