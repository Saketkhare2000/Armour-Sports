//navbar open javascript
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open'); 
});

// const loadingScreen = document.querySelector('.loadingScreen');

// setTimeout(() => {
//     loadingScreen.classList.toggle('scrnRemove');
// }, 4000);

const tl = gsap.timeline({default:{ease: "power1.out"}});
tl.to('.loadingScreen', {duration: 0.5, y:"-100%", ease: "power1.out", delay:1.5})
tl.fromTo('nav', {
    duration: 1,
    opacity: 0.25,
    y: -100,
    },{
    duration: 1,
    opacity: 1,
    y: 0,
})
.from('.heroImg img', {
    opacity: 0,
    scale:1.5
}).from('.heroContent ', {
    opacity: 0,
    y: 100
})

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



