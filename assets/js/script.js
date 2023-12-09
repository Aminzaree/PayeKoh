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


/*----------------------------------------------------------------*/
/*----------------------------Message Box-------------------------*/
/*----------------------------------------------------------------*/


function openMessageBox() {
    let messageBox = document.querySelector("#messageBox");
    messageBox.classList.add("active");
}

function closeMessageBox() {
    let messageBox = document.querySelector("#messageBox");
    messageBox.classList.remove("active");
}


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
/*---------------------------Send Request-------------------------*/
/*----------------------------------------------------------------*/


// function sendRequest() {

//     // Creat a XMLHttpRequest
//     let xhr = new XMLHttpRequest();

//     // Set API
//     xhr.open("GET", "URL API", true);

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // Request is ok
//             let response = JSON.parse(xhr.responseText);
//             console.log("پاسخ API: " + JSON.stringify(response));
//         } else if (xhr.readyState === 4) {
//             // Request is Not ok
//             console.log("خطا در ریکوئست؛ کد خطا: " + xhr.status);
//         }
//     }

//     // Send Request
//     xhr.send()

// }


/*----------------------------------------------------------------*/
/*---------------+------Send Request Whit AJAX--------------------*/
/*----------------------------------------------------------------*/


// $(document).ready(function () {
//     $("#getDataBtn").click(function () {

//         // Set API Address
//         let apiURL = "API ADDRESS";

//         $.ajax({
//             url: apiURL,
//             type: "GET",
//             dataType: "json",
//             success: function (data) {
//                 // data Recived
//                 console.log(data);
//             },
//             error: function (xhr, status, error) {
//                 // ERROR
//                 console.error("خطا در درخواست " + status, error);
//             }
//         })
//     })
// })
