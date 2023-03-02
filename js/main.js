let buttonEdit = document.querySelector(".profile-user__edit");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");

buttonEdit.addEventListener("click", () => {
  popup.classList.toggle("popup_open");
});

popupClose.addEventListener("click", () => {
  popup.classList.toggle("popup_open");
});
