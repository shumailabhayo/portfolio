document.querySelector('.hamburg').addEventListener('click', () => {
    const navbar = document.querySelector('.dropdown');
    navbar.style.display = 'block';
    navbar.style.transform = 'translateY(0px)';
});

document.querySelector('.cancel').addEventListener('click', () => {
    const navbar = document.querySelector('.dropdown');
    navbar.style.display = 'none';
    navbar.style.transform = 'translateY(-100%)';
});

// Typewriter Effect
const texts = ["DEVELOPER", "YOUTUBER", "DESIGNER"];
let speed = 100;
let textIndex = 0;
let charIndex = 0;
const textElement = document.querySelector('.typewriter-text');

function typewrite() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typewrite, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typewrite, speed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typewrite, speed);
});
