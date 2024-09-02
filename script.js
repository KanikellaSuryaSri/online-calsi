// Get a reference to the display/input field
let display = document.getElementById('display');

// Function to append a value to the display
function appendToDisplay(value) {
  // Append the given value to the current content of the display
  display.value += value;
}

// Function to clear the last character from the display
function clearDisplay() {
  // Get the current content of the display
  let currentContent = display.value;

  // Remove the last character
  let newContent = currentContent.slice(0, -1);

  // Set the content of the display to the new content
  display.value = newContent;
}

// Function to clear all data in the display
function clearAllData() {
  // Set the content of the display to an empty string, clearing all data
  display.value = '';
}

// Function to perform calculations
function calculate() {
  try {
    // Use the eval function to evaluate the mathematical expression in the display
    display.value =  eval(display.value);
  } catch (error) {
    // If an error occurs during evaluation, set the display to show 'Error'
    display.value = 'Error';
  }
}