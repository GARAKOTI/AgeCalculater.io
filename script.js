// Get the input element with the id "date"
let userInput = document.getElementById("date");
let result = document.getElementById("result");

// Set the maximum date for the input field to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Function to calculate age when called
function calculateAge() {
  // Parse the birth date from the user input
  let birthDate = new Date(userInput.value);

  // Extract day, month, and year from the birth date
  let userInputDate = birthDate.getDate();
  let userInputMonth = birthDate.getMonth() + 1; // Adding 1 because months start from 0
  let userInputYear = birthDate.getFullYear();

  // Get the current date
  let today = new Date();

  // Extract day, month, and year from the current date
  let todayDate = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();

  // Initialize variables for output
  let userOutputDate, userOutputMonth, userOutputYear;

  // Calculate the difference in years between the current year and user's birth year
  userOutputYear = todayYear - userInputYear;

  // Calculate the difference in months
  if (todayMonth >= userInputMonth) {
    userOutputMonth = todayMonth - userInputMonth;
  } else {
    todayYear--;
    userOutputMonth = 12 + todayMonth - userInputMonth;
  }

  // Calculate the difference in days
  if (todayDate >= userInputDate) {
    userOutputDate = todayDate - userInputDate;
  } else {
    userOutputMonth--;
    userOutputDate =
      getDaysInMonth(userInputYear, userInputMonth) + todayDate - userInputDate;
  }

  // If the month difference is negative, adjust the values
  if (userOutputMonth < 0) {
    userInputMonth = 11;
    userOutputYear--;
  }

  // Output the calculated age
  result.innerHTML = `YOU ARE <span>${userOutputYear}</span> YEARS, <span>${userOutputMonth}</span>  MONTHS,<span>${userOutputDate} </span> DAY'S OLD`;
}

// Function to get the number of days in a given month and year
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
