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
/*----------------------------SignIn Ajax-------------------------*/
/*----------------------------------------------------------------*/


function signIn() {
    let username = document.getElementById("email");
    let password = document.getElementById("password");
    let usernameResult = document.getElementById("usernameResult");
    let passwordResult = document.getElementById("passwordResult");


    if (username.value !== "" && password.value !== "") {

        usernameResult.innerHTML = " "
        passwordResult.innerHTML = " "

        $.ajax({
            url: "URL",
            type: "POST",
            data: {
                email: "your email",
                password: "your password"
            },
            success: function (data) {
                localStorage.token = data.token;
                alert("توکن در لوکال استوریج ذخیره شد");
                console.log(data.token);
            },
            error: function (xhr, status, error) {
                alert("اوضاع خرابه")
            }
        });

    } else {

        if (username.value === "") {
            usernameResult.innerHTML = "لطفا آیدی یا شماره موبایل خود را وارد کنید."
        } else {
            usernameResult.innerHTML = " ";
        }

        if (password.value == "") {
            passwordResult.innerHTML = "لطفا گذرواژه خود را وارد کنید."
        } else {
            passwordResult.innerHTML = " ";
        }

        if (username.value === "" || password.value == "") {
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
                icon: "warning",
                title: "اطلاعات وارد شده کامل نیست."
            });
        };

    }



}


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
/*------------------------SignUp Validation-----------------------*/
/*----------------------------------------------------------------*/


function signUp() {
    const numberRegex = /[0-9]/;
    const phoneNumber = document.getElementById("phoneNumber");

    if (phoneNumber.value.match(numberRegex) == null) {
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
            icon: "warning",
            title: "شماره وارد شده صحیح نیست."
        });
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