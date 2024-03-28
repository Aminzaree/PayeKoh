/*----------------------------------------------------------------*/
/*------------------------SignIn Validation-----------------------*/
/*----------------------------------------------------------------*/

function signIn(){

    let username = document.getElementById("email");
    let password = document.getElementById("password");
    let usernameResult = document.getElementById("usernameResult");
    let passwordResult = document.getElementById("passwordResult");

    if(username.value === ""){
        usernameResult.innerHTML = "لطفا آیدی یا شماره موبایل خود را وارد کنید."
    }else{
        usernameResult.innerHTML = " ";
    }

    if(password.value == ""){
        passwordResult.innerHTML = "لطفا گذرواژه خود را وارد کنید."
    }else{
        passwordResult.innerHTML = " ";
    }

    if(username.value === "" || password.value == ""){
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
    }
}



/*----------------------------------------------------------------*/
/*-----------------------Show & Hide Password---------------------*/
/*----------------------------------------------------------------*/

function showPassword(){
    let password = document.getElementById("password");
    let showPasswordBtn = document.getElementById("showPassword");

    if(password.type === "password"){
        password.setAttribute("type" , "text");
        showPasswordBtn.querySelector("svg").classList.replace("fa-eye" , "fa-eye-slash");
    }else{
        password.setAttribute("type" , "password");
        showPasswordBtn.querySelector("svg").classList.replace("fa-eye-slash" , "fa-eye");
    }
}