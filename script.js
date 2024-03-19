// Variables for the HTML Elements:
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// setup to check the value in the number input element whenever the user clicks the Convert button:
const checkUserInput = () => {
  //console.log(numberInput.value);
  //Check if value is an empty string OR the number is invalid before you attempt to convert it into binary:
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    window.alert("Please provide a decimal number");
    // prevent future code in this statement from running:
    return;
  }
};

// Event Listeners:
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  //console.log(e);
  if (e.key === "Enter") {
    checkUserInput();
  }
});
