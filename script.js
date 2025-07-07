const apiKey = "YOUR_OPENAI_API_KEY"; // Вставь свой API-ключ

document.getElementById("generateBtn").onclick = async () => {
  const input = document.getElementById("emojiInput").value;

  const prompt = `Explain the meaning and create a short description for this emoji sequence: ${input}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const data = await response.json();
  document.getElementById("result").innerText = data.choices[0].message.content;
};

