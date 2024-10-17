document.addEventListener('DOMContentLoaded', () => {
    const textRef = document.getElementById('typed-text');

    // Initialiser l'effet de texte
    initItyped(textRef, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["front-end Developer", "UX & UI Designer"],
    });
});

// Fonction d'initialisation de l'effet de texte
function initItyped(element, options) {
    const { showCursor, backDelay, backSpeed, strings } = options;
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let cursorVisible = showCursor;
    let interval;

    function type() {
        if (cursorVisible) {
            element.style.borderRight = "2px solid black";
        } else {
            element.style.borderRight = "none";
        }

        const currentString = strings[currentIndex];
        if (isDeleting) {
            element.textContent = currentString.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % strings.length;
                setTimeout(type, backDelay);
                return;
            }
        } else {
            element.textContent = currentString.substring(0, charIndex++);
            if (charIndex > currentString.length) {
                isDeleting = true;
                setTimeout(type, backDelay);
                return;
            }
        }
        setTimeout(type, isDeleting ? backSpeed : 100);
    }

    interval = setInterval(() => {
        cursorVisible = !cursorVisible;
    }, 500);

    type();
}

///////////////////// CV /////////////////////
document.getElementById("resumeButton").addEventListener("click", function() {
    window.open("./src/assets/laloux-cv-ux-2024.pdf", "_blank");
});
