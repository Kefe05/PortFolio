const handleTheme = () => {
  const themeTogglers = document.querySelectorAll("#theme-toggle");

  const theme = localStorage.getItem('theme');

  theme && document.body.classList.add("light-mode")
  

  const changeTheme = () => {
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
      localStorage.setItem("theme" , "light-mode");
    } else{
      localStorage.removeItem("theme");
      document.body.removeAttribute('class')
    }
  }

  themeTogglers.forEach(themeToggler  =>{
    themeToggler.addEventListener("click", changeTheme)
  })
}

export default handleTheme