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
/*--------------------------Profile User--------------------------*/
/*----------------------------------------------------------------*/

// const userProfile = document.querySelector(".userProfile");
// const userContent = document.querySelector(".userContent");

// userProfile.addEventListener("click", function(){
//     userContent.classList.toggle("active");
// })


/*----------------------------------------------------------------*/
/*----------------------------Quick Menu--------------------------*/
/*----------------------------------------------------------------*/

const quickMenu = document.getElementById("responsiveMobileMenu");

quickMenu.addEventListener("click", toggleQuickMneu);

function toggleQuickMneu() {
    quickMenu.classList.toggle("active");
}

document.addEventListener("click", function (event) {
    let target = event.target;
    if (!quickMenu.contains(target)) {
        quickMenu.classList.remove("active");
    }
})



/*----------------------------------------------------------------*/
/*--------------------------To Top Button-------------------------*/
/*----------------------------------------------------------------*/

window.addEventListener("scroll", function () {
    const toTop = document.querySelector("#toTopBtn");
    if (this.window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/*----------------------------------------------------------------*/
/*--------------------------Dark Mode Button----------------------*/
/*----------------------------------------------------------------*/

const darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
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


