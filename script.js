const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let lockBoard = false;
let firstCard , secondCard;

function flipCard() {
    if (lockBoard) return;

    this.classList.add('flip');
    // console.log(this);
    if (!hasFlipped) {
        // first click
        hasFlipped = true;
        firstCard = this;

        return;
    } 
        // else clause
        // second click
        hasFlipped = false;
        secondCard = this;
        checkForMatch();
}

function checkForMatch() {
    
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
        
        isMatch ? disableCards() : unflipCards();   
}      
   


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);

    lockBoard = false;
}



cards.forEach(card => card.addEventListener('click', flipCard));

