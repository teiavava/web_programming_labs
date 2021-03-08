var currentdate = new Date(); 
var time = "Time: "
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds() 

var date = "Date: "
            + currentdate.getDate() + "-"
            + (currentdate.getMonth() + 1)  + "-" 
            + currentdate.getFullYear()

console.log(time)
console.log(date)