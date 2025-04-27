document.addEventListener('DOMContentLoaded', function () {
  // Fetch the JSON file with game data
  fetch('games.json')
    .then(response => response.json())
    .then(games => {
      // Create game buttons dynamically
      const gamesContainer = document.getElementById('games-container');

      games.forEach(game => {
        const gameButton = document.createElement('a');
        gameButton.href = `load.html?game=${encodeURIComponent(game.path)}`;
        gameButton.className = 'image-button';

        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameButton.appendChild(gameImage);

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = game.name;
        gameButton.appendChild(tooltip);

        gamesContainer.appendChild(gameButton);
      });
    })
    .catch(error => console.error('Error fetching games:', error));
});
