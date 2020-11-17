class Customer{
    id;
    name;
    account;
    
    constructor(id, name, account){
        this.id = id;
        this.name = name;
        this.account = account;
    }

    toString()
    {
        let tostring = "id=" + this.id + " " + "name=" + this.name + " " +  this.account.toString();

        return tostring;
     }
}

class Account{
    balance;
    
    constructor(balance){
        this.balance = balance;
    }
    
    toString()
    {
        let tostring = "balance=" + this.balance;

        return tostring;
     }
}

class PrimeAccount extends Account{
    supercoins;
    
    constructor(balance, supercoins){
         super(balance);
         this.supercoins = supercoins;
     }
     toString()
    {
        let tostring = "balance=" + this.balance + " " + "supercoins=" + this.supercoins ;

        return tostring;
     }

}

let account1 = new Account(3456);

let account2 = new Account(3254.89);

let customer1 = new Customer(1, "saksham", account1);
var customer2 = new Customer(2, "sushil", account2);

let primeAccount1 = new PrimeAccount(4567, 450);

let primeAccount2 = new PrimeAccount(5000, 678);

let customer3 = new Customer(3,"sahil", primeAccount1 );
let customer4 = new Customer(4,"narendra", primeAccount2 );

let array = [customer1,customer2];
array.push(customer3);
array.push(customer4);

for (let customer of array) {
    console.log(customer.toString());
    
}



