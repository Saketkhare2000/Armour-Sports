//navbar open javascript
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open'); 
});



const tl = gsap.timeline({default:{ease: "power1.out"}});
// tl.to(".splash-screen", {
//     duration: 1,
//     y: "-100%",
//     delay:0.5
// })
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
        document.getElementById("signedBtns").style.display = "flex";
        document.getElementById("authBtns").style.display = "none";
    }
    else{
        document.getElementById("authBtns").style.display = "flex";
        document.getElementById("signedBtns").style.display = "none";
}
document.getElementById("logoutBtn").addEventListener("click", function(){
    localStorage.removeItem("isLoggedIn");
    location.reload();
})
};