//variables
const toggle = document.querySelector('.toggle');
const modal = document.querySelector(".modal");
const modalDeact = document.querySelector(".modal-deact");
const disable = document.querySelector(".disable");
const popup = document.querySelector(".copy-popup");
const psswrd = document.querySelector(".psswrd");
const overlay = document.getElementById("overlay");
const user = document.querySelector('.user');
const closeModal = document.querySelectorAll(".close-btn");

// navbar listener
toggle.addEventListener('click', (e) => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
});

//Closes the pop up with the button, it only modifies the DOM
closeModal.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        modalDeact.classList.remove("active");
        overlay.classList.remove("active");
    });
})


//Closes the pop up by ckicking the shaded part, it only modifies the DOM
overlay.addEventListener("click", () => {
    modal.classList.remove("active");
    modalDeact.classList.remove("active");
    overlay.classList.remove("active");
});

//event listener for opening the modal to chenge username
user.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
})

//event listener for opening the modal to deactivate account
disable.addEventListener("click", () => {
    modalDeact.classList.add("active");
    overlay.classList.add("active");
})

//event listemer for opening the modal
psswrd.addEventListener("click", () => {
    popup.classList.add("active");
    setTimeout(() => { popup.classList.remove("active"); }, 3000);
})