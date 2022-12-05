// JavaScript pärineb lehelt https://www.ibrahima-ndaw.com/blog/parallax-effect-with-10-lines-of-javascript/

window.addEventListener("scroll", function() {
  // Aken ootab, millal keritakse, ning see järel liigutab header elemente konstandiks märgitud distantsi võrra. Kuna muu sisu väljaspool header tagi on võimeline liikuma kiiremini, siis tekib äge effekt aka parallax scroll
  const distance = window.scrollY
  document.querySelector("header").style.transform = `translateY(${distance *
    1}px)`
  document.querySelector("header").style.transform = `translateY(${distance * 0.3}px)`
})