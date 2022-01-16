// Sign Up Functionality
const signUp = (event) => {
    let name = document.getElementById('signup-name').value
    let email = document.getElementById('signup-email').value
    let password = document.getElementById('signup-password').value
    localStorage.setItem('Password', password)
    localStorage.setItem('Email', email)
    localStorage.setItem('Name', name)
    localStorage.setItem('isLoggedIn', "true")
    alert("Registered Successfully")
    window.location.href = "index.html"
}
//navbar open javascript
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

window.onload = function () {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById("signedBtns").style.display = "flex";
        document.getElementById("authBtns").style.display = "none";
    }
    else {
        document.getElementById("authBtns").style.display = "flex";
        document.getElementById("signedBtns").style.display = "none";
    }
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        location.reload();
    })
};