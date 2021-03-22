export const initiateHeaderScroll = () => {
  const doc = document.documentElement

  const w = window

  let prevScroll = w.scrollY || doc.scrollTop
  let curScroll
  let direction = 0
  let prevDirection = 0

  const header = document.querySelector("header")

  let checkScroll = function () {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = w.scrollY || doc.scrollTop
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll)
    }

    prevScroll = curScroll

    // Hintergrundfarbe des Headers wird geändert, wenn 300px weit runtergescrollt wurde
    if (window.scrollY > 300) {
      header?.classList.add("change-color")
    } else {
      header?.classList.remove("change-color")
    }
  }

  let toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 300) {
      console.log(curScroll);
      
      //replace 52 with the height of your header in px

      header?.classList.add("hide")
      prevDirection = direction
    } else if (direction === 1) {
      header?.classList.remove("hide")
      prevDirection = direction
    }
  }

  window.addEventListener("scroll", checkScroll)
}
