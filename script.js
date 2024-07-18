const now =new Date();
const ourTime=now.getHours()+":"+now.getMinutes()+" PM GMT+5:30";
console.log(ourTime);
// show time
const timeE1=document.querySelector(".time");
timeE1.textContent=ourTime;