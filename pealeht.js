window.addEventListener("scroll", function() {
  const distance = window.scrollY
  document.querySelector("header").style.transform = `translateY(${distance *
    1}px)`
  document.querySelector("header").style.transform = `translateY(${distance * 0.3}px)`
  setTimeout(() => {
    document.querySelector("section p").classList.add("animate-me")
    document.querySelector("section h1").classList.add("animate-me")
    document.querySelector("section img").classList.add("animate-me")
    document.querySelector("section nav").classList.add("animate-me")
    document.querySelector("section h2").classList.add("animate-me")
    document.querySelector("section ul").classList.add("animate-me")
    document.querySelector("section suur_sisu").classList.add("animate-me")

  }, 400)
})
