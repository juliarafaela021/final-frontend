document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.backgroundColor = '#005fa3';
      link.style.color = '#fff';
    }
  });

  console.log('Página Sobre carregada.');
});
