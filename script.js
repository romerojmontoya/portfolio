// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Typing Effect for Changing Text
const typingText = ["UX Designer", "UX Researcher"];
let typingIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector('.typing');
let typingDelay = 150;
let erasingDelay = 100;
let newTextDelay = 2000;

function type() {
    if (charIndex < typingText[typingIndex].length) {
        typingElement.textContent += typingText[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[typingIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        typingIndex++;
        if (typingIndex >= typingText.length) typingIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (typingText.length) setTimeout(type, newTextDelay + 250);
});
