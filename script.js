// select input  feilds

const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const passwordEl = document.getElementById("password");
const buttonEl = document.getElementById("submit");
const errorEl = document.getElementById("error");

const users = [];
let valid = 0;
function validateUsername() {
  const usernameValue = usernameEl.value;
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{4,8}$/;
  if (usernameValue === " " || !usernameRegex.test(usernameValue)) {
    usernameEl.style.border = "2px solid red";
    errorEl.innerText = "Username is not valid";
  } else {
    ++valid;
    usernameEl.style.border = "2px solid green";
    errorEl.innerText = "";
  }
}

emailEl.addEventListener("keyup", () => {
  const emailValue = emailEl.value;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailValue === " " || !emailRegex.test(emailValue)) {
    emailEl.style.border = "2px solid red";
    errorEl.innerText = "Email is not valid";
  } else {
    ++valid;
    emailEl.style.border = "2px solid green";
    errorEl.innerText = "";
  }
});

phoneEl.addEventListener("keyup", () => {
  const phoneValue = phoneEl.value;
  const phoneRegex = /^\d{10}$/;
  if (phoneValue === " " || !phoneRegex.test(phoneValue)) {
    phoneEl.style.border = "2px solid red";
    errorEl.innerText = "Phone number is not valid";
  } else {
    ++valid;
    phoneEl.style.border = "2px solid green";
    errorEl.innerText = "";
  }
});

passwordEl.addEventListener("keyup", () => {
  const passwordValue = passwordEl.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S{8,}$/;
  if (passwordValue === " " || !passwordRegex.test(passwordValue)) {
    passwordEl.style.border = "2px solid red";
    errorEl.innerText = "Password is not valid";
  } else {
    ++valid;
    passwordEl.style.border = "2px solid green";
    errorEl.innerText = "";
  }
});

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  const username = usernameEl.value;
  const email = emailEl.value;
  const phone = phoneEl.value;
  const password = passwordEl.value;

  if (valid === 4) {
    users.push({
      username,
      email,
      phone,
      password,
    });
    alert("User added successfully");
    usernameEl.value = "";
    passwordEl.value = "";
    emailEl.value = "";
    phoneEl.value = "";
    console.log(users);
  } else {
    valid = 0;
    errorEl.innerText = "All fields are required *";
  }
  console.log(valid);

  console.log(users);
});
