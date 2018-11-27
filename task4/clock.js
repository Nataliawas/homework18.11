function setTime() {


    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()


    setHourFirstNum = document.getElementById("hourFirstNum").innerHTML = Math.floor(h / 10)
    setHourSecondNum = document.getElementById("hourSecondNum").innerHTML = h % 10


    setMinutesFirstNum = document.getElementById("minFirstNum").innerHTML = Math.floor(m / 10)
    setMinutesFSecondNum = document.getElementById("minSecondNum").innerHTML = m % 10



    setSecondsFirstNum = document.getElementById("secFirstNum").innerHTML = Math.floor(s / 10)
    setSecondsSecondNum = document.getElementById("secSecondNum").innerHTML = s % 10



}
setInterval(setTime, 1000);
setTime()