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

document.getElementById("generateBtn").onclick = () => {
  const e1 = document.getElementById("emoji1").value.trim();
  const e2 = document.getElementById("emoji2").value.trim();
  const e3 = document.getElementById("emoji3").value.trim();
  const e4 = document.getElementById("emoji4").value.trim();

  let result = "";
  const emojies = [e1, e2, e3, e4];

  emojies.forEach((e, i) => {
    if (e) {
      result += `<p>Emoji ${i + 1}: ${e}</p>`;
    }
  });

  document.getElementById("result").innerHTML = result || "No emojis selected.";
};
