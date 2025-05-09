class Game {
    constructor(name, description, imageURL, categories, platforms) {
      this.name = name;
      this.description = description;
      this.imageURL = imageURL;
      this.categories = categories;
      this.platforms = platforms;
    }
  
    render() {
      const categoryTags = this.categories
        .map(cat => `<span class="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">#${cat}</span>`)
        .join("");
  
      const platformTags = this.platforms
        .map(plat => `<span class="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">${plat}</span>`)
        .join("");
  
      return `
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-800">
          <img class="w-full h-48 object-cover" src="${this.imageURL}" alt="${this.name}">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${this.name}</div>
            <p class="text-gray-700 text-sm">${this.description}</p>
          </div>
          <div class="px-6 pt-2 pb-4">
            ${categoryTags}
            ${platformTags}
          </div>
        </div>
      `;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('libraryGames.json')
      .then(response => response.json())
      .then(data => {
        const grid = document.getElementById('GridGames');
        data.forEach(g => {
          const game = new Game(g.name, g.description, g.imageURL, g.categories, g.platforms);
          grid.innerHTML += game.render();
        });
      })
      .catch(err => console.error("Error al cargar los juegos:", err));
  });
  