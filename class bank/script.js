class Bank{
    constructor( balance){
        this.balance = balance;
    }
    withdraw( amount ){
        //guard clause
        if(this.balance - amount < 0){
            // floorDiv.innerText = 'Insufficient balance, kindly make deposit.';
            floorDiv.innerHTML = `<h2>Insufficient balance! Your current balnce is : $${this.balance} </h2>`
            console.log({balance: this.balance});
           return
           
        }
        this.balance -= amount;
        console.log('withdrew', `$${amount}`  );
        console.log({balance: this.balance});

    }
    deposit(amount){
        if (this.balance + amount >0 ){
            floorDiv.innerHTML = ''
        }
        this.balance +=amount;
        console.log('deposit',`$${amount}`);
        console.log({balance: this.balance})
    }
}

const bishboyChecking = new Bank(0);
 
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const amountInput =document.getElementById("amount");
const balanceDiv = document.getElementById("balance");
const floorDiv = document.getElementById("floor");


depositButton.onclick = ()=> {
    const amount = Number(amountInput.value)
    bishboyChecking.deposit(Number(amountInput.value))
    balanceDiv.innerHTML = `<h2>Balance : ${bishboyChecking.balance} </h2> `                  
   
}

withdrawButton.onclick = ()=> {
    const amount = Number(amountInput.value)
    bishboyChecking.withdraw(Number(amountInput.value))
    balanceDiv.innerHTML=`<h2>Balance : ${bishboyChecking.balance} </h2>  `
}
 

 
 
 
 