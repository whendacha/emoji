// 🎉 100 предсказаний
const predictions = [
  "✨ A new door will open soon.", "🌟 Luck is on your side.",
  "🚀 Big changes are coming fast.", "🎉 Celebrate small wins today.",
  "💫 Your smile will attract magic.", "🍀 Fortune follows your steps.",
  "🌈 A rainbow hides a secret gift.", "🔥 You’ll feel unstoppable energy.",
  "⭐ Someone is secretly cheering for you.", "🕊️ Peace will come after chaos.",
  "🎯 Focus brings rewards.", "🏆 You’ll win something unexpected.",
  "🧲 Good vibes find you today.", "🥂 Celebrate tiny moments.",
  "💡 A new idea sparks success.", "🌙 Trust your dreams tonight.",
  "🌞 A bright day ahead awaits.", "🎮 Playfulness brings new luck.",
  "📚 You’ll learn something powerful.", "🪄 A small wish will come true.",
  "🎈 Lighten up — fun is near.", "⚡ Sudden news surprises you.",
  "🌻 Good people gather around you.", "🌊 Go with the flow today.",
  "🍰 Sweet moments ahead.", "🦋 Transformation is happening.",
  "🧸 Comfort will find you soon.", "🎵 Music brings new energy.",
  "🍕 Share a treat, gain joy.", "🥇 You’re a winner in disguise.",
  "🍫 Sweet thoughts attract love.", "💎 You’re more valued than you think.",
  "🫧 Lightness will clear your mind.", "📌 Something important clicks soon.",
  "🔮 Intuition will guide you right.", "🥳 A surprise party mood rises.",
  "🦄 Be unique — it works now.", "☕ Warm talks bring closeness.",
  "🫶 Someone cares deeply for you.", "🕰️ The right time is now.",
  "🧿 Protection follows your path.", "🌠 A wish rides a shooting star.",
  "🎀 A gift will find you.", "📬 Good news lands soon.",
  "🎯 Stay focused, results will come.", "💰 Money luck touches you soon.",
  "🚦 Green lights for your plan.", "🎭 New faces bring new joy.",
  "🎤 Speak up — your voice matters.", "🌍 Your idea travels far.",
  "🏹 Your aim hits true.", "🎨 A creative spark awakens.",
  "🥂 Raise a toast for you.", "💃 Dance — life celebrates you.",
  "🌅 A new dawn feels fresh.", "🌟 Someone makes your day brighter.",
  "🐚 Secrets will be revealed soon.", "🍃 Fresh air, fresh thoughts.",
  "🏝️ Escape brings fresh energy.", "🧘 Peace calms your mind.",
  "🌴 Relax — things align naturally.", "🎢 A fun twist arrives soon.",
  "🛫 A journey brings clarity.", "🧩 A missing piece fits in.",
  "🫧 Light energy floats your way.", "🔑 You’ll unlock a hidden chance.",
  "🥰 Affection warms your day.", "📣 Good news will be shared.",
  "🌟 Shine — someone notices it.", "🎲 Luck rolls in your favor.",
  "🚦 Go ahead — don’t hesitate.", "🧃 Stay fresh — new start ahead.",
  "🍬 Sweet words come your way.", "📖 A story unfolds for you.",
  "🎆 Celebrate tiny fireworks inside.", "💌 A message brings a smile.",
  "🏖️ A carefree vibe soothes stress.", "🌺 Bloom — you’re ready for more.",
  "🍉 Share joy, get joy.", "🧭 Right direction is clear now.",
  "🧁 Treat yourself — you deserve it.", "💤 Rest deeply — good dreams come.",
  "🦚 Show your colors proudly.", "🫖 Cozy moments heal you.",
  "📷 A memory will be made soon.", "🍿 A good story entertains you.",
  "🧴 Self-care opens your heart.", "🌿 Calm thoughts grow peace.",
  "🧩 Everything connects at last.", "🌬️ Let go — new comes in.",
  "🛎️ An answer you wait for comes.", "🛍️ A little surprise purchase delights.",
  "🗝️ You hold the key now.", "🧸 Someone hugs you in spirit.",
  "🍂 Let old worries fade.", "🎓 Smart moves pay off soon.",
  "🎊 Good fortune dances closer.", "🔔 A sign rings clear for you."
];

// Вставка эмодзи
document.querySelectorAll('.emoji-keyboard span').forEach(btn => {
  btn.addEventListener('click', () => {
    const emoji = btn.textContent.trim();
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

// PREDICT NOW
document.getElementById('predictBtn').addEventListener('click', () => {
  const slots = [
    document.getElementById('emoji1').value.trim(),
    document.getElementById('emoji2').value.trim(),
    document.getElementById('emoji3').value.trim(),
    document.getElementById('emoji4').value.trim()
  ];

  const allFilled = slots.every(e => e);

  if (allFilled) {
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    document.getElementById('result').innerHTML = `🔮 <strong>${randomPrediction}</strong>`;
    flyFairy();
  } else {
    document.getElementById('result').innerHTML = "⚠️ Please fill ALL 4 emoji slots!";
  }
});

// Очистка
document.getElementById('clearBtn').addEventListener('click', () => {
  ['emoji1', 'emoji2', 'emoji3', 'emoji4'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('result').innerHTML = '';
});

// Летающая фея
function flyFairy() {
  const fairy = document.getElementById('fairy');
  fairy.classList.remove('fly');
  void fairy.offsetWidth;
  fairy.classList.add('fly');
}
