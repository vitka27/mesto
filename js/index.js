// получаем элементы с popup
let popup = document.querySelector(".popup");
let formPopup = popup.querySelector(".popup__form")
let buttonPopupClose = popup.querySelector(".popup__close");
let inputPopupUserName = popup.querySelector(".popup_input_name");
let inputPopupUserProfession = popup.querySelector(".popup_input_my-info");

// получаем элементы с профиля пользователя
let buttonEditProfile = document.querySelector(".profile-user__edit");
let userNameProfile = document.querySelector(".profile-user__name");
let userProfessionProfile = document.querySelector(".profile-user__profession");

// открываем попап и передаем данные в инпут
function openPopup(){
  inputPopupUserName.value = userNameProfile.textContent;
  inputPopupUserProfession.value = userProfessionProfile.textContent;
  popup.classList.add("popup_opened");
};

// закрываем попап
function closePopup(){
  popup.classList.remove("popup_opened");
};

// сохраняем введеные данные в профиль
function saveUserInfo (){
  userNameProfile.textContent = inputPopupUserName.value;
  userProfessionProfile.textContent = inputPopupUserProfession.value;
}

//отслеживаем события
buttonEditProfile.addEventListener("click", openPopup);

buttonPopupClose.addEventListener("click", closePopup);

formPopup.addEventListener("submit", (event) => {
  event.preventDefault();
  saveUserInfo();
  closePopup();
});
