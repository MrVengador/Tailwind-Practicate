document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
  
        const dropdownMenu = this.nextElementSibling;
  
        // Cierra todos los demás dropdowns
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.classList.add('hidden');
          }
        });
  
        // Alterna visibilidad del menú actual
        dropdownMenu.classList.toggle('hidden');
      });
    });
  
    // Cierra todos los dropdowns si haces clic fuera
    document.addEventListener('click', function () {
      document.querySelectorAll('.dropdown-menu').forEach((menu) => {
        menu.classList.add('hidden');
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('games.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('gameList');
  
        data.forEach(gameData => {
          const game = new Game(gameData.name, gameData.description, gameData.imageURL);
          container.innerHTML += game.render();
        });
      });
  });
  