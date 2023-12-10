// Function to update time and date
function updateTimeAndDate() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString();

  document.getElementById("current-time").innerText = time;
  document.getElementById("current-date").innerText = date;
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000);

// Initial call to set the time and date immediately
updateTimeAndDate();

// Function to greet the user based on mood and change background color
function checkMoodColor() {
  // Get the user's name from the input
  const userName = prompt("What is your name?");

  // Check if a name is provided
  if (userName) {
    // Get the user's mood
    const userMood = prompt(
      `Hi ${userName}! How are you feeling today?`
    ).toLowerCase();

    // Map mood colors
    const moodColors = {
      happy: "#ffd700", // Yellow
      sad: "#4682b4", // Steel Blue
      motivated: "#32cd32", // Lime Green
      good: "#E977E5", // Spring Green
      energetic: "#ff4500", // Orange Red
      relaxed: "#87ceeb", // Sky Blue
      anxious: "#ff6347", // Tomato
      tired: "#a9a9a9", // Dark Gray
      angry: "#ff0000", // Red
    };

    // Check the user's mood and change background color
    if (moodColors[userMood]) {
      document.getElementById("aboutBody").style.backgroundColor =
        moodColors[userMood];

      // Display user's name
      document.getElementById(
        "displayQuotes"
      ).innerHTML = `<p style="color: white;">${userName}, you are currently feeling ${userMood}.</p>`;

      // Display quotes based on mood
      if (userMood === "happy") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama</blockquote>`;
      } else if (userMood === "sad") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"The waves always pass."</blockquote>`;
      } else if (userMood === "motivated") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Believe you can and you're halfway there." - Theodore Roosevelt</blockquote>`;
      } else if (userMood === "good") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Good vibes only."</blockquote>`;
      } else if (userMood === "energetic") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Energy and persistence conquer all things." - Benjamin Franklin</blockquote>`;
      } else if (userMood === "relaxed") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Your calm mind is the ultimate weapon against your challenges." - Bryant McGill</blockquote>`;
      } else if (userMood === "anxious") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Every tomorrow has two handles. We can take hold of it with the handle of anxiety or the handle of faith." - Henry Ward Beecher</blockquote>`;
      } else if (userMood === "tired") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"Sometimes the most productive thing you can do is relax." - Mark Black</blockquote>`;
      } else if (userMood === "angry") {
        document.getElementById(
          "displayQuotes"
        ).innerHTML += `<p style="color: white;">Here's a quote for you:</p>
  <blockquote style="color: white;">"For every minute you remain angry, you give up sixty seconds of peace of mind." - Ralph Waldo Emerson</blockquote>`;
      } else {
        alert(`I'm not familiar with that mood, ${userName}.`);
      }
    } else {
      alert(`I'm not familiar with that mood, ${userName}.`);
    }
  } else {
    alert("Please enter your name.");
  }
}
