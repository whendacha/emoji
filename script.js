const fakeMeanings = {
  "🌞": "Sun: Symbol of warmth, energy, and new beginnings.",
  "✌️": "Peace: Sign of harmony, balance, and positive vibes.",
  "⛺": "Tent: Adventure, camping, and nature escape.",
  "🔟": "Ten: Full score, perfection, or top rating."
};

document.getElementById("generateBtn").onclick = () => {
  const e1 = document.getElementById("emoji1").value.trim();
  const e2 = document.getElementById("emoji2").value.trim();
  const e3 = document.getElementById("emoji3").value.trim();
  const e4 = document.getElementById("emoji4").value.trim();

  const emojies = [e1, e2, e3, e4];
  let output = "";

  emojies.forEach((emoji, index) => {
    if (emoji) {
      const meaning = fakeMeanings[emoji] || `No preset meaning for "${emoji}". Looks interesting!`;
      output += `<p><strong>Emoji ${index + 1}:</strong> ${meaning}</p>`;
    }
  });

  document.getElementById("result").innerHTML = output || "Please enter at least one emoji!";
};
