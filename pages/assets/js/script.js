/*------------------------------------------------*/
/*---------------Responsive Menu------------------*/
/*------------------------------------------------*/

const toggleMenu = document.querySelector(".toggleMenu");
const responsiveMenu = document.querySelector(".responsiveMenu")

toggleMenu.addEventListener("click", function () {
    responsiveMenu.classList.toggle("active");
    if (toggleMenu.classList.toggle("active")) {
        toggleMenu.querySelector("svg").classList.replace("fa-bars", "fa-xmark");
        toggleMenu.querySelector("svg").style.color = "rgba(255, 255, 255, 1)";
    } else {
        toggleMenu.querySelector("svg").classList.replace("fa-xmark", "fa-bars");
        toggleMenu.querySelector("svg").style.color = "rgba(95, 95, 95, 1)";
    }
})


/*----------------------------------------------------------------*/
/*-----------------------Show & Hide Password---------------------*/
/*----------------------------------------------------------------*/

function showPassword() {
    let password = document.getElementById("password");
    let showPasswordBtn = document.getElementById("showPassword");

    if (password.type === "password") {
        password.setAttribute("type", "text");
        showPasswordBtn.querySelector("svg").classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.setAttribute("type", "password");
        showPasswordBtn.querySelector("svg").classList.replace("fa-eye-slash", "fa-eye");
    }
}


/*----------------------------------------------------------------*/
/*--------------------------To Top Button-------------------------*/
/*----------------------------------------------------------------*/

// window.addEventListener("scroll", function () {
//     const toTop = document.querySelector("#toTopBtn");
//     if (this.window.pageYOffset > 100) {
//         toTop.classList.add("active");
//     } else {
//         toTop.classList.remove("active");
//     }
// })


// function backToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }


/*----------------------------------------------------------------*/
/*--------------------------Dark Mode Btn-------------------------*/
/*----------------------------------------------------------------*/


const setDarkMode = (active = false) => {
    const wrapper = document.querySelector(":root");
    if (active) {
        wrapper.setAttribute("data-theme", "dark");
        // localStorage.setItem("theme", "dark");
    } else {
        wrapper.setAttribute("data-theme", "light");
        // localStorage.setItem("theme", "light");
    }
};

const toggleDarkMode = () => {
    const theme = document.querySelector(":root").getAttribute("data-theme");
    // If the current theme is "light", we want to activate dark
    setDarkMode(theme === "light");
};

const initDarkMode = () => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    // const themePreference = localStorage.getItem("theme");

    let active = query.matches;
    // if (themePreference === "dark") {
    //   active = true;
    // }
    // if (themePreference === "light") {
    //   active = false;
    // }

    setDarkMode(active);

    query.addListener(e => setDarkMode(e.matches));

    const toggleButton = document.querySelector(".js__dark-mode-toggle");
    toggleButton.addEventListener("click", toggleDarkMode);
};

initDarkMode();

const darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("click", toggleDarkModeButton);


function toggleDarkModeButton() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const isDarkModeActive = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkModeActive);
}

window.addEventListener("DOMContentLoaded", () => {
    const isDarkModeActive = localStorage.getItem("darkMode") === "true";
    if (isDarkModeActive) {
        document.body.classList.add("dark-mode");
    }
});
