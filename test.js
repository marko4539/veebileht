window.onload = function() {
    const EFFECT = document.querySelector('#effect');

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if(window.scrollY>=500) {
            EFFECT.style.opacity = '1';
            EFFECT.style.transform = 'translateX(0px)';
            EFFECT.style.transition = '1s ease-in-out';
        }
        else {
            EFFECT.style.opacity = '0'
            EFFECT.style.transform = 'translateX(-50px)'
        }
    }
    scrollEffect();
}

var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.control-prev')
var nextBtn = document.querySelector('.control-next')
var currenIndex = 0;

function updateImageByIndex(index) {
    //remove active class
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })
    currenIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0'

        setTimeout(() => {
            updateImageByIndex(index)
            imgFeature.style.opacity = '1'

        }, 400)
    })
})
prevBtn.addEventListener('click', e => {
    if (currenIndex == 0) {
        currenIndex = listImg.length - 1
    } else {
        currenIndex--
    }
    imgFeature.style.animation = ''
    setTimeout(() => {
        updateImageByIndex(currenIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'
    }, 200)
})
nextBtn.addEventListener('click', e => {
    if (currenIndex == listImg.length - 1) {
        currenIndex = 0
    } else {
        currenIndex++
    }
    imgFeature.style.animation = ''
    setTimeout(() => {
        updateImageByIndex(currenIndex)
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards'
    }, 200)
})
updateImageByIndex(0)