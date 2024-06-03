var phoneInput = document.getElementById("phone");
var codeInput = document.querySelectorAll(".code-input");
var emptyInput = true;
var numberValidationRegex = true;
var numberCount = true;
var verifyCodeEmpty = true;


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

        var numRegex = regex = /^\d*$/;
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


document.getElementById('sendCode').addEventListener('click', function () {

    numberValidation();

    if (emptyInput == true && numberCount == true) {
        document.getElementById('step1').classList.add('hidden');
        document.querySelector('.register').classList.add("hidden");
        document.querySelector('.SignUp-InputBox-other').classList.add("hidden");
        setTimeout(function () {
            document.getElementById('step1').style.display = 'none';
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.SignUp-InputBox-other').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
            setTimeout(function () {
                document.getElementById('step2').classList.remove('hidden');
            }, 20);
        }, 500);
    }
});

document.getElementById('goBack').addEventListener('click', function () {
    var codeInput = document.querySelectorAll(".code-input");
    document.getElementById('step2').classList.add('hidden');
    setTimeout(function () {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step1').style.display = 'block';
        document.querySelector('.register').style.display = 'block';
        document.querySelector('.SignUp-InputBox-other').style.display = 'flex';
        setTimeout(function () {
            document.getElementById('step1').classList.remove('hidden');
            document.querySelector('.register').classList.remove("hidden");
            document.querySelector('.SignUp-InputBox-other').classList.remove("hidden");

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


document.getElementById('verifyCode').addEventListener('click', function () {

    verifyValidation();

    if (verifyCodeEmpty == true) {
        const code = Array.from(inputs).map(input => input.value).join('');
        alert('کد وارد شده: ' + code);
    }

});