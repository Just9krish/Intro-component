const button = document.getElementById("btn");

button.addEventListener("click", wrongFunction);

function wrongFunction() {
  const fName = document.getElementById("fName").value;
  const fNameIcon = document.getElementById("fName");
  const lName = document.getElementById("lName").value;
  const lNameIcon = document.getElementById("lName");
  const email = document.getElementById("email").value;
  const emailIcon = document.getElementById("email");
  const password = document.getElementById("password").value;
  const passwordIcon = document.getElementById("password");

  const fNameText = document.getElementById("fNameText");
  const lNameText = document.getElementById("lNameText");
  const emailText = document.getElementById("emailText");
  const passwordText = document.getElementById("passwordText");

  let allFilled = true;

  if (fName == "") {
    allFilled = false;
    fNameText.style.visibility = "visible";
    fNameIcon.classList.add("icon-error");
    fNameIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    fNameIcon.placeholder = "";
  } else {
    fNameText.style.visibility = "hidden";
    fNameIcon.classList.remove("icon-error");
    fNameIcon.style.border = "";
  }

  if (lName == "") {
    allFilled = false;
    lNameText.style.visibility = "visible";
    lNameIcon.classList.add("icon-error");
    lNameIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    lNameIcon.placeholder = "";
  } else {
    lNameText.style.visibility = "hidden";
    lNameText.style.visibility = "hidden";
    lNameIcon.classList.remove("icon-error");
    lNameIcon.style.border = "";
  }

  //   Regular expression for email

  const regexEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email == "") {
    allFilled = false;
    emailText.style.visibility = "visible";
    emailIcon.classList.add("icon-error");
    emailIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    emailIcon.placeholder = "";
  } else if (!regexEmail.test(email)) {
    allFilled = false;
    emailText.innerHTML = "Looks like this is not an email!";
    emailText.style.visibility = "visible";
  } else {
    emailText.style.visibility = "hidden";
    emailText.style.visibility = "hidden";
    emailIcon.classList.remove("icon-error");
    emailIcon.style.border = "";
  }

  if (password == "") {
    allFilled = false;
    passwordText.style.visibility = "visible";
    passwordIcon.classList.add("icon-error");
    passwordIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
    passwordIcon.placeholder = "";
  } else {
    passwordText.style.visibility = "hidden";
    passwordText.style.visibility = "hidden";
    passwordIcon.classList.remove("icon-error");
    passwordIcon.style.border = "";
  }
}
