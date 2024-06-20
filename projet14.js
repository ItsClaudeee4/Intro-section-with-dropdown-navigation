const link = document.querySelectorAll("#link")
const Features = document.querySelector(".Features")
const links = document.getElementById("links")
const companys = document.getElementById("companys")
const navbar = document.getElementById("navbar")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("closeMenu")
const arrowDown = document.getElementById("arrowDown")
const arrowUp = document.getElementById("arrowUp")
const arrowDown1 = document.getElementById("arrowDown1")
const arrowUp1 = document.getElementById("arrowUp1")
let isVisible = true;



  function show(){
    arrowDown.classList.remove("hidden")
    arrowUp.classList.add("hidden")
   links.style.display = "flex"
    
   }    
   function hide(){
    arrowDown.classList.add("hidden")
    arrowUp.classList.remove("hidden")
   links.style.display = "none"
    
   }    

   
  function show1(){
    arrowDown1.classList.remove("hidden")
    arrowUp1.classList.add("hidden")
    companys.style.display = "flex"
    console.log(2)
    
   }    
   function hide1(){
    arrowDown1.classList.add("hidden")
    arrowUp1.classList.remove("hidden")
    companys.style.display = "none"
    console.log(4)
    
   }  

 menu.addEventListener("click",() => {
    menu.style.display = " none"
    closeMenu.classList.remove("hidden")
    navbar.style.right = "0"

 })

 closeMenu.addEventListener("click",() => {
     menu.style.display = " block"
    closeMenu.classList.add("hidden")
  
    navbar.style.right = "-60%"

 })
 
 
