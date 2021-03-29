export const toggleDarkMode = () => {
  const darkModeActive = document
    .querySelector("html")
    ?.classList.contains("htmlDarkMode")

  const html = document.querySelector("html")
  const text = document.querySelectorAll("h1, h2, h3, p, figcaption, a")
  const header = document.querySelector("header")
  const alarm = document.querySelector("#alarmFigure  img")
  const logo = document.querySelector(".logo_normal") as HTMLElement
  const logo_white = document.querySelector(".logo_white") as HTMLElement
  const menu_items = document.querySelectorAll(".item")

  if (!darkModeActive) {
    html?.classList.add("htmlDarkMode")

    text.forEach(element => {
      element.classList.add("textDarkMode")
    })

    header?.classList.add("headerDarkMode")

    alarm?.classList.add("alarmDarkMode")

    logo.style.display = "none"

    logo_white.style.display = "block"

    menu_items.forEach(element => {
      element.classList.add("itemDarkMode")
    })
  } else if(darkModeActive) {
    html?.classList.remove("htmlDarkMode")

    text.forEach(element => {
      element.classList.remove("textDarkMode")
    })

    header?.classList.remove("headerDarkMode")

    alarm?.classList.remove("alarmDarkMode")

    logo.style.display = "block"

    logo_white.style.display = "none"

    menu_items.forEach(element => {
      element.classList.remove("itemDarkMode")
    })
  }
}
