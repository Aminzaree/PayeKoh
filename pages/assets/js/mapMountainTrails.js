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

window.addEventListener("scroll", function () {
  const winScroll = this.window.pageYOffset;
  const height = this.document.documentElement.scrollHeight - this.window.innerHeight;
  const scrolled = (winScroll / height) * 100;
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
/*----------------------------Send Comment------------------------*/
/*----------------------------------------------------------------*/


let modalDialog = document.getElementById("modalDialog");
let myModal = document.getElementById("myModal");

function commentModal() {
    modalDialog.style.display = "block";
    setTimeout(() => {
        modalDialog.classList.add("openModal");
        setTimeout(() => {
            myModal.classList.add("showModal");
        }, 50);
    }, 50);
}

function footerCloseBtn() {
    myModal.classList.remove("showModal");
    setTimeout(() => {
        modalDialog.classList.remove("openModal");
        setTimeout(() => {
            modalDialog.style.display = "none";
        }, 300);
    }, 300);
}

window.onclick = function(event) {
    if (event.target === myModal) {
        footerCloseBtn();
    }
}


function saveMap(){
  Swal.fire({
    title: "ذخیره نقشه (نام نقشه)",
    text: "آیا از ذخیره کردن نقشه (نام نقشه) اطمینان دارید !؟",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله، ذخیره شود",
    cancelButtonText: "فعلا نه!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "نقشه با موفقیت ذخیره شد :)",
        icon: "success",
        confirmButtonText: "بستن"
      });
    }
  });
}



var is3DMap = false;

function changeTo3DMap(e) {

  const mapFrame = document.getElementById("mapFrame");

  if (is3DMap) {
    mapFrame.src = "https://payekoh.ir/points/allpoints.html";
    e.textContent = "3D"
  } else {
    mapFrame.src = "https://payekoh.ir/maps/3D/120921647.html"
    e.textContent = "2D"
  }

  is3DMap = !is3DMap;

  console.log(e)
}