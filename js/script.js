'use strict'
document.addEventListener("DOMContentLoaded", function(){
    console.log('Скрипт отработал корректно')
    const welcomeButtonModal = document.querySelector(".green_buttom");
    const modalApplication = document.querySelector(".applications");
    if (welcomeButtonModal && modalApplication){
        welcomeButtonModal.addEventListener("click", function(event){
            modalApplication.removeAttribute("hidden");
        });
        window.addEventListener("click", function(event){
            if (event.target === modalApplication){
                modalApplication.setAttribute("hidden", "true");
            }
        });
    }
    const closeModalButton = document.querySelector(".application_close");
    closeModalButton.addEventListener("click", function() {
        modalApplication.setAttribute("hidden", "true");
    });
});