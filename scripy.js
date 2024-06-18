const dogImage = document.getElementById('dogImage');

function makeDogHappy() {
    dogImage.src = 'jake feliz.jpg';
}

function makeDogSad() {
    dogImage.src = 'jake.jpg';
}

dogImage.addEventListener('mouseover', makeDogHappy);
dogImage.addEventListener('mouseout', makeDogSad);