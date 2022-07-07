var header = document.getElementById("login");
var buttons = header.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
function sendEmail() {
          alert("Thank you for registring in Apllify")
    }