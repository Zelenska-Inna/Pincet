'use strict';
var servicesButton = document.querySelector('.services__button');
var wrapperForm = document.querySelector('.write-us');
var setupWriteUs = wrapperForm.querySelector('.write-us__modal-close');
var buttonSend = wrapperForm.querySelector('.write-us__btn-send');
var signUpButton = document.querySelector('.sign-up__button');
var setupReceived = document.querySelector('.received__modal-close');
var modalReceived = document.querySelector('.received');


function openPopup(date) {
    date.classList.remove('cut-down');
    removeText();
}

function closePopup(date) {
    date.classList.add('cut-down');
    removeText();
}

signUpButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(wrapperForm);
});

servicesButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(wrapperForm);
});

setupWriteUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup(wrapperForm);
});
setupReceived.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup(modalReceived);
});
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        closePopup(wrapperForm);
    }
});

buttonSend.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(modalReceived);
    closePopup(wrapperForm);


});