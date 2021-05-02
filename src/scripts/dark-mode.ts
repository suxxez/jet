import { element } from "prop-types"

export const toggleDarkMode = (forceDarkMode?) => {
  const darkModeActive = document
    .querySelector("html")
    ?.classList.contains("htmlDarkMode")

  const html = document.querySelector("html")
  const text = document.querySelectorAll(
    "h1, h2, h3, p, figcaption, a, .copyright"
  )
  const header = document.querySelector("header")
  const alarm = document.querySelector("#alarmFigure  img")
  const logos = document.querySelectorAll(".logo_normal")
  const logos_white = document.querySelectorAll(".logo_white")
  const menu_items = document.querySelectorAll(".item")
  const lampe_on = document.querySelector(".lampe_on") as HTMLElement
  const lampe_off = document.querySelector(".lampe_off") as HTMLElement

  const cards = document.querySelectorAll(".cardContent")

  if (
    (!darkModeActive && !forceDarkMode) ||
    (darkModeActive && forceDarkMode)
  ) {
    html?.classList.add("htmlDarkMode")
    text.forEach(element => {
      element?.classList.add("textDarkMode")
    })
    header?.classList.add("headerDarkMode")
    alarm?.classList.add("alarmDarkMode")

    logos.forEach(logo => {
      (logo as HTMLElement).style.display = "none"
    })
    logos_white.forEach(logo => {
      (logo as HTMLElement).style.display = "block"
    })

    if (lampe_on && lampe_off) {
      lampe_on.style.display = "none"
      lampe_off.style.display = "block"
    }
    menu_items.forEach(element => {
      element?.classList.add("itemDarkMode")
    })

    cards.forEach(element => {
      ;(element as HTMLElement).style.background = "transparent"
    })
  } else if (darkModeActive) {
    html?.classList.remove("htmlDarkMode")
    text.forEach(element => {
      element.classList.remove("textDarkMode")
    })
    header?.classList.remove("headerDarkMode")
    alarm?.classList.remove("alarmDarkMode")

    logos.forEach(logo => {
      (logo as HTMLElement).style.display = "block"
    })
    logos_white.forEach(logo => {
      (logo as HTMLElement).style.display = "none"
    })

    if (lampe_on && lampe_off) {
      lampe_on.style.display = "block"
      lampe_off.style.display = "none"
    }
    menu_items.forEach(element => {
      element.classList.remove("itemDarkMode")
    })
    cards.forEach(element => {
      ;(element as HTMLElement).style.background = "white"
    })
  }
}
