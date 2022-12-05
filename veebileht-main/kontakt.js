// JavaScript pärineb kanali Beyond Fireship videost https://www.youtube.com/watch?v=T33NN_pPeNI

// Loome konstandi observer, mis lisab igale elemendile, mis keritakse ekraanile, klassi ".show". Klassis ".show" on ära defineeritud animatsioon. Kui element keritakse ekraanilt välja, siis eemaldatakse klass ".show".
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

// Loome konstandi "hiddenElements", milleks on kõik elemendid klassiga ".hidden" ja käsime prgrammil iga seda "hiddenElements" elementi konstandiga "observer" jälgida
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el));

