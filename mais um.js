document.querySelectorAll('.personagem-container').forEach(container => {
    container.addEventListener('click', () => {
      document.querySelectorAll('.personagem-container').forEach(c => c.classList.remove('active'));
      container.classList.add('active');
    });
  });