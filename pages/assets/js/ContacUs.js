document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.contactInput');
    
    inputs.forEach(input => {
        if (input.value !== "") {
            input.classList.add('has-content');
        }

        input.addEventListener('input', function() {
            if (this.value !== "") {
                this.classList.add('has-content');
            } else {
                this.classList.remove('has-content');
            }
        });
    });
});