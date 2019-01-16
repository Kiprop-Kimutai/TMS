var Transactions = function(obj){
	this.voucherno = obj[0];
	this.cardno = obj[1];
	this.iccid = obj[2];
	this.txntype = obj[3];
	this.oid = obj[4];
	this.rcpt = obj[5];
	this.voc = obj[6];
	this.ddv = obj[7];
	this.username = obj[8];
	this.date = obj[9];
	this.macaddress = obj[10];
	this.txns = obj[11];
	this.auth = obj[12];
	this.latitude = obj[13];
	this.longitude = obj[14];
}

module.exports = Transactions;