const games = [
  {
    title: "OvO Platformer",
    category: "Action",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    embedUrl: "https://html5.gamedistribution.com/rvvASSmP000000000000000000000000/"
  },
  {
    title: "Pac-Man Classic",
    category: "Arcade",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400",
    embedUrl: "https://html5.gamedistribution.com/6bf148ea88974a6aa7c244c416181f21/"
  }
];

function renderGames(gameList) {
  const grid = document.getElementById("gameGrid");
  if (!grid) return;
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

function toggleFullscreen() {
  const iframe = document.getElementById("gameFrame");
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}

function filterCategory(cat) {
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
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

document.addEventListener("DOMContentLoaded", () => {
  renderGames(games);
});
