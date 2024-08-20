// script.js

// Set the date we're counting down to
const targetDate = new Date('August 31, 2024 16:00:00').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining >= 0) {
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        document.getElementById('countdown').textContent = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        clearInterval(countdownInterval);
        document.getElementById('countdown').textContent = "EXPIRED";
    }
}, 1000);
