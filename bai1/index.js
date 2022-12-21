function ex1(){
    let wage1Day = +document.getElementById("pay_1day").value
    let dayWork = +document.getElementById("work_day").value
    let notification = document.getElementById("notification")
    let wageSum = wage1Day*dayWork
    
    notification.innerHTML = wageSum
}