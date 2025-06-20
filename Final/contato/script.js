console.log('Script carregado!');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formContato');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !assunto || !mensagem) {
      feedback.textContent = 'Preencha todos os campos.';
      feedback.style.color = 'red';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'E-mail inválido.';
      feedback.style.color = 'red';
      return;
    }

    if (mensagem.length < 20) {
      feedback.textContent = 'Mensagem deve ter pelo menos 20 caracteres.';
      feedback.style.color = 'red';
      return;
    }

    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.style.color = 'green';
    form.reset();
  });
});
