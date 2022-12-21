function ex5() {
    let num = +document.getElementById("num").value
    // hàng đơn vị
    let numUnit = num % 10
    // hàng chục
    let numDozen = Math.floor(num / 10)
    // tổng các kí sô
    let sum = numUnit + numDozen
    let notification = document.getElementById("notification").innerHTML = sum
}