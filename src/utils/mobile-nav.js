const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const navBar = document.querySelector(".mobile-nav");
  const allLinks = document.querySelectorAll(".mobile-nav__link");
  let isOpen = false;
  console.log(isOpen);
  
  headerBtn.addEventListener("click", () => {
   isOpen = !isOpen;
   if(isOpen){
     navBar.style.display = "flex";
     document.body.style.overflowY = "hidden";
   } else{
     navBar.style.display = "none";
     document.body.style.overflowY = "auto";
   }

   console.log(isOpen);
  })

  allLinks.forEach((link) => {
    console.log(link)
    link.addEventListener("click", () => {
      console.log("a link has been clicked")
      isOpen = false;
      navBar.style.display = "none";
      document.body.style.overflowY = "auto";
      
    })
  })

}

export default mobileNav