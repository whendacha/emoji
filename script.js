const fakeMeanings = {
  "😀": "Grinning face: happiness, friendliness, good mood.",
  "😂": "Face with tears of joy: laughter, fun times.",
  "😍": "Heart eyes: love, attraction, affection.",
  "🤔": "Thinking face: curiosity, thinking, deep thoughts.",
  "🔥": "Fire: hot, trendy, passion.",
  "❤️": "Heart: love, affection, care.",
  "🎉": "Party popper: celebration, party, good times.",
  "👍": "Thumbs up: approval, agreement, good job.",
  "🙌": "Raising hands: praise, celebration, yay!",
  "🤯": "Exploding head: mind blown, shock.",
  "🥳": "Party face: having fun, celebration.",
  "💯": "Hundred points: perfection, top marks.",
  "🌈": "Rainbow: hope, positivity, diversity.",
  "⭐": "Star: achievement, favorite, shining.",
  "🫶": "Heart hands: love, unity, care.",
  "🤝": "Handshake: agreement, partnership.",
  "😎": "Cool face: confidence, chill vibes.",
  "😅": "Grinning sweat: relief, awkward moment.",
  "😇": "Innocent face: good deeds, angelic.",
  "😋": "Yummy face: delicious food, tasty treat."
};

document.querySelectorAll('.emoji-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const emoji = btn.textContent;

    const slots = [
      document.getElementById('emoji1'),
      document.getElementById('emoji2'),
      document.getElementById('emoji3'),
      document.getElementById('emoji4')
    ];

    for (let slot of slots) {
      if (!slot.value) {
        slot.value = emoji;
        break; // вставили — остановились
      }
    }
  });
});

document.getElementById("generateBtn").onclick = () => {
  const e1 = document.getElementById("emoji1").value.trim();
  const e2 = document.getElementById("emoji2").value.trim();
  const e3 = document.getElementById("emoji3").value.trim();
  const e4 = document.getElementById("emoji4").value.trim();

  const emojies = [e1, e2, e3, e4];
  let output = "";

  emojies.forEach((emoji, index) => {
    if (emoji) {
      const meaning = fakeMeanings[emoji] || `No preset meaning for "${emoji}". But looks fun!`;
      output += `<p><strong>Emoji ${index + 1}:</strong> ${meaning}</p>`;
    }
  });

  document.getElementById("result").innerHTML = output || "Please choose at least one emoji!";
};
