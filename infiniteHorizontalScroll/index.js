const scrollers = document.querySelectorAll(".scroller")

const addAnimation = () => {
  scrollers.forEach(scroller => {
    scroller.setAttribute("data-animated", true)

    const scrollerInner = document.querySelector(".scroller_inner")
    const scrollerContent = Array.from(scrollerInner.children) 

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)

      duplicatedItem.setAttribute("aria-hidden", true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}

if (!window.matchMedia("(prefers-reduced-motion: reduc)").matches) {
  addAnimation();
}