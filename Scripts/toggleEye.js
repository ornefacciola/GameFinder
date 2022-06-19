const togglePassword = document.getElementById("togglePassword");

function togglePw() {
    var password = document.querySelector('[name=password]');

    if(password.getAttribute('type')==='password'){
        password.setAttribute('type', 'text');
        document.getElementById('togglePassword').classList.toggle=("bi bi-eye");
    } else {
        password.setAttribute('type', 'password');
        document.getElementById('togglePassword').classList.toggle=("bi bi-eye-slash");
    }
}