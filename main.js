const button = document.getElementById("btn");

button.addEventListener("click", wrongFunction);

function wrongFunction() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const fNameText = document.getElementById("fNameText");
  const lNameText = document.getElementById("lNameText");
  const emailText = document.getElementById("emailText");
  const passwordText = document.getElementById("passwordText");

  let allFilled = true;

  if (fName == "") {
    allFilled = false;
    fNameText.style.visibility = "visible";
  }

  if (lName == "") {
    allFilled = false;
    lNameText.style.visibility = "visible";
  }

  //   Regular expression for email

  const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email == "") {
    allFilled = false;
    emailText.style.visibility = "visible";
  } else if (!regexEmail.test(email)) {
    allFilled = false;
    emailText.innerHTML = "Looks like this is not an email!";
    emailText.style.visibility = "visible";
  }

  if (password == "") {
    allFilled = false;
    passwordText.style.visibility = "visible";
  }
}
