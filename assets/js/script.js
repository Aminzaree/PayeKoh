/*----------------------------------------------------------------*/
/*-----------------------------Loading----------------------------*/
/*----------------------------------------------------------------*/

setTimeout(function(){
    // Hide the loading container when the delay is over
    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.style.display = "none";
}, 2000);



/*----------------------------------------------------------------*/
/*---------------------------Mobile Html--------------------------*/
/*----------------------------------------------------------------*/

// function checkRedirect() {
//     let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//     var maxMobileWidth = 600;

//     if(screenWidth < maxMobileWidth){
//         window.location.href = "../../pages/mobile.html";
//     }
// }

// window.onload = checkRedirect;


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
/*---------------------------Menu Sticky--------------------------*/
/*----------------------------------------------------------------*/

const mainMenu = document.querySelector("#menu");

window.addEventListener("scroll", function () {
    if (this.window.pageYOffset > 80) {
        mainMenu.classList.add("sticky");
    } else {
        mainMenu.classList.remove("sticky");
    }
})



/*----------------------------------------------------------------*/
/*----------------------------Progress Bar------------------------*/
/*----------------------------------------------------------------*/


const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function(){
    const winScroll = this.window.pageYOffset;
    const height = this.document.documentElement.scrollHeight - this.window.innerHeight;
    const scrolled = (winScroll/height) * 100;
    progressBar.style.width = `${scrolled}%`
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
/*----------------------------Counter Up--------------------------*/
/*----------------------------------------------------------------*/


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0"

    function updateCounter() {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = target / 900;

        if (c < target) {
            counter.innerHTML = Math.ceil(c + increment);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }

        if (c === target) {
            counter.style.color = "red";
        }
    }

    updateCounter()
})
