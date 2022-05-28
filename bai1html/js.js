const navDelete = document.querySelector(".nav__delete");
const navbarEle = document.querySelector(".navbar__confirm");
const modalEle = document.getElementById("modal");
const navCancel = document.querySelector(".nav__cancel");
const navConfirm = document.querySelector(".nav__confirm");
const grid = document.querySelector(".grid");
const gridText = document.querySelector(".grid__text");

navDelete.addEventListener("click", () => {
    modalEle.classList.add("display");
    navbarEle.classList.add("display");
});

const hidden = function () {
    modalEle.classList.remove("display");
    navbarEle.classList.remove("display");
};

modalEle.addEventListener("click", hidden);
navCancel.addEventListener("click", hidden);
navConfirm.addEventListener("click", () => {
    modalEle.classList.remove("display");
    navbarEle.classList.remove("display");
    grid.removeChild(gridText);
    navDelete.classList.add("hidden");
});
