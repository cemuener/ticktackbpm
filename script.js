// script.js
document.getElementById('startButton').addEventListener('click', function() {
    let hours = parseInt(document.getElementById('hours').value);
    let minutes = parseInt(document.getElementById('minutes').value);
    let seconds = parseInt(document.getElementById('seconds').value);

    let countdownTime = (hours * 3600) + (minutes * 60) + seconds;

    let countdownInterval = setInterval(function() {
        let h = Math.floor(countdownTime / 3600);
        let m = Math.floor((countdownTime % 3600) / 60);
        let s = countdownTime % 60;

        document.getElementById('countdown').textContent = 
            (h < 10 ? "0" + h : h) + ":" +
            (m < 10 ? "0" + m : m) + ":" +
            (s < 10 ? "0" + s : s);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }

        countdownTime--;
    }, 1000);
});
