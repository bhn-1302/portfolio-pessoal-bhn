const btnSaibaMais = document.getElementById('info-author-button')
const authorInformation = document.getElementById('info-author')
const btnHideInformation = document.getElementById('hide-info-author')
const slides = document.querySelectorAll('.slide')
const rightArrow = document.getElementById('forward-arrow')
const leftArrow = document.getElementById('go-back-arrow')
const form = document.getElementById('formulario')

let slideAtual = 0

slides.forEach((slide) => {
    slide.classList.add('hidden')
})

slides[slideAtual].classList.remove('hidden')
slides[slideAtual].classList.add('visible')

rightArrow.addEventListener('click', () => {
    if (slideAtual === slides.length -1) {
        return;
    }

    updateSlide()

    slideAtual++
    slides[slideAtual].classList.remove('hidden')
    slides[slideAtual].classList.add('visible')

    showOrHideArrows()
})

leftArrow.addEventListener('click', () => {
    if (slideAtual === 0){
        return;
    }

    updateSlide()
    
    slideAtual--
    slides[slideAtual].classList.remove('hidden')
    slides[slideAtual].classList.add('visible')

    showOrHideArrows()
})

function updateSlide () {
    const openedSlide = document.querySelector('.visible')
    openedSlide.classList.remove('visible')
    openedSlide.classList.add('hidden')
}

function showOrHideArrows () {
    const notFirstSlide = slideAtual != 0
    if(notFirstSlide) {
        leftArrow.classList.remove('opacidade')
    } else {
        leftArrow.classList.add('opacidade')
    }

    const lastSlide = slideAtual != 0 && slideAtual === slides.length -1
    if(lastSlide) {
        rightArrow.classList.add('opacidade')
    } else {
        rightArrow.classList.remove('opacidade')
    }
}

btnSaibaMais.addEventListener('click', () => {
    authorInformation.classList.remove('hidden')
    btnSaibaMais.classList.add('hidden')
    btnHideInformation.classList.remove('hidden')
})

btnHideInformation.addEventListener('click', () => {
    authorInformation.classList.add('hidden')
    btnSaibaMais.classList.remove('hidden')
    btnHideInformation.classList.add('hidden')
})

form.addEventListener('submit', () => {
    alert('Mensagem enviada com sucesso para Brenno Nascimento')
})