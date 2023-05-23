class sonAccount {

    private balanceInit:number

    public oneDeposit(amount:number):void{
        this.balanceInit += amount;
        console.log(`Deposito di ${amount}$ effettuato.`);
        console.log(`Il saldo aggiornato è di ${this.balanceInit}$.`);
    }

    public oneWithDraw(amount:number):void {
        this.balanceInit += amount
        console.log("Ammontare depositato" + amount + "$")
    }

    public showBalance():void {
        console.log("Questo è il saldo totale del conto " + this.balanceInit + "$");
    }

    constructor(balanceInit:number = 0) {
        this.balanceInit = balanceInit;
    }
}

class motherAccount extends Account {
    
    public addInterest():void {
        this.balanceInit = this.balanceInit + (this.balanceInit * 0.1);
    }
}

let sonAccount = new sonAccount(5);
let motherAccount = new motherAccount(80);

sonAccount.oneDeposit(10);