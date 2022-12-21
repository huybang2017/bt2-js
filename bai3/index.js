function ex3(){
    const USD_VND = 23500
    let usd = +document.getElementById("USD").value
    let moneyChange = usd * USD_VND
    let notification = document.getElementById("notification")
    notification.innerHTML = new Intl.NumberFormat('vn-VN').format(moneyChange)
}