const risks = [
    "Not wearing helmet",
    "Cyberbullying",
    "Running on wet floors",
    "Sharing passwords",
    "Not looking both ways",
    "Leaving drinks unattended",
    "Skipping sunscreen",
    "Using phone while walking",
    "Talking to strangers",
    "Not washing hands",
    "Sitting too close to screen",
    "Ignoring fire drills",
    "Littering",
    "Skipping breakfast",
    "Not reporting bullying"
];

function generateBingoCard() {
    const card = document.getElementById('bingoCard');
    card.innerHTML = '';
    
    const shuffled = [...risks].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.className = 'bingo-square';
        
        if (i === 12) {
            square.textContent = "FREE";
            square.style.backgroundColor = "#f39c12";
        } else {
            square.textContent = shuffled[i];
        }
        
        square.addEventListener('click', function() {
            this.classList.toggle('marked');
        });
        
        card.appendChild(square);
    }
}

document.getElementById('new-card-btn').addEventListener('click', generateBingoCard);

// Generate first card
generateBingoCard();