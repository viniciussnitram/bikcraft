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