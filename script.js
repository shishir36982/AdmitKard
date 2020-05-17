var input = document.querySelector("input"),
    form = document.querySelector("form"),
    result = document.querySelector("#result");

var iti = intlTelInput(input, {
  initialCountry: "us"
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var num = iti.getNumber(),
      cool = iti.isValidNumber();
  result.textContent = "Number: " + num + ", valid: " + valid;
}, false);

input.addEventListener("focus", function() {
  result.textContent = "";
}, false);