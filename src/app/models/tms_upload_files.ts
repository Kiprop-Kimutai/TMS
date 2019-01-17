export class TransactionFiles{
    macAddress:string;
    dateUploaded:string;
    filename?:string;
    token?:string;
    flag:string;
    valueTransactionCount:string;
    valueTransactionAmount:string;
    valueTransactionVoidCount:string;
    valueTransactionVoidAmount:string;
    commodityTransactionCount:String;
    commodityTransactionAmount:string
    commodityTransactionVoidCount:string;
    commodityTransactionVoidAmount:string;
    firstReceiptNo:string;
    lastReceiptNo:string;

    constructor(macAddress,dateUploaded,filename,token,flag,valueTransactionCount,valueTransactionAmount,valueTransactionVoidCount,
        valueTransactionVoidAmount,commodityTransactionCount,commodityTransactionAmount,commodityTransactionVoidCount,commodityTransactionVoidAmount,firstReceiptNo,lastReceiptNo){
            this.macAddress=macAddress;
            this.dateUploaded=dateUploaded;
            this.filename =filename;
            this.token = token;
            this.flag=flag;
            this.valueTransactionCount=valueTransactionCount;
            this.valueTransactionAmount=valueTransactionAmount;
            this.valueTransactionVoidCount=valueTransactionVoidCount;
            this.valueTransactionVoidAmount=valueTransactionVoidAmount;
            this.commodityTransactionCount=commodityTransactionCount;
            this.commodityTransactionAmount=commodityTransactionAmount;
            this.commodityTransactionVoidCount=commodityTransactionVoidCount;
            this.commodityTransactionVoidAmount=commodityTransactionVoidAmount;
            this.firstReceiptNo=firstReceiptNo;
            this.lastReceiptNo=lastReceiptNo;
        }
}
