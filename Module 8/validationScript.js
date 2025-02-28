// JavaScript code for form validation

window.addEventListener("load", function () {
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  
  const message = document.createElement("p");
  message.id = "message";
  form.appendChild(message);

  form.addEventListener("submit", function (event) {
      // Prevent form from submitting
      event.preventDefault(); 

      // Retrieve the input field value
      const inputValue = inputField.value.trim(); 

      // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-zA-Z0-9]+$/; 

      // Check if the input value matches the pattern
      if (alphanumericPattern.test(inputValue)) {
          // Valid input: display confirmation and submit the form
          message.textContent = "Form submitted successfully!";
          message.style.color = "green";
          inputField.style.border = "2px solid green";
      } else {
          // Invalid input: display error message
          message.textContent = "Error: Please enter only alphanumeric characters.";
          message.style.color = "red";
          inputField.style.border = "2px solid red";
      }
  });
});
