let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let day = document.getElementById('day')

var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decmeber']
let clock = setInterval(function time() {
    var today = new Date()
    var d = today.getDate()
    var m = today.getMonth()
    var y = today.getFullYear()
    var h = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h
    minute.innerText = min
    second.innerText = sec
})