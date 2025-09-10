// Get the button element
const button = document.getElementById("colorButton");
const inner = document.getElementById("innerColour")

// Define an array of colors
const colors = ["#ebe171", "#ea30a0", "#ed812a"];

// Counter to track the current color
let colorIndex = 0;

// Event listener for mouse hover (on the button itself)
button.addEventListener("mouseenter", function() {
  // Change the button color to the next color in the array
  inner.style.backgroundColor = colors[colorIndex];
  
  // Move to the next color in the array, looping back to the start if needed
  colorIndex = (colorIndex + 1) % colors.length;
});

// Optional: Event listener for mouse out (if you want to do something when hover stops)
button.addEventListener("mouseleave", function() {
  // Change the button color to the next color in the array
  
  // Move to the next color in the array, looping back to the start if needed
  inner.style.backgroundColor = "#646dfd";
});