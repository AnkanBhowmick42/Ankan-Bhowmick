// Scroll reveal animation
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Listen for scroll and initial load
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Text animation for programmer text
const programmerText = document.querySelector('.text-animate');
if (programmerText) {
    programmerText.addEventListener('mouseover', () => {
        programmerText.style.animationPlayState = 'paused';
    });
    programmerText.addEventListener('mouseout', () => {
        programmerText.style.animationPlayState = 'running';
    });
}

// Add hover effects to skill rows
document.querySelectorAll('.skill-row').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        const img = skill.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        }
    });

    skill.addEventListener('mouseout', () => {
        const img = skill.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});
