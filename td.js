// Create confetti (hearts and flowers)
const confettiContainer = document.querySelector('.confetti-container');
const confettiElements = ['heart', 'flower'];

// Function to create a confetti element (heart or flower)
function createConfetti() {
    const confetti = document.createElement('div');
    const confettiType = confettiElements[Math.floor(Math.random() * confettiElements.length)];
    confetti.classList.add('confetti', confettiType);
    
    const size = Math.random() * 30 + 10 + 'px';
    confetti.style.width = size;
    confetti.style.height = size;
    
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    confettiContainer.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Create confetti every 100 milliseconds
setInterval(createConfetti, 100);