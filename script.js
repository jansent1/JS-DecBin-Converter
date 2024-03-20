// Variables for the HTML Elements:
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Converter Function:
const decimalToBinary = (input) => {
  // Create Arrays to store results:
  const quotients = [];
  const inputs = [];
  const remainders = [];
  if (input === 0) {
    result.innerText = "0";
    return;
  }
  while (input > 0) {
    const quotient = Math.floor(input / 2);
    // Add the Data/Results to the Arrays:
    const remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    // Prevent the while loop from an infinite loop:
    input = quotient;
  }
  // Check results in the console:
  // Notice that the remainders array is the binary representation of the inputNumber, but in reverse order.
  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  // Display the result value inside the HTML Element:
  result.innerText = remainders.reverse().join("");
};

// setup to check the value in the number input element whenever the user clicks the Convert button:
const checkUserInput = () => {
  //console.log(numberInput.value);
  //Check if value is an empty string OR the number is invalid before you attempt to convert it into binary:
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    window.alert("Please provide a decimal number");
    // prevent future code in this statement from running:
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  // Delete previous number before entering next one:
  numberInput.value = "";
};

// Event Listeners:
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  //console.log(e);
  if (e.key === "Enter") {
    checkUserInput();
  }
});
