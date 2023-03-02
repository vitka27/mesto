let popup = document.querySelector(".popup");
let popupClose = popup.querySelector(".popup__close");
let buttonEdit = document.querySelector(".profile-user__edit");

let userName = document.querySelector(".profile-user__name");
let userProfession = document.querySelector(".profile-user__profession");

let popupUserName = popup.querySelectorAll(".popup__input")[0];
let popupUserProfession = popup.querySelectorAll(".popup__input")[1];
console.log(popupUserName);


buttonEdit.addEventListener("click", () => {
  popup.classList.toggle("popup_open");

  popupUserName.value = userName.textContent;
  popupUserProfession.value = userProfession.textContent;

});

popupClose.addEventListener("click", () => {
  popup.classList.toggle("popup_open");
});
