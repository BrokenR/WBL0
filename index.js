// sizeProps

let body = document.querySelector("body");
let container = document.querySelector(".container");
let footer = document.querySelector("footer");
let main = document.querySelector(".main");
let delivery = document.querySelector(".delivery");
let result = document.querySelector(".cart__sum");
let button = document.querySelector("button");
let nav = document.querySelector("nav");
let inputs = document.querySelectorAll("input");
// let mobButton = document.querySelector();
const mobError = [];

// eventListeners
inputs.forEach((item) => item.addEventListener("input", inputHandler));
inputs.forEach((item) => item.addEventListener("blur", focusValidate));
button.addEventListener("click", clickValidate);

window.addEventListener("resize", WrapMobile);

window.addEventListener("focus", focusValidate);
//errors
let nameError = false;
let surnameError = false;

let emailError = false;

let telephoneError = false;

let indexError = false;
//functions
if (window.screen.width <= 1024) {
  WrapMobile();
}

function WrapMobile() {
  if (document.documentElement.clientWidth <= 1024) {
    let mob = document.createElement("div");

    let delivery = document.querySelector(".mob__delivery");
    delivery.insertAdjacentElement("beforeend", result);
    mob.classList.add("mob__cont");

    body.insertAdjacentElement("afterbegin", mob);
    mob.insertAdjacentElement("afterbegin", nav);
    mob.insertAdjacentElement("afterbegin", footer);
    mob.insertAdjacentElement("afterbegin", container);

    main.insertAdjacentElement("beforeend", delivery);

    window.removeEventListener("resize", WrapMobile);

    window.addEventListener("resize", UnwrapMobile);
  }
}
function UnwrapMobile() {
  if (document.documentElement.clientWidth > 1024) {
    let mob = document.querySelector(".mob__cont");
    window.addEventListener("resize", WrapMobile);
    body.insertAdjacentElement("afterbegin", container);
    container.insertAdjacentElement("beforeend", footer);

    main.insertAdjacentElement("beforeend", result);

    mob.remove();
    let cartContainer = document.querySelector(".cart__container");
    cartContainer.insertAdjacentElement("beforeend", delivery);
    window.removeEventListener("resize", UnwrapMobile);

    window.addEventListener("resize", WrapMobile);
  }
}
function scroll(el) {
  if (mobError) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
function inputHandler(e) {
  if (e.target.value === "") {
    findLabel(e.target.id + "Label", "0");
  } else {
    findLabel(e.target.id + "Label", "1");
  }
}
function findLabel(id, op) {
  const label = document.getElementById(id);
  label.style.opacity = op;
}

function clickValidate() {
  if (window.screen.width > 1024) {
    nameValidate();
    surnameValidate();
    emailValidate();
    phoneValidate();
    indexValidate();
  } else {
    mobNameValidate();
    mobSurnameValidate();
    mobEmailValidate();
    mobPhoneValidate();
    mobINNValidate();
    if (mobError) {
      scroll(mobError[0]);
    }
  }
}
function focusValidate(e) {
  switch (e.target.id) {
    case "name":
      if (nameError) {
        nameValidate();
      }
      break;
    case "surname":
      if (surnameError) {
        surnameValidate();
      }
      break;
    case "phone":
      if (telephoneError) {
        phoneValidate();
      }
      break;
    case "email":
      if (emailError) {
        emailValidate();
      }
      break;
    case "INN":
      if (indexError) {
        indexValidate();
      }
  }
  // if (e.target.id === 'name') {
  //
  // } else if (e.target.id === 'surname') {
  //     if (surnameError) {
  //         surnameValidate();
  //     }
  // } else if (e.target.id === 'phone') {
  //     if (telephoneError) {
  //         phoneValidate();
  //     }
  // } else if (e.target.id === 'email') {
  //     if (emailError) {
  //         emailValidate();
  //     }
  // }
  // if (e.target.id === 'INN') {
  //     if (indexError) {
  //         indexValidate();
  //     }
  // }
}
function nameValidate() {
  let name = document.querySelector("#name");
  const error = document.querySelector("#nameError");
  if (name.value === "") {
    nameError = true;
    name.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
  } else {
    nameError = false;
    error.style.opacity = "0";

    name.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
  }
}
function surnameValidate() {
  let name = document.querySelector("#surname");
  const error = document.querySelector("#surnameError");
  if (name.value === "") {
    surnameError = true;
    name.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
  } else {
    surnameError = false;
    error.style.opacity = "0";
  }
}
function emailValidate() {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  let email = document.querySelector("#email");
  const error = document.querySelector("#emailError");
  if (regex.test(email.value) === false) {
    emailError = true;
    email.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
  } else {
    emailError = false;
    error.style.opacity = "0";
  }
}
function phoneValidate() {
  const regex = new RegExp("^(\\+[0-9])[0-9]{3}[0-9]{3}[0-9]{4}$");
  let phone = document.querySelector("#phone");
  const error = document.querySelector("#phoneError");
  if (regex.test(phone.value.trim()) === false) {
    telephoneError = true;
    phone.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
  } else {
    telephoneError = false;
    error.style.opacity = "0";
  }
}
function indexValidate() {
  const regex = new RegExp("[0-9]{7}");
  let index = document.querySelector("#INN");
  const error = document.querySelector("#INNError");
  if (regex.test(index.value) === false) {
    indexError = true;
    index.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
  } else {
    error.style.opacity = "0";
    indexError = false;
  }
  return indexError;
}
function mobNameValidate() {
  let name = document.querySelector("#mobName");
  const error = document.querySelector("#mobNameError");
  if (name.value === "") {
    name.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
    if (!mobError.includes(name)) {
      mobError.splice(0, 0, name);
    }
  } else {
    error.style.opacity = "0";
    name.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
    if (mobError.includes(name)) {
      const i = mobError.indexOf(name);
      mobError.splice(i, 1);
    }
  }
}
function mobSurnameValidate() {
  let name = document.querySelector("#mobSurname");
  const error = document.querySelector("#mobSurnameError");
  if (name.value === "") {
    name.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
    if (!mobError.includes(name)) {
      mobError.splice(1, 0, name);
    }
  } else {
    if (mobError.includes(name)) {
      const i = mobError.indexOf(name);
      mobError.splice(i, 1);
    }
    error.style.opacity = "0";
    name.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
  }
}
function mobEmailValidate() {
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  let email = document.querySelector("#mobEmail");
  const error = document.querySelector("#mobEmailError");
  if (regex.test(email.value) === false) {
    email.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
    if (!mobError.includes(email)) {
      mobError.splice(2, 0, email);
    }
  } else {
    error.style.opacity = "0";
    email.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
    if (mobError.includes(email)) {
      const i = mobError.indexOf(email);
      mobError.splice(i, 1);
    }
  }
}
function mobPhoneValidate() {
  const regex = new RegExp("^(\\+[0-9])[0-9]{3}[0-9]{3}[0-9]{4}$");
  let phone = document.querySelector("#mobPhone");
  const error = document.querySelector("#mobPhoneError");

  if (regex.test(phone.value.trim()) === false) {
    phone.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
    if (!mobError.includes(phone)) {
      mobError.splice(3, 0, phone);
    }
  } else {
    error.style.opacity = "0";
    phone.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
    if (mobError.includes(phone)) {
      const i = mobError.indexOf(phone);
      mobError.splice(i, 1);
    }
  }
}
function mobINNValidate() {
  const regex = new RegExp("[0-9]");
  let index = document.querySelector("#mobINN");
  const error = document.querySelector("#mobINNError");
  if (regex.test(index.value) === false || index.value.length !== 7) {
    index.style.borderBottom = "1px solid red";
    error.style.opacity = "1";
    if (!mobError.includes(index)) {
      mobError.splice(4, 0, index);
    }
  } else {
    error.style.opacity = "0";
    index.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
    if (mobError.includes(index)) {
      const i = mobError.indexOf(index);
      mobError.splice(i, 1);
    }
  }
}
