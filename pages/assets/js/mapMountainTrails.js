function moreDetails() {
    Swal.fire({
        title: "اشتراک ویژه پایه کوه",
        text: "برای دسترسی به این ویژگی می‌توانید اشتراک ما را از طریق لینک زیر تهیه کنید.",
        confirmButtonText: "بستن",
        footer: '<a class="rigester" href="signUp.html"><i class="fa-regular fa-user"></i>ورود / ثبت‌نام</a>'
      });
}


let isTextVisible = true;

function showMore() {

    const text = document.getElementById("myText");
    let myLongText = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است";


    if (isTextVisible) {
        text.innerHTML = "لورم ایپسوم متن ساختگی...";
        text.classList.remove("active");
        isTextVisible = false;
    } else {
        text.innerHTML = myLongText;
        text.classList.add("active");
        isTextVisible = true;
    }

}


/*----------------------------------------------------------------*/
/*----------------------------Progress Bar------------------------*/
/*----------------------------------------------------------------*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function(){
    const winScroll = this.window.pageYOffset;
    const height = this.document.documentElement.scrollHeight - this.window.innerHeight;
    const scrolled = (winScroll/height) * 100;
    progressBar.style.width = `${scrolled}%`;
})

// Fuck You Dear JavaScript 😡🙂🧡


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


// Note: CodePen does not allow use of local
// storage (for sensible security reasons).
// If you're adding this code to your own site,
// reinstate the commented-out lines and the
// code will work fully.

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

