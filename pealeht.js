// JavaScript pärineb lehelt https://www.ibrahima-ndaw.com/blog/parallax-effect-with-10-lines-of-javascript/

window.addEventListener("scroll", function() {
  // Aken ootab, millal keritakse, ning see järel liigutab header elemente konstandiks märgitud distantsi võrra. Kuna muu sisu väljaspool header tagi on võimeline liikuma kiiremini, siis tekib äge effekt aka parallax scroll
  const distance = window.scrollY
  document.querySelector("header").style.transform = `translateY(${distance *
    1}px)`
  document.querySelector("header").style.transform = `translateY(${distance * 0.3}px)`
  // Määrab aja, mmille möödumisel rakendatakse .querySelector'iga määratud elementidele klass "animate-me", mis on defineeritud 
  // setTimeout(() => {
  //   document.querySelector("section p").classList.add("animate-me")
  //   document.querySelector("section h1").classList.add("animate-me")
  //   document.querySelector(" section img").classList.add("animate-me")
  //   document.querySelector("nav").classList.add("animate-me")
  //   document.querySelector("section h2").classList.add("animate-me")
  //   document.querySelector("section ul").classList.add("animate-me")

  // }, 400)
})