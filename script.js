const games = [
  {
    title: "Geometry Dash Lite",
    category: "Arcade",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    embedUrl: "https://scratch.mit.edu/projects/105500895/embed"
  },
  {
    title: "Pac-Man Classic",
    category: "Arcade",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400",
    embedUrl: "https://scratch.mit.edu/projects/10128407/embed"
  },
  {
    title: "Space Shooters",
    category: "Action",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
    embedUrl: "https://scratch.mit.edu/projects/10015822/embed"
  }
];

function renderGames(gameList) {
  const grid = document.getElementById("gameGrid");
  grid.innerHTML = "";

  gameList.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.onclick = () => playGame(game.embedUrl);
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <div class="game-info">
        <div class="game-title">${game.title}</div>
        <div class="game-cat">${game.category}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function playGame(url) {
  document.getElementById("gameFrame").src = url;
  document.getElementById("playerModal").style.display = "flex";
}

function closeGame() {
  document.getElementById("gameFrame").src = "";
  document.getElementById("playerModal").style.display = "none";
}

function filterCategory(cat) {
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  if (cat === 'all') {
    renderGames(games);
  } else {
    renderGames(games.filter(g => g.category === cat));
  }
}

function filterGames() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = games.filter(g => g.title.toLowerCase().includes(query));
  renderGames(filtered);
}

renderGames(games);
