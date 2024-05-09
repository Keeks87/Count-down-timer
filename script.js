// Helper function to add working days
function addWorkingDays(startDate, numberOfDays) {
    let currentDate = new Date(startDate);
    while (numberOfDays > 0) {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        // If current day is Saturday (6) or Sunday (0), don't count it as a working day
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            numberOfDays--;
        }
    }
    return currentDate;
}

// Set the date we're counting down from
const countDownStartDate = new Date("April 22, 2024 00:00:00");

// Calculate the date 30 working days from the start date (excluding weekends)
const countDownEndDate = addWorkingDays(countDownStartDate, 30);

// Set the time when the countdown should end
const countDownEndTime = countDownEndDate.getTime();

// Update the count down every 1 second
const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down end date
    const distance = countDownEndTime - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="time"
    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);
