function ex4(){
    let length = +document.getElementById("length").value
    let breadth = +document.getElementById("breadth").value
    let perimeter,acreage
    // chu vi
    perimeter = (length+breadth) *2
    // diện tích
    acreage = length*breadth
    let notification = document.getElementById("notification")
    notification.innerHTML = `
        chu vi là: ${perimeter}     
        <br>
        diện tích là: ${acreage} 
    `
}