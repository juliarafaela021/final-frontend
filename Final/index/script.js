// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  // Destacar o menu ativo baseado no arquivo HTML atual
  const links = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split('/').pop(); // pega nome do arquivo atual

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.style.backgroundColor = '#005fa3'; // cor de destaque
      link.style.color = '#fff';
    }
  });

  console.log('Menu ativo configurado e página carregada.');
});
