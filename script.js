// Helper function to add working days
function addWorkingDays(startDate, numberOfDays) {
    let currentDate = new Date(startDate);
    while (numberOfDays > 0) {
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        // Weekdays are Monday (1) to Friday (5)
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
    
    // This loop counts weekdays in the range
    while (currentDate <= endDate) {
        // Weekdays are Monday (1) to Friday (5)
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            count++;
        }
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    }
    return count;
}

// Set the start date of the countdown (April 22, 2024)
const countDownStartDate = new Date("May 21, 2024 00:00:00");

// Calculate the end date 30 working days from the start date (excluding weekends)
const countDownEndDate = addWorkingDays(countDownStartDate, 7);

// Update the countdown display
function updateCountdown() {
    const now = new Date();
    const timeDiff = countDownEndDate - now;

    // Debugging output
    console.log("Updating countdown:", now);

    // If it's before the countdown start date
    if (now < countDownStartDate) {
        document.getElementById("time").innerHTML = "Countdown not started yet!";
        return;
    }

    // Calculate total days left (not just working days)
    const totalDaysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // Calculate working days left from now until the end date
    const workingDaysLeft = calculateWorkingDays(now, countDownEndDate);

    // Debugging output
    console.log("Working Days Left:", workingDaysLeft, "Total Days Left:", totalDaysLeft);

    if (workingDaysLeft > 0) {
        document.getElementById("time").innerHTML = `${workingDaysLeft} working days left / ${totalDaysLeft} total days left`;
    } else {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}

// Initially update the countdown
updateCountdown();

// Interval to update the countdown (e.g., every 10 seconds for testing)
const x = setInterval(updateCountdown, 10000); // Update every 10 seconds for testing
