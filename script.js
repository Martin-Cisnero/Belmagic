document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.view-section');
  const desktopButtons = document.querySelectorAll('.nav-btn');
  const mobileButtons = document.querySelectorAll('.mobile-nav-item');
  const logoLink = document.querySelector('.brand-logo');
  const quickCards = document.querySelectorAll('[data-go]');

  function switchView(targetId) {
    // Mostrar la sección elegida y ocultar las demás
    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === targetId);
    });

    // Actualizar estado activo en botones de PC
    desktopButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });

    // Actualizar estado activo en botones fijos de móvil
    mobileButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Clicks en menú de escritorio
  desktopButtons.forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.target));
  });

  // Clicks en menú inferior móvil
  mobileButtons.forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.target));
  });

  // Click en el logo vuelve a Inicio
  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('inicio');
  });

  // Click en las tarjetas de Inicio ("Lo que realizo" o "Ubicación") lleva a su pestaña
  quickCards.forEach(card => {
    card.addEventListener('click', () => switchView(card.dataset.go));
  });
});