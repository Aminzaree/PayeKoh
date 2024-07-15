let phoneInput = document.getElementById("phone");
let sendCodeBtn = document.getElementById("sendCode");
let verifyCodeBtn = document.getElementById("verifyCode")
let register = document.getElementById("register");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let codeInput = document.querySelectorAll(".code-input");
let registerMethod = document.querySelector('.registerMethod');
let otherRegister = document.querySelector('.SignUp-InputBox-other');
let emptyInput = true;
let numberValidationRegex = true;
let numberCount = true;
let verifyCodeEmpty = true;


// Highlight sendCode Button after 11 character 
phoneInput.addEventListener('input', function () {
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


// Send Code button
sendCodeBtn.addEventListener('click', function () {

    numberValidation();
    let phone = $("#phone").val();

    if (emptyInput == true && numberCount == true) {

        // Start Send Axios Request
        sessionStorage.setItem('userPhone', phone);
        let apiUrl = `http://213.134.17.109/auth/${phone}`;

        axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log("همچی درسته")
                step1.classList.add('hidden');
                registerMethod.classList.add("hidden");
                otherRegister.classList.add("hidden");

                setTimeout(function () {
                    step1.style.display = 'none';
                    registerMethod.style.display = 'none';
                    otherRegister.style.display = 'none';
                    step2.style.display = 'block';
                    setTimeout(function () {
                        step2.classList.remove('hidden');
                    }, 20);
                }, 500);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log("این پیغام بیاد یعنی خوردی به دردسر")
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                alert("عدم برقراری ارتباط با سرور");
            });
    }
});


// Go back button (step 2)
document.getElementById('goBack').addEventListener('click', function () {
    let codeInput = document.querySelectorAll(".code-input");
    step2.classList.add('hidden');
    setTimeout(function () {
        step2.style.display = 'none';
        step1.style.display = 'block';
        registerMethod.style.display = 'block';
        otherRegister.style.display = 'flex';
        setTimeout(function () {
            step1.classList.remove('hidden');
            registerMethod.classList.remove("hidden");
            otherRegister.classList.remove("hidden");

        }, 20);
    }, 500);
    codeInput.forEach(function (input) {
        input.value = "";
    })
});


// Verify Btn & send request
verifyCodeBtn.addEventListener('click', function () {

    // Collect OTP values ​​from the inputs:
    const inputs = document.querySelectorAll('.code-input');
    const code = Array.from(inputs).map(input => input.value).join('');

    if (code.length !== 4) {
        alert('لطفاً تمام ارقام کد را وارد کنید.');
        return;
    }

    // Get phone number from session storage:
    const phone = sessionStorage.getItem('userPhone');

    if (!phone) {
        alert('شماره تلفن یافت نشد، لطفاً دوباره وارد شوید.');
        return;
    }

    // Create URL to send OTP code:
    let apiUrl = `http://213.134.17.109/auth/${phone}/`;
    let data = {
        phone: phone,
        otp: code
    };

    // Sending a POST request using axios:
    axios.post(apiUrl, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            // if the request was successful:
            alert('کد OTP تایید شد!');
            console.log("شماره موبایل رو گرفتیم و OTP هم تایید شد")
            console.log(response.status);

            step2.classList.add('hidden');

            setTimeout(function () {
                step2.style.display = 'none';
                step3.style.display = 'block';
                setTimeout(function () {
                    step3.classList.remove('hidden');
                }, 20);
            }, 500);
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            alert("خطا در تایید کد OTP");
            console.log("شماره موبایل رو گرفتیم ولی OTP رو نه !!")
        });
});


// Go back button (step 3)
document.getElementById('goBackbtn').addEventListener('click', function () {
    // let codeInput = document.querySelectorAll(".code-input");
    step3.classList.add('hidden');
    setTimeout(function () {
        step3.style.display = 'none';
        step2.style.display = 'block';
        setTimeout(function () {
            step2.classList.remove('hidden');
        }, 20);
    }, 500);

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

register.addEventListener("click", function(){

    const Email = String(document.getElementById("email").value);
    const Password1 = String(document.getElementById("password1").value);
    const Password2 = String(document.getElementById("password2").value);
    const Username = String(document.getElementById("fullname").value);

    axios.post('http://213.134.17.109/auth/rest-auth/registration/', {
        username: Username,
        email: Email,
        password1: Password1,
        password2: Password2
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        alert("عضویت شما با موفقیت انجام شد.")
        console.log("عضویت شما با موفقیت انجام شد.")
    })
    .catch(function (error){
        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message);
        }
        alert("عدم برقراری ارتباط با سرور")
    })

})

