const predictions = [
  "🌟 Great news ahead!",
  "🚀 You’re ready to win!",
  "🎉 Joy will find you!",
  "🔥 Big energy boost!",
  "✨ Magic moments soon!"
];

document.querySelectorAll('.emoji-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const emoji = btn.textContent.trim();
    for (let i = 1; i <= 4; i++) {
      const slot = document.getElementById(`slot${i}`);
      if (slot.textContent.trim() === "") {
        slot.textContent = emoji;
        break;
      }
    }
  });
});

document.getElementById('predictBtn').addEventListener('click', () => {
  const allFilled = [...Array(4).keys()].every(i => document.getElementById(`slot${i+1}`).textContent.trim());
  if (allFilled) {
    const p = predictions[Math.floor(Math.random() * predictions.length)];
    const res = document.getElementById('result');
    res.textContent = `🔮 ${p}`;
    res.classList.remove('hidden');
  } else {
    document.getElementById('result').textContent = "⚠️ Fill all 4 slots!";
    document.getElementById('result').classList.remove('hidden');
  }
});

document.getElementById('clearBtn').addEventListener('click', () => {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`slot${i}`).textContent = "";
  }
  document.getElementById('result').classList.add('hidden');
});
