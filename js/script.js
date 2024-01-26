// Activate Menu Links
const links = document.querySelectorAll('.header-menu a');

function activateLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('active');
    }
}

links.forEach(activateLink);

// Activate Budget Items
const params = new URLSearchParams(location.search);

function activateProduct(param) {
    const element = document.getElementById(param);
    
    if (element) {
        element.checked = true;
    }
}

params.forEach(activateProduct);

// FAQ
const questions = document.querySelectorAll('.faq button');

function activateQuestion(event) {
    const currentQuestion = event.currentTarget;
    const controls = currentQuestion.getAttribute('aria-controls');
    const answer = document.getElementById(controls);

    answer.classList.toggle('active');
    const active = answer.classList.contains('active');
    currentQuestion.setAttribute('aria-expanded', active);
}

function questionsEvents(question) {
    question.addEventListener('click', activateQuestion);
}

questions.forEach(questionsEvents);

// Bikes Gallery
const gallery = document.querySelectorAll('.bike-images img');
const galleryContainer = document.querySelector('.bike-images');

function changeImage(event) {
    const currentImg = event.currentTarget;
    const media = matchMedia ('(min-width: 1000px)').matches;

    if (media) {
        galleryContainer.prepend(currentImg);
    }
}

function galleryEvents(img) {
    img.addEventListener('click', changeImage);
}

gallery.forEach(galleryEvents);

// Animation
if (window.SimpleAnime) {
    new SimpleAnime();
}
