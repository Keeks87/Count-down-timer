// Helper function to add working days
function addWorkingDays(startDate, numberOfDays) {
    let currentDate = new Date(startDate);
    while (numberOfDays > 0) {
        // Move to the next day
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        // If current day is Saturday (6) or Sunday (0), don't count it as a working day
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            numberOfDays--;
        }
    }
    return currentDate;
}

// Initialize the start date of the countdown (April 22, 2024)
const countDownStartDate = new Date("April 22, 2024 00:00:00");

// Calculate the end date 30 working days from the start date (excluding weekends)
const countDownEndDate = addWorkingDays(countDownStartDate, 30);

// Display the calculated end date for verification
console.log("Calculated End Date: " + countDownEndDate.toDateString());

// Check the current time
const now = new Date().getTime();

// Check if the countdown should start
if (now < countDownStartDate.getTime()) {
    document.getElementById("time").innerHTML = "Countdown not started yet!";
} else {
    // Set the time when the countdown should end
    const countDownEndTime = countDownEndDate.getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown end date
        const distance = countDownEndTime - now;

        // Show the countdown if the current time is before the end time
        if (distance > 0) {
            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="time"
            document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
        } else {
            // Display "EXPIRED" if the countdown is over
            clearInterval(x);
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);
}
