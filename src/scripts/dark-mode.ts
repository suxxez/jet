export const toggleDarkMode = (forceLightMode?) => {
  const darkModeActive = !document
    .querySelector("html")
    ?.classList.contains("htmlLightMode")

  const html = document.querySelector("html")
  const text = document.querySelectorAll(
    "h1, h2, h3, p, figcaption, a, .copyright"
  )
  const header = document.querySelector("header")
  const logos = document.querySelectorAll(".logo_normal")
  const logos_white = document.querySelectorAll(".logo_white")
  const menu_items = document.querySelectorAll(".item")
  const lampe_on = document.querySelector(".lampe_on") as HTMLElement
  const lampe_off = document.querySelector(".lampe_off") as HTMLElement

  const cards = document.querySelectorAll(".cardContent")

  if ((darkModeActive && !forceLightMode) || (!darkModeActive && forceLightMode)) {
    html?.classList.add("htmlLightMode")
    text.forEach(element => {
      element?.classList.add("textLightMode")
    })
    header?.classList.add("headerLightMode")

    logos.forEach(logo => {
      ;(logo as HTMLElement).style.display = "block"
    })
    logos_white.forEach(logo => {
      ;(logo as HTMLElement).style.display = "none"
    })

    if (lampe_on && lampe_off) {
      lampe_on.style.display = "block"
      lampe_off.style.display = "none"
    }
    menu_items.forEach(element => {
      element?.classList.add("itemLightMode")
    })

    cards.forEach(element => {
      ;(element as HTMLElement).style.background = "white"
    })
  } else if (!darkModeActive) {
    html?.classList.remove("htmlLightMode")
    text.forEach(element => {
      element.classList.remove("textLightMode")
    })
    header?.classList.remove("headerLightMode")

    logos.forEach(logo => {
      ;(logo as HTMLElement).style.display = "none"
    })
    logos_white.forEach(logo => {
      ;(logo as HTMLElement).style.display = "block"
    })

    if (lampe_on && lampe_off) {
      lampe_on.style.display = "none"
      lampe_off.style.display = "block"
    }
    menu_items.forEach(element => {
      element.classList.remove("itemLightMode")
    })
    cards.forEach(element => {
      (element as HTMLElement).style.background = "transparent"
    })
  }
}
