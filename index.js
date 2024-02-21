let navOpen = document.getElementById("nav-open");
navOpen.addEventListener("click", ()=>{
    document.getElementById("sidebar").style.display = "flex";
  document.querySelector("nav").style.display="none";

})
let navClose = document.getElementById("close");
navClose.addEventListener("click", ()=>{
    document.getElementById("sidebar").style.display = "none";
    document.querySelector("nav").style.display="flex";

})
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    // console.log(nav);
    nav.classList.toggle("sticky", window.scrollY>0)
})
window.addEventListener("scroll", reveal);   
function reveal(){
    let reveals = document.querySelectorAll('.reveal')
    for(let i = 0; i<reveals.length; i++){
         let windowHeight = window.innerHeight;
         let revealTop = reveals[i].getBoundingClientRect().top;
         let revealPoint = 100;
         

         if(revealTop < windowHeight - revealPoint  ){
            reveals[i].classList.add('active');
        //     $(document).ready(function () {

        //     $('#report').load(location.href + " #report");
        // });

         }else{
            reveals[i].classList.remove('active');
         }
    }
}