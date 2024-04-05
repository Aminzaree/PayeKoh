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