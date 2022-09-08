class Bank{
    constructor(balance){
      this.balance=balance
    }
  //withdraw
    withdraw(amount){
      if(this.balance -amount<= 0){
        message.innerText="innsufficient balance";
        console.log("insufficient fund")
        console.log("your balance:",this.balance)

        message.innerHTML="<p><h1>Message</h1>Insufficient Balance<p>"
        return
      }
      this.balance -=amount
      console.log("withdraw:",amount)
      
      console.log("New balance:",this.balance)

      
    }
    deposit(amount){
      this.balance +=amount
     
   
    }
  }
  const user = new Bank (0)
  
  //deopsit
  const btn1 = document.getElementById("Depo")
  btn1.onclick=()=>{
    user.deposit(Number(box.value))
   title.style.color="green";
  upbalance.innerHTML=`<h1>Balance:<span class="badge bg-secondary">${user.balance}</span></h1>`
console.log("you clicked deposit")
message.innerHTML=`<p><h1>Message</h1>your amount sucessfully crdited<p>`
}
  let counter=0
  const btn2 = document.getElementById("withd")
  btn2.onclick = () =>{
    user.withdraw(box.value)
    title.style.color="red";
    message.innerHTML=`<p><h1>Message</h1>money debited sucessfully</p>`
  upbalance.innerHTML=`<h1>Balance:<span class="badge bg-secondary">${user.balance}</span></h1>`}
  const box = document.getElementById("textbox")
  //balance
  const upbalance = document.getElementById("balance")
  //message
  const message =document.getElementById("message");
  console.log(message)
  //title
  const title=document.getElementById("title")
  console.log(title)
 