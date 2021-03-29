export const toggleDarkMode = () => {
    const html = document.querySelector("html")
    html?.classList.add("htmlDarkMode")
    
    const text = document.querySelectorAll("h1, h2, h3, p, figcaption, a")
    text.forEach(element => {
      element.classList.add("textDarkMode")
    })
    
    const header = document.querySelector("header")
    header?.classList.add("headerDarkMode")
    
    const alarm = document.querySelector("#alarmFigure  img")
    alarm?.classList.add("alarmDarkMode")
    
    const logo = document.querySelector(".logo_normal") as HTMLElement
    logo.style.display = "none"
    
    const logo_white = document.querySelector(".logo_white") as HTMLElement
    logo_white.style.display = "initial"
    
    const menu_items = document.querySelectorAll(".item")
    menu_items.forEach(element => {
      element.classList.add("itemDarkMode")
    })
    
}
