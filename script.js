document.getElementById('predictBtn').addEventListener('click', () => {
  const allFilled = [...Array(4).keys()].every(i => document.getElementById(`slot${i+1}`).textContent.trim());
  if (allFilled) {
    const p = predictions[Math.floor(Math.random() * predictions.length)];
    const res = document.getElementById('result');
    res.textContent = `🔮 ${p}`;
    res.classList.remove('hidden');

    // Фикс для феи!
    const fairy = document.getElementById('fairy');
    fairy.style.animation = 'none'; // сбрасываем анимацию
    void fairy.offsetWidth;         // форсируем ререндер
    fairy.style.animation = '';     // повторно применяем
    fairy.classList.add('fly');
  } else {
    document.getElementById('result').textContent = "⚠️ Fill all slots!";
    document.getElementById('result').classList.remove('hidden');
  }
});
