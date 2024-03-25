/*----------------------------------------------------------------*/
/*-----------------------------Loading----------------------------*/
/*----------------------------------------------------------------*/

setTimeout(function () {
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
/*------------------Random Change Text Animation------------------*/
/*----------------------------------------------------------------*/

let i = 0;

const randomizeText = () => {
    const phrase = document.querySelector('.random-word');
    const compStyles = window.getComputedStyle(phrase);
    const animation = compStyles.getPropertyValue('animation');
    const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;

    const phrases = ['جی پس اس مسیر رو دریافت کنید', 'وضعیت آب و هوای کوهستان رو برات چک کنه', 'نقشه سه بعدی از کوهستان رو بهت نمایش بده'];

    i = randomNum(i, phrases.length);
    const newPhrase = phrases[i];

    setTimeout(() => {
        phrase.textContent = newPhrase;
    }, 400); // time to allow opacity to hit 0 before changing word
}

const randomNum = (num, max) => {
    let j = Math.floor(Math.random() * max);

    // ensure diff num every time
    if (num === j) {
        return randomNum(i, max);
    } else {
        return j;
    }
}

const getAnimationTime = () => {
    const phrase = document.querySelector('.random-word');
    const compStyles = window.getComputedStyle(phrase);
    let animation = compStyles.getPropertyValue('animation');

    // firefox support for non-shorthand property
    animation != "" ? animation : animation = compStyles.getPropertyValue('-moz-animation-duration');

    // webkit support for non-shorthand property
    animation != "" ? animation : animation = compStyles.getPropertyValue('-webkit-animation-duration');


    const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
    return animationTime;
}

randomizeText();
setInterval(randomizeText, getAnimationTime());



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
/*----------------------------Progress Bar------------------------*/
/*----------------------------------------------------------------*/

// const progressBar = document.querySelector(".progress-bar");

// window.addEventListener("scroll", function(){
//     const winScroll = this.window.pageYOffset;
//     const height = this.document.documentElement.scrollHeight - this.window.innerHeight;
//     const scrolled = (winScroll/height) * 100;
//     progressBar.style.width = `${scrolled}%`
// })

// Fuck You Dear JavaScript 😡🙂🧡



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



/*----------------------------------------------------------------*/
/*-----------------------------Accordion--------------------------*/
/*----------------------------------------------------------------*/

const accordionTitle = document.querySelectorAll(".accordionTitle");

accordionTitle.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");

        const accordionContent = item.nextElementSibling;

        if (accordionContent.style.height) {
            accordionContent.style.height = null;
            item.querySelector("svg").classList.replace("fa-chevron-up", "fa-chevron-down");
        } else {
            accordionContent.style.height = accordionContent.scrollHeight + "px";
            item.querySelector("svg").classList.replace("fa-chevron-down", "fa-chevron-up")
        }
    })
})


/*----------------------------------------------------------------*/
/*-----------------------------ContactUs--------------------------*/
/*----------------------------------------------------------------*/


function sendMessage(){

 

    let formFname = document.getElementById("fname");
    let fnameResult = document.querySelector("#fnameResult");

    if(formFname.value === ""){
        fnameResult.innerHTML = "لطفا نام خود را وارد کنید.";
    }else{
        fnameResult.innerHTML = " ";
    }

    let formLname = document.getElementById("lname");
    let lnameResult = document.querySelector("#lnameResult");

    if(formLname.value === ""){
        lnameResult.innerHTML = "لطفا نام خانوادگی خود را وارد کنید.";
    }else{
        lnameResult.innerHTML = " ";
    }


    let formDescription = document.getElementById("description");
    let descriptionResult = document.getElementById("descriptionResult");

    if(formDescription.value === ""){
        descriptionResult.innerHTML = "فیلد بالا رو برامون پر کن ";
    }else{
        descriptionResult.innerHTML = " ";
    }

    
    let formEmail = document.getElementById("email");
    let emailResult = document.getElementById("emailResult")
    const mailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(formFname.value == "" && formLname.value === "" && formDescription.value === "" && formEmail.value === ""){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "اطلاعات کافی نیست !"
          });
    }

    if(formFname.value && formLname.value && formDescription.value && formEmail.value.match(mailRegex)){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "ایده شما برای ما ارسال شد."
          });
    }

    if(formEmail.value.match(mailRegex)){
        emailResult.textContent = " ";
        return true;
    }else{
        emailResult.textContent = "ایمیل وارد شده صحیح نمی‌باشد !";
        return false;
    }
}


function delForm(){

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "فرم موردنظر پاک شد."
      });

    let formFname = document.getElementById("fname");
    let formLname = document.getElementById("lname");
    let formEmail = document.getElementById("email");
    let formDescription = document.getElementById("description");

    formFname.value = "";
    formLname.value = "";
    formEmail.value = "";
    formDescription.value = "";

    let fnameResult = document.querySelector("#fnameResult");
    let lnameResult = document.querySelector("#lnameResult");
    let emailResult = document.getElementById("emailResult")
    let descriptionResult = document.getElementById("descriptionResult");

    fnameResult.innerHTML = "";
    lnameResult.innerHTML = "";
    emailResult.innerHTML = "";
    descriptionResult.innerHTML = "";
}



/*----------------------------------------------------------------*/
/*--------------------------Dark Mode Button----------------------*/
/*----------------------------------------------------------------*/

const darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("click", function(){
    const body = document.body;
    const headerSection = document.querySelector("header");
    const aboutSection = document.getElementById("about");
    const counterUp = document.getElementById("counterUp");
    const services = document.getElementById("services");
    const payeKohDescription = document.getElementById("payeKohDescription");
    const accordionSection = document.getElementById("accordion");
    const contactUsSection = document.getElementById("contactUs");
    const footer = document.querySelector("footer");


    if(darkModeBtn.classList.toggle("active")){

        // Dark Mode Button background
        darkModeBtn.style.backgroundColor = "#fff";
        darkModeBtn.querySelector("svg").style.color = "rgba(28, 28, 28, 1)";

        //Change Background Color
        body.style.backgroundColor = "rgba(28, 28, 28, 1)";

        //add class active for header
        headerSection.classList.add("active");

        //add class active for About Section
        aboutSection.classList.add("active");

        //add class active for Counter Up
        counterUp.classList.add("active");

        //add class active for Services
        services.classList.add("active");

        //add class active for PayeKoh Description
        payeKohDescription.classList.add("active");

        //add class active for Accordion
        accordion.classList.add("active");

        //add class active for Contact Us
        contactUsSection.classList.add("active");

        //add class active for Footer
        footer.classList.add("active");

    }else{

        // Dark Mode Button background
        darkModeBtn.style.backgroundColor = "rgba(28, 28, 28, 1)";
        darkModeBtn.querySelector("svg").style.color = "#fff";

        body.style.backgroundColor = "rgba(248, 249, 250, 1)";

        //Remove class active for header
        headerSection.classList.remove("active");
        
        //Remove class active for About Section
        aboutSection.classList.remove("active")

        //Remove class active for About Counter Up
        counterUp.classList.remove("active");

        //Remove class active for Services
        services.classList.remove("active");

        //Remove class active for PayeKoh Description
        payeKohDescription.classList.remove("active");

        //Remove class active for Accordion
        accordion.classList.remove("active");

        //Remove class active for Contact Us
        contactUsSection.classList.remove("active");

        //Remove class active for Footer
        footer.classList.remove("active")

    }
})