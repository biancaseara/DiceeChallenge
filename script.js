/**
 * Rolls two dice and updates the page to show the results,
 * including the dice images and winner announcement.
 */
function rollDice() {
    // Random numbers for each player
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Players
    const player1 = document.querySelector('img.img1');
    const player2 = document.querySelector('img.img2');
    
    // Getting the heading
    const heading = document.querySelector('h1');
    
    // Setting the images according to the random number
    player1.setAttribute('src', `images/dice${randomNumber1}.png`);
    player2.setAttribute('src', `images/dice${randomNumber2}.png`);
    
    // Determining the winner and updating the heading
    if (randomNumber1 > randomNumber2) {
        heading.textContent = '🚩 Player 1 Wins!';
    } else if (randomNumber2 > randomNumber1) {
        heading.textContent = 'Player 2 Wins! 🚩';
    } else {
        heading.textContent = 'Draw! 🎌';
    }
}

rollDice();
