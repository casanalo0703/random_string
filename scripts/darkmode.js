let darkMode = localStorage.getItem('darkMode1');
const darkModeToggle = document.querySelector(".darkModeToggle");
const selectGroup = document.getElementById("SelectGroup");

function enableDarkMode() {
    document.body.classList.add("dark");
    const members = document.querySelectorAll(".member");
    members.forEach((member) => {
        console.log(member);
        member.classList.add("dark");
        console.log(member);
    });
    selectGroup.classList.add("dark");
}

function diasbleDarkMode() {
    document.body.classList.remove("dark");
    const members = document.querySelectorAll(".member");
    members.forEach((member) => {
        console.log(member);
        member.classList.remove("dark");
        console.log(member);
    });
    selectGroup.classList.remove("dark");
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