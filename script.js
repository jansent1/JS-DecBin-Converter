/*
// CallStack example:
const callStack = [
  'a(): returns "freeCodeCamp " + b()',
  `b(): returns "is " + c()`,
  `c(): returns "awesome!"`,
];

const a = () => {
  return "freeCodeCamp " + b();
};
const b = () => {
  return "is " + c();
};

const c = () => {
  return "awesome!";
};

console.log(a());
*/
// Variables for the HTML Elements:
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const animationContainer = document.getElementById("animation-container");

const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  },
];

/*
// Count down from a given number to zero:
const countDownAndUp = (number) => {
  console.log(number);
  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};
*/

const showAnimation = () => {
  result.innerText = "Call Stack Animation";
  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `<p class="animation-frame" id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;">decimalToBinary(${obj.inputVal})</p>`;
    }, obj.addElDelay);
    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);
    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

// Converter Function:
const decimalToBinary = (input) => {
  // Version 3.0 (with recursion):
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }

  /* Version 2.0: 
  let binary = "";
  if (input === 0) {
    binary = "0";
  }
  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }
  result.innerText = binary;

  */
  /* Version 1.0:
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
*/
};

// setup to check the value in the number input element whenever the user clicks the Convert button:
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  //console.log(numberInput.value);
  //Check if value is an empty string OR the number is invalid before you attempt to convert it into binary:
  if (!numberInput.value || isNaN(inputInt)) {
    window.alert("Please provide a decimal number");
    // prevent future code in this statement from running:
    return;
  }
  if (inputInt === 5) {
    showAnimation();
    return;
  }
  result.textContent = decimalToBinary(inputInt);
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
