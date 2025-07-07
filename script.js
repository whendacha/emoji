document.getElementById("generateBtn").onclick = () => {
  const input = document.getElementById("emojiInput").value.trim();
  if (!input) {
    document.getElementById("result").innerText = "Please enter some emojis!";
    return;
  }

  const templates = [
    `This emoji combo means a perfect day full of fun and surprises: ${input}`,
    `Looks like you're planning something cool: ${input}`,
    `Adventure vibes detected: ${input}`,
    `Something happy is about to happen: ${input}`,
    `These symbols suggest good luck and good vibes: ${input}`,
    `Interpreted as a secret plan full of smiles: ${input}`,
    `A story in symbols: ${input} — be ready for excitement!`
  ];

  const meaning = templates[Math.floor(Math.random() * templates.length)];
  document.getElementById("result").innerText = meaning;
};
