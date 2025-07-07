const predictions = [
  "You’re about to have an amazing day full of surprises!",
  "Big opportunities and positive vibes are coming your way!",
  "You’re ready for success, joy and new adventures!",
  "Something wonderful is about to happen — stay open!",
  "This combo means good luck, fun and celebration ahead!",
  "Your energy will attract new people and ideas — enjoy it!"
];

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
  const slots = [
    document.getElementById('emoji1').value.trim(),
    document.getElementById('emoji2').value.trim(),
    document.getElementById('emoji3').value.trim(),
    document.getElementById('emoji4').value.trim()
  ];

  const anyFilled = slots.some(v => v);
  if (!anyFilled) {
    document.getElementById("result").innerHTML = "👉 Please pick at least one emoji!";
    return;
  }

  const prediction = predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById("result").innerHTML = `🔮 <strong>Prediction:</strong> ${prediction}`;
};

document.getElementById("clearBtn").onclick = () => {
  ['emoji1', 'emoji2', 'emoji3', 'emoji4'].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("result").innerHTML = "";
};
