const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const surpriseContainer = document.getElementById("surprise-container");

button1.addEventListener("click", function() {
  surpriseContainer.innerHTML = "You chose Button 1!<br>Here is your surprise:<br> 🎉";
  surpriseContainer.style.display = "block";
});

button2.addEventListener("click", function() {
  surpriseContainer.innerHTML = "You chose Button 2!<br>Here is your surprise:<br> 🎂";
  surpriseContainer.style.display = "block";
});

button3.addEventListener("click", function() {
  surpriseContainer.innerHTML = "You chose Button 3!<br>Here is your surprise:<br> 🎁";
  surpriseContainer.style.display = "block";
});
