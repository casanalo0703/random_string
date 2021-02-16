let darkMode = localStorage.getItem('darkMode1');
const darkModeToggle = document.querySelector(".darkModeToggle");

function enableDarkMode() {
    document.body.classList.add("dark");
    try {//try for members.html
        const selectGroup = document.getElementById("SelectGroup");
        const members = document.querySelectorAll(".member");
        members.forEach((member) => {
            console.log(member);
            member.classList.add("dark");
            console.log(member);
        });
        selectGroup.classList.add("dark");
    } catch (error) { }
    try {//try for dashboard.html
        const links = document.querySelector(".links");
        const viewMain = document.querySelector(".view_main");
        const viewItiem = document.querySelectorAll(".view_item");
        viewItiem.forEach((item) => {
            console.log(item);
            item.classList.add("dark");
            console.log(item);
        });
        links.classList.add("dark");
        viewMain.classList.add("dark");
    } catch (error) { }

    try {//try for notes.js
        const todoList = document.querySelector(".todo-list");
        todoList.classList.add("dark");
    } catch (error) { }

}

function diasbleDarkMode() {
    document.body.classList.remove("dark");
    try {//try for members.html
        const members = document.querySelectorAll(".member");
        members.forEach((member) => {
            console.log(member);
            member.classList.remove("dark");
            console.log(member);
        });
        selectGroup.classList.remove("dark");

    } catch (error) { }

    try {//try for dashboard.html
        const links = document.querySelector(".links");
        const viewMain = document.querySelector(".view_main");
        const viewItiem = document.querySelectorAll(".view_item");
        viewItiem.forEach((item) => {
            console.log(item);
            item.classList.remove("dark");
            console.log(item);
        });
        links.classList.remove("dark");
        viewMain.classList.remove("dark");


    } catch (error) { }

    try {//try for notes.js
        const todoList = document.querySelector(".todo-list");
        todoList.classList.remove("dark");
    } catch (error) { }

}
console.log("Recien abierto" + darkMode);

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode1');
    console.log("Antes de if " + darkMode);
    if (darkMode == "enabled") {
        diasbleDarkMode();
        console.log("entro 1")
        localStorage.setItem('darkMode1', null);
    }
    else {
        enableDarkMode();
        console.log("entro 2");
        localStorage.setItem('darkMode1', 'enabled');
    }
    darkMode = localStorage.getItem('darkMode1');
    console.log(darkMode)
});

if (darkMode == "enabled") {
    enableDarkMode();
}