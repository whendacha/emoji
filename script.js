const predictions = [
  "💥 Big surprises are coming your way — get ready!",
  "🚀 You’re on track for big wins and adventures!",
  "🌟 Your energy attracts luck and good vibes!",
  "🎉 Time to celebrate — big news is near!",
  "🔥 You’re about to shine like never before!"
];

// Заполнение слотов
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

// Огромная кнопка «PREDICT»
document.getElementById('predictBtn').addEventListener('click', () => {
  const slots = [
    document.getElementById('emoji1').value.trim(),
    document.getElementById('emoji2').value.trim(),
    document.getElementById('emoji3').value.trim(),
    document.getElementById('emoji4').value.trim()
  ];

  const allFilled = slots.every(s => s);

  if (allFilled) {
    const prediction = predictions[Math.floor(Math.random() * predictions.length)];
    document.getElementById('result').innerHTML = `🔮 <strong>${prediction}</strong>`;
  } else {
    document.getElementById('result').innerHTML = "⚠️ Please fill ALL 4 emoji slots before predicting!";
  }
});

// Кнопка очистки
document.getElementById('clearBtn').addEventListener('click', () => {
  ['emoji1', 'emoji2', 'emoji3', 'emoji4'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('result').innerHTML = '';
});
