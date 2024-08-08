const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

/*1 - country code + 3 - area code + 7 - local number */
const regex = /^1?\s?(\d{3}|\(\d{3}\))\s?[\s-]?\d{3}[\s-]?\d{4}$/; 

checkBtn.addEventListener("click", () => {
  const userInputValue = userInput.value;
  if (userInputValue === '') {
    alert("Please provide a phone number");
  } else {
    let result = regex.test(userInputValue);
    if (result) {
      resultsDiv.classList.add('correct');
      resultsDiv.innerText = `Valid US number: ${userInputValue}`;
   } else {
     resultsDiv.classList.remove('correct');
      resultsDiv.innerText = `Invalid US number: ${userInputValue}`;
   }
  }
});

clearBtn.addEventListener("click", () => {
resultsDiv.innerText = '';
})
