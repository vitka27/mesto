let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__close");
let popupSubmit = popup.querySelector(".popup__submit");
let popupUserName = popup.querySelectorAll(".popup__input")[0];
let popupUserProfession = popup.querySelectorAll(".popup__input")[1];

let buttonEdit = document.querySelector(".profile-user__edit");
let userName = document.querySelector(".profile-user__name");
let userProfession = document.querySelector(".profile-user__profession");

buttonEdit.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");

  popupUserName.value = userName.textContent;
  popupUserProfession.value = userProfession.textContent;
});

popupSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  userName.textContent = popupUserName.value;
  userProfession.textContent = popupUserProfession.value;
  popup.classList.toggle("popup_opened");
});
//test
popupClose.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});
