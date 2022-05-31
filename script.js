const dangerText = document.getElementById("danger");
const dangerButton = document.getElementById("danger-button");
const inputEmail = document.getElementById("email");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let valEmail = inputEmail.value;

  if (!validateEmail(valEmail) || valEmail == "") {
    dangerText.style.opacity = "1";
    dangerButton.style.opacity = "1";
    setTimeout(() => {
      // dangerText.style.removeProperty("opacity");
      // dangerButton.style.removeProperty("opacity");

      // sau

      dangerText.style.opacity = "0";
      dangerButton.style.opacity = "0";
      inputEmail.value = "";
    }, 2000);
  }
});

function validateEmail(valEmail) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valEmail);
}
