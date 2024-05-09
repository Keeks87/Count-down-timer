// Helper function to add working days
function addWorkingDays(startDate, numberOfDays) {
    let currentDate = new Date(startDate);
    while (numberOfDays > 0) {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            numberOfDays--;
        }
    }
    return currentDate;
}

// Helper function to calculate working days between two dates
function calculateWorkingDays(startDate, endDate) {
    let count = 0;
    let currentDate = new Date(startDate);
    
    while (currentDate < endDate) {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            count++;
        }
    }
    return count;
}

// Set the start date of the countdown (April 22, 2024)
const countDownStartDate = new Date("April 22, 2024 00:00:00");

// Calculate the end date 30 working days from the start date (excluding weekends)
const countDownEndDate = addWorkingDays(countDownStartDate, 30);

// Check the current time
const now = new Date().getTime();

// Check if we should even start the countdown
if (now < countDownStartDate.getTime()) {
    document.getElementById("time").innerHTML = "Countdown not started yet!";
} else {
    // Calculate working days left from now until the end date
    let workingDaysLeft = calculateWorkingDays(new Date(), countDownEndDate);

    // Immediately display the initial working days left
    document.getElementById("time").innerHTML = workingDaysLeft + " working days left";

    // Update the countdown every day (86400000 ms = 1 day)
    const x = setInterval(function() {
        const now = new Date();
        workingDaysLeft = calculateWorkingDays(now, countDownEndDate);

        if (workingDaysLeft > 0) {
            document.getElementById("time").innerHTML = workingDaysLeft + " working days left";
        } else {
            clearInterval(x);
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 86400000); // Update every day
}
