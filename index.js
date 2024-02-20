let navOpen = document.getElementById("nav-open");
navOpen.addEventListener("click", ()=>{
    document.getElementById("sidebar").style.display = "flex";
})
let navClose = document.getElementById("close");
navClose.addEventListener("click", ()=>{
    document.getElementById("sidebar").style.display = "none";
})