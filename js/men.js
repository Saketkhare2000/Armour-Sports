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