//navbar open javascript
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

window.onload = function() {
  if(localStorage.getItem('isLoggedIn') === 'true'){
      document.getElementById("logoutBtn").style.display = "block";
      document.getElementById("loginBtn").style.display = "none";
      document.getElementById("signUpBtn").style.display = "none";
  }
  else{
      document.getElementById("logoutBtn").style.display = "none";
      document.getElementById("loginBtn").style.display = "block";
      document.getElementById("signUpBtn").style.display = "block";
}
document.getElementById("logoutBtn").addEventListener("click", function(){
  localStorage.removeItem("isLoggedIn");
  location.reload();
})

};


//get value of the cart
var price = document.querySelectorAll('.productPrice');
var prices = [];
var totalPrice = document.querySelector('.totalPrice');
var total = 0;
for (let i = 0; i < price.length; i++) {
  prices.push(price[i].innerHTML);
  total += parseInt(prices[i]);
}
totalPrice.innerHTML = total;

