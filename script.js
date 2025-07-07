const predictions = [
  "🌟 Great news soon!", "🚀 Big wins ahead!", "🎉 Celebrate your day!",
  "🔥 Energy flows strong!", "✨ Good luck arrives!", "🍀 Fortune finds you!",
  "💫 Small wish granted!", "🪄 Magic moment awaits!", "🎯 Hit your goals!",
  "🏆 You’re a winner!", "🎈 Light heart today!", "🎊 Joy is near!",
  "💡 New idea works!", "🌈 Colorful vibes now!", "🧚 Believe in magic!",
  "🌞 A bright start!", "🌙 Sweet dreams guide!", "🎵 Tune into fun!",
  "🍰 Enjoy sweet treats!", "🍫 Little surprise comes!", "📚 Learn and grow!",
  "🧸 Comfort finds you!", "🫧 Lightness surrounds!", "🫶 Someone loves you!",
  "🎀 A gift ahead!", "🔑 Unlock a chance!", "🌿 Fresh calm ahead!",
  "🌻 Smile brings luck!", "⚡ Quick news arrives!", "🌴 Relax, recharge!",
  "🎆 Spark joy today!", "🌅 New dawn coming!", "🍃 Breathe easy today!",
  "🕊️ Peace fills space!", "💌 Message warms you!", "📖 A story unfolds!",
  "📣 Speak your truth!", "🏹 Aim is true!", "🎨 Create something fun!",
  "🥂 Cheers to you!", "💃 Dance freely!", "🧭 Right path clear!",
  "🗝️ Door opens soon!", "🧴 Care for self!", "🧩 Puzzle completes!",
  "🌬️ Let go, trust!", "🛍️ Treat yourself!", "📷 Save this memory!",
  "🦄 Be unique now!", "🧃 Fresh start soon!", "🌠 Make that wish!",
  "🍬 Sweet news soon!", "🍕 Share and smile!", "🍉 Fun moment comes!",
  "🥳 Surprise fun soon!", "🦋 You transform now!", "📌 All connects now!",
  "🌍 Idea travels far!", "🎭 New friend ahead!", "🎲 Lucky roll now!",
  "🧘 Calm mind soon!", "🎢 Fun twist ahead!", "🛫 Go for it now!",
  "🎯 Bullseye win now!", "🌺 Bloom beautifully!", "💎 Treasure inside!",
  "🫖 Warm talks soon!", "🧿 You’re protected!", "🕰️ Right time now!",
  "🌠 Star shines on!", "🍂 Worries fade now!", "🌬️ Fresh winds blow!",
  "🎓 Smart steps win!", "🔮 Fate loves you!", "🧚‍♀️ Magic touch here!",
  "🌟 Light in dark!", "🍭 Sweet path ahead!", "🎂 Celebrate self now!",
  "🦚 Show true self!", "📬 Good news soon!", "🔔 Sign appears soon!",
  "🗝️ Key moment near!", "💤 Rest, relax deep!", "🎉 Party mood soon!",
  "🧩 All fits soon!", "🧸 Cuddle vibes soon!", "🍀 Lucky sign now!",
  "🎵 Music lifts you!", "🧃 Refresh comes now!", "📚 Learn, shine more!",
  "🛎️ Ding! It’s time!", "🌈 Rainbow smiles soon!"
];

document.querySelectorAll('.emoji-btn').forEach(btn => {
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

document.getElementById('predictBtn').addEventListener('click', () => {
  const slots = [
    document.getElementById('emoji1').value.trim(),
    document.getElementById('emoji2').value.trim(),
    document.getElementById('emoji3').value.trim(),
    document.getElementById('emoji4').value.trim()
  ];
  const allFilled = slots.every(e => e);
  if (allFilled) {
    const p = predictions[Math.floor(Math.random() * predictions.length)];
    document.getElementById('result').innerHTML = `🔮 <strong>${p}</strong>`;
    const fairy = document.getElementById('fairy');
    fairy.classList.remove('fly');
    void fairy.offsetWidth; // force reflow
    fairy.classList.add('fly');
  } else {
    document.getElementById('result').innerHTML = "⚠️ Fill all 4 emoji slots!";
  }
});

document.getElementById('clearBtn').addEventListener('click', () => {
  ['emoji1', 'emoji2', 'emoji3', 'emoji4'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('result').innerHTML = '';
});
