let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
const submit = document.querySelector(".form-btn");
let user_field = document.querySelector(".user");
let password_field = document.querySelector(".pass");
const checkbox = document.querySelector('.check-box');

const users = [
  { username: "victor", password: "enoma" },
  { username: "jack", password: "password2" },
  { username: "arya", password: "password3" },
  { username: "jonsnow", password: "password4" },
  { username: "heisenberg", password: "password5" },
];

const getValues = () => {
  let result;
  users.forEach((user) => {
    if (
      user.username === usernameInput.value &&
      user.password === passwordInput.value
    ) {
      result = user;
    }
  });
  return result;
};

const clearField = () => {
  usernameInput.value = "";
  passwordInput.value = "";
};

const showPassword = () => {
   passwordInput.type === 'password' ? passwordInput.type = 'text' : passwordInput.type = 'password'
}

const showResult = () => {
  if (usernameInput.value === "" || passwordInput.value === "") {
    user_field.textContent = "Username and password are required";
  } else {
    if (getValues()) {
      user_field.textContent = `Username: ${getValues().username}`;
      password_field.textContent = `Password: ${getValues().password}`;
    } else {
      user_field.textContent = "Invalid credentials";
      password_field.textContent = "";
    }
  }
  clearField();
};

checkbox.addEventListener('click', showPassword)
submit.addEventListener("click", showResult);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    showResult();
  }
});

//   console.log('Welcome to the authenticator');
//   console.log('--------------------------')
//   console.log('This program will take input from the user and compare');

//   const getUser = (user_record, username, password) => {
//     let user;
//     user_record.forEach(obj => {
//         if(obj.username === username && obj.password === password) {
//             user = obj
//         }
//     });
//    return user ? user : 'Credentials not found';
//   }

//   let count = 0;
//   while(count < 3) {
//     const username = prompt('Enter username');
//     const password = prompt('Enter password');

//  console.log(getUser(users, username, password));

//     const input = prompt('Enter n to quit or any other key to continue')
//     if (input.toLowerCase() === 'n') break;

//     count++
//   }
//   if (count >= 3) {
//       console.log('You have exceeded your limit')
//   }
