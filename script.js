const predictions = [
  "🌟 You’re about to unlock something truly amazing!",
  "🚀 Big success and adventures await you!",
  "🍀 Good fortune and new connections are coming your way!",
  "🔥 You’re ready for unstoppable energy and good vibes!",
  "🎉 A huge reason to celebrate is on the horizon!"
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

  const allFilled = slots.every(v => v);

  if (!allFilled) {
    document.getElementById("result").innerHTML = "⚠️ Please fill all 4 emoji slots to get your prediction!";
    return;
  }

  const prediction = predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById("result").innerHTML = `🔮 <strong>Your Prediction:</strong> ${prediction}`;
};

document.getElementById("clearBtn").onclick = () => {
  ['emoji1', 'emoji2', 'emoji3', 'emoji4'].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("result").innerHTML = "";
};
