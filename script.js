const fakeMeanings = {
  "😀": "Grinning: Joy, positivity, open mood.",
  "😂": "Tears of joy: Hilarious, can't stop laughing.",
  "😍": "Heart eyes: Deep affection or attraction.",
  "🤔": "Thinking: Pondering, curiosity, question.",
  "🔥": "Fire: Hot, trendy, viral.",
  "❤️": "Heart: Love, care, warm feelings.",
  "🎉": "Party popper: Celebration, success.",
  "👍": "Thumbs up: Approval, good job.",
  "🙌": "Raised hands: Cheers, praise, excitement.",
  "🤯": "Exploding head: Mind blown!",
  "🥳": "Party face: Happy celebration.",
  "💯": "100 points: Perfect, top score.",
  "🌈": "Rainbow: Hope, positive vibes, diversity.",
  "⭐": "Star: Favorite, highlight.",
  "🫶": "Heart hands: Pure love, connection.",
  "🤝": "Handshake: Deal, partnership, agreement.",
  "😎": "Cool face: Chill, stylish, confident.",
  "😅": "Sweat smile: Relief, slight awkwardness.",
  "😇": "Innocent face: Pure, good boy/girl.",
  "😋": "Yummy face: Delicious food, tasty treat."
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
        break;
      }
    }
  });
});

document.getElementById("predictBtn").onclick = () => {
  updateResult();
};

document.getElementById("clearBtn").onclick = () => {
  ['emoji1', 'emoji2', 'emoji3', 'emoji4'].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("result").innerHTML = "";
};

function updateResult() {
  const slots = [
    document.getElementById('emoji1').value.trim(),
    document.getElementById('emoji2').value.trim(),
    document.getElementById('emoji3').value.trim(),
    document.getElementById('emoji4').value.trim()
  ];
  let result = "";
  slots.forEach((emoji, i) => {
    if (emoji) {
      const meaning = fakeMeanings[emoji] || `No meaning for "${emoji}".`;
      result += `<p><strong>Emoji ${i + 1}:</strong> ${meaning}</p>`;
    }
  });
  document.getElementById("result").innerHTML = result || "";
}
