const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const usercountry = document.querySelector("#country") as HTMLInputElement;
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

//adding event listiner using callbackfunction to show the data whic i store in object.
userForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    userName: userName.value,
    userEmail: userEmail.value,
    usercountry: usercountry.value,
    userFeedback: userFeedback.value,
  };
  console.log(data);
});
