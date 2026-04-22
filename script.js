const password = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthIndicator = document.getElementById("strengthIndicator");
const togglebtn = document.getElementById("togglebtn");
const viewRules = document.getElementById("viewRules");
const rulesList = document.getElementById("rulesList");

password.addEventListener("input", () => {
  let val = password.value;
  let strength = 0;

  if (val.match(/[a-z]/)) strength++;
  if (val.match(/[A-Z]/)) strength++;
  if (val.match(/[0-9]/)) strength++;
  if (val.match(/[$@#&!]/)) strength++;
  if (val.length >= 8) strength++;

  if (val == "") {
    strengthBar.style.width = "0%";
    strengthBar.style.background = "#ffd7ee";
    /*strengthIndicator.innerText = "Start typing...";*/
  }

  switch (strength) {
    case 1:
      strengthBar.style.width = "20%";
      strengthBar.style.background = "#ff4f4f";
      strengthIndicator.innerText = "Very Weak";
      break;
    case 2:
      strengthBar.style.width = "40%";
      strengthBar.style.background = "#ff914d";
      strengthIndicator.innerText = "Weak";
      break;
    case 3:
      strengthBar.style.width = "60%";
      strengthBar.style.background = "#cfef84";
      strengthIndicator.innerText = "Medium";
      break;
    case 4:
      strengthBar.style.width = "80%";
      strengthBar.style.background = "#63b877";
      strengthIndicator.innerText = "Strong";
      break;
    case 5:
      strengthBar.style.width = "100%";
      strengthBar.style.background = "#08c255";
      strengthIndicator.innerText = "Very Strong";
      break;
  }
});

togglebtn.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    togglebtn.textContent = "Hide";
  } else {
    password.type = "password";
    togglebtn.textContent = "Show";
  }
});

viewRules.addEventListener("click", () => {
  if (rulesList.style.display === "block") {
    rulesList.style.display = "none";
    viewRules.innerText = "View Password Rules";
  } else {
    rulesList.style.display = "block";
    viewRules.innerText = "Hide Rules";
  }
});