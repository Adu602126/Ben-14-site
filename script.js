// 1. Define your Aliens Data
const aliens = [
    {
        name: "Heatblast",
        image: "assets\images\Heatblast.JPG",
        sound: "assets\sounds\Heatblast.mp3",
        desc: "A magma-based lifeform that can control fire."
    },
    {
        name: "Four Arms",
        image: "assets\images\Fourarms.JPG", // Make sure file name matches exactly!
        sound: "assets\sounds\Fourarms.mp3",
        desc: "Possesses incredible strength and four muscular arms."
    },
    {
        name: "Diamond Head",
        image: "assets\images\Diamondhead.JPG",
        sound: "assets\sounds\Diamond head.mp3",
        desc: "A Prtrosapien with a body made of indestructible organic crystals."
    },
    {
        name: "Chromastone",
        image: "assets\images\Chromastone.JPG",
        sound: "assets\sounds\Chromastone.mp3",
        desc: "A living crystal alien thaat can absorb energy and multi-coloured lasers, then blast them back with ten times the power."
    },
    {
        name: "Upgrade",
        image: "assets\images\Upgrade.JPG",
        sound: "assets\sounds\Upgrade.mp3",
        desc: "A bio-mechanical lifeform that can'merge' with any technology, upgrading it into futurastic weapon far beyond its original design."
    }
    // Add more aliens here by copying the block above!
];

// 2. Select HTML elements
const startBtn = document.getElementById('start-btn');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bg-music');
const sfxPlayer = document.getElementById('sfx-player');
const grid = document.getElementById('alien-grid');

const monitorName = document.getElementById('alien-name');
const monitorImg = document.getElementById('alien-img');
const monitorDesc = document.getElementById('alien-desc');

// 3. Start the Website (Browsers block sound until you click something)
startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none'; // Hide button
    mainContent.style.display = 'block'; // Show content
    bgMusic.volume = 0.3; // Set volume to 30%
    bgMusic.play(); // Play Theme Song
});

// 4. Generate the Alien List
aliens.forEach(alien => {
    // Create a card for each alien
    const card = document.createElement('div');
    card.classList.add('alien-card');
    
    // Add image and name to card
    card.innerHTML = `
        <img src="${alien.image}" alt="${alien.name}">
        <h3>${alien.name}</h3>
    `;

    // Add Click Event
    card.addEventListener('click', () => {
        // Update Monitor Info
        monitorName.innerText = alien.name;
        monitorDesc.innerText = alien.desc;
        monitorImg.src = alien.image;
        monitorImg.style.display = 'block';

        // Play Alien Sound
        sfxPlayer.src = alien.sound;
        sfxPlayer.play();
    });

    // Add to grid
    grid.appendChild(card);

});

