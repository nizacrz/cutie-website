const favorites = {
  Y: ["Yogurt", "Yearly planner", "Youthful energy", "Yummy sushi"],
  U: ["Udon", "Ultra-Soft Blanket", "Unexpected Trips", "Unexpected Friends"],
  N: ["Nature Walks", "Noodles", "New York City", "Necklace"],
  I: ["Ice Cream", "Iced Coffee Vanilla", "Island", "Ice Skating Videos"],
  C: ["Cakes", "Cute Taffy", "Cozy Cafés", "Coastal Views"],
  E: ["Eggs", "Energetic music", "Endless laughter", "Exploring new places"],
};

let currentIndex = 0;

function showFavoritesForLetter() {
  const outputContainer = document.getElementById("favoritesList");
  const letters = ["Y", "U", "N", "I", "C", "E"];

  if (currentIndex < letters.length) {
    const currentLetter = letters[currentIndex];
    const currentFavorites = favorites[currentLetter];

    // Display the current letter
    outputContainer.innerHTML = `<h2>${currentLetter}</h2>`;

    // Use a loop to display the favorites for the current letter
    for (let j = 0; j < currentFavorites.length; j++) {
      // Display each favorite one at a time with a delay
      setTimeout(() => {
        outputContainer.innerHTML += `<p>${currentFavorites[j]}</p>`;
      }, j * 1000); // Adjust the delay as needed
    }

    currentIndex++;
  } else {
    // Reset index when all letters have been shown
    currentIndex = 0;
    outputContainer.innerHTML = ""; // Clear the output
  }
}

// Button click event listener
document
  .getElementById("generateFavoritesBtn")
  .addEventListener("click", showFavoritesForLetter);
