document.addEventListener('DOMContentLoaded', function () {
  // Get the game path from the query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const gamePath = urlParams.get('game');

  if (gamePath) {
    // Load the JSON file and extract the game name
    fetch('games.json')
      .then(response => response.json())
      .then(data => {
        const gameName = getGameName(data, gamePath);

        // Set the game name in the H1 element
        const gameNameElement = document.getElementById('game-name');
        if (gameNameElement) {
          gameNameElement.textContent = gameName;
        } else {
          console.error('H1 element with ID "game-name" not found.');
        }

        // Set the src attribute of the iframe with the game path
        const iframe = document.getElementById('game-iframe');
        if (iframe) {
          iframe.src = gamePath;
        } else {
          console.error('Iframe element with ID "game-iframe" not found.');
        }
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  } else {
    console.error('No game path provided.');
  }
});
  


// Function to extract game name from the path based on the JSON data
function getGameName(jsonData, gamePath) {
  const game = jsonData.find(entry => entry.path === gamePath);
  return game ? game.name : 'Unknown Game';
}
