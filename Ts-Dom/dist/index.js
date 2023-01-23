"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const usercountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
//adding event listiner using callbackfunction to show the data whic i store in object.
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        usercountry: usercountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
