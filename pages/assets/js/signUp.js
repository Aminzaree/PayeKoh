let phoneInput = document.getElementById("phone");
let sendCodeBtn = document.getElementById("sendCode");
let verifyCodeBtn = document.getElementById("verifyCode")
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let codeInput = document.querySelectorAll(".code-input");
let registerBtn = document.querySelector('.register');
let otherRegister = document.querySelector('.SignUp-InputBox-other');
let emptyInput = true;
let numberValidationRegex = true;
let numberCount = true;
let verifyCodeEmpty = true;


// Highlight sendCode Button after 11 character 
phoneInput.addEventListener('input', function() {
    var phoneNumber = this.value;
    if (phoneNumber.length === 11) {
        sendCodeBtn.classList.add('highlight-border');
    } else {
        sendCodeBtn.classList.remove('highlight-border');
    }
});


// Clear Input Value by click on xmark button
function clearInput(button) {
    var phoneNumberInput = button.previousElementSibling;
    phoneNumberInput.value = "";
}


// Number Validation (Step 1)
function numberValidation() {

    if (phoneInput.value !== '') {
        emptyInput = true;
    } else {
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
            title: "لطفا شماره موبایل خود را وارد کنید"
        });
        emptyInput = false;
    }

    if (phoneInput.value !== '') {

        let numRegex = regex = /^\d*$/;
        if (phoneInput.value.match(numRegex)) {
            numberValidationRegex = true;
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
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
                title: "شماره موبایل فقط می‌تواند عدد باشد."
            });
            numberValidationRegex = false
        }

        let phoneNumber = phoneInput.value;

        if (!phoneInput.value.match(numRegex)) {

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
                title: "شماره موبایل فقط می‌تواند عدد باشد."
            });

            numberCount = false;

        } else if (phoneNumber.length !== 11) {

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
                title: "شماره موبایل باید 11 رقم باشد"
            });

            numberCount = false;

        } else if (!phoneNumber.startsWith('09')) {

            numberCount = false;
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
                title: "شماره موبایل باید با ٠٩ شروع شود."
            });

        } else {
            numberCount = true;
        }
    }
}
  

// Verify code validation (Step 2)
function verifyValidation() {

    let allFilled = true;
    for (let input of codeInput) {
        if (input.value === '') {
            allFilled = false;
            break;
        }
    }
    if (!allFilled) {
        verifyCodeEmpty = false;
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
            title: "لطفا تمامی فیلدها را پر کنید."
        });
        emptyInput = false;
    } else {
        verifyCodeEmpty = true;
    }

}


// Send Code button validation & Request 
sendCodeBtn.addEventListener('click', function () {

    numberValidation();

    if (emptyInput == true && numberCount == true) {

        document.getElementById('step1').classList.add('hidden');
        document.querySelector('.register').classList.add("hidden");
        otherRegister.classList.add("hidden");
        setTimeout(function () {
            document.getElementById('step1').style.display = 'none';
            document.querySelector('.register').style.display = 'none';
            otherRegister.style.display = 'none';
            document.getElementById('step2').style.display = 'block';
            setTimeout(function () {
                document.getElementById('step2').classList.remove('hidden');
            }, 20);
        }, 500);
    }
});


// document.getElementById('sendCodeBtn').addEventListener('click', function () {

//     numberValidation();
//     let phone = $("#phone").val();

//     if (emptyInput == true && numberCount == true) {

//         // Start Send Axios Request
//         axios.post('http://213.134.17.109/auth/rest-auth/registration/', {
//             phone: phone,
//         }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(function (response) {
//                 // در صورتی که پاسخ موفقیت‌آمیز باشد
//                 step1.classList.add('hidden');
//                 registerBtn.classList.add("hidden");
//                 otherRegister.classList.add("hidden");

//                 setTimeout(function () {

//                     step1.style.display = 'none';
//                     registerBtn.style.display = 'none';
//                     otherRegister.style.display = 'none';
//                     step2.style.display = 'block';
//                     setTimeout(function () {
//                         step2.classList.remove('hidden');
//                     }, 20);
//                 }, 500);

//             })
//             .catch(function (error) {
//                 if (error.response) {
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                     console.log(error.response.headers);
//                 } else if (error.request) {
//                     console.log(error.request);
//                 } else {
//                     console.log('Error', error.message);
//                 }
//                 alert("عدم برقراری ارتباط با سرور");
//             });
//             // .catch(function (error) {
//             //     console.error('There was a problem with the axios operation:', error);
//             //     // اگر خطایی رخ داد، کاربر در همان مرحله باقی بماند
//             // });
//     }
// });



document.getElementById('goBack').addEventListener('click', function () {
    let codeInput = document.querySelectorAll(".code-input");
    step2.classList.add('hidden');
    setTimeout(function () {
        step2.style.display = 'none';
        step1.style.display = 'block';
        registerBtn.style.display = 'block';
        otherRegister.style.display = 'flex';
        setTimeout(function () {
            step1.classList.remove('hidden');
            registerBtn.classList.remove("hidden");
            otherRegister.classList.remove("hidden");

        }, 20);
    }, 500);
    codeInput.forEach(function (input) {
        input.value = "";
    })
});



const inputs = document.querySelectorAll('.code-input');
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });
});


// Verify Code & register
verifyCodeBtn.addEventListener('click', function () {

    verifyValidation();

    if (verifyCodeEmpty == true) {
        const code = Array.from(inputs).map(input => input.value).join('');
        alert('کد وارد شده: ' + code);
    }

});