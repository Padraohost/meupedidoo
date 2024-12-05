const showVictoryScreen = () => {
    const victoryScreen = document.createElement("div");
    victoryScreen.className = "victory-screen";
    victoryScreen.textContent = "Obrigado por ser incrivel amor! TE AMO!!!";
    document.body.append(victoryScreen);

    // Estilo da tela de vitória
    victoryScreen.style.position = "absolute";
    victoryScreen.style.top = "50%";
    victoryScreen.style.left = "50%";
    victoryScreen.style.transform = "translate(-50%, -50%)";
    victoryScreen.style.backgroundColor = "white";
    victoryScreen.style.padding = "20px";
    victoryScreen.style.border = "2px solid black";
    victoryScreen.style.borderRadius = "10px";
    victoryScreen.style.textAlign = "center";
    victoryScreen.style.fontSize = "24px";
    victoryScreen.style.fontWeight = "bold";

    // Função para criar os fogos de artifício infinitos
    createInfiniteFireworks();

    // Função para criar animação de chuva de corações
    function createInfiniteFireworks() {
        const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

        // Criar fogos de artifício infinitamente
        setInterval(() => {
            let firework = document.createElement("div");
            firework.style.position = "absolute";
            firework.style.top = "-30px"; // Iniciar acima da tela
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.width = "30px";
            firework.style.height = "30px";
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.clipPath = "polygon(50% 0%, 0% 30%, 20% 60%, 50% 45%, 80% 60%, 100% 30%)"; // Forma de coração
            firework.style.animation = "heart-fall 2s linear infinite"; // Animação contínua de queda
            firework.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.8)";
            document.body.appendChild(firework);

            // Remover o coração após a animação
            firework.addEventListener("animationend", () => {
                firework.remove();
            });
        }, 200); // Criar um novo coração a cada 200ms

<<<<<<< HEAD
ctx.imageSmoothingEnabled = false;

let currentState = GameState.START;

const gameData = {
    score: 0,
    level: 1,
    high: 0,
};

const showGameData = () => {
    scoreElement.textContent = gameData.score;
    levelElement.textContent = gameData.level;
    highElement.textContent = gameData.high;
};

const player = new Player(canvas.width, canvas.height);

const stars = [];
const playerProjectiles = [];
const invadersProjectiles = [];
const particles = [];
const obstacles = [];

const initObstacles = () => {
    const x = canvas.width / 2 - 50;
    const y = canvas.height - 250;
    const offset = canvas.width * 0.15;
    const color = "crimson";

    const obstacle1 = new Obstacle({ x: x - offset, y }, 100, 20, color);
    const obstacle2 = new Obstacle({ x: x + offset, y }, 100, 20, color);

    obstacles.push(obstacle1);
    obstacles.push(obstacle2);
};

initObstacles();

const grid = new Grid(
    Math.round(Math.random() * 9 + 1),
    Math.round(Math.random() * 9 + 1)
);

const keys = {
    left: false,
    right: false,
    shoot: {
        pressed: false,
        released: true,
    },
};

const incrementScore = (value) => {
    gameData.score += value;

    if (gameData.score > gameData.high) {
        gameData.high = gameData.score;
    }

    // Verifica se a pontuação atingiu 100 e exibe a mensagem de vitória
    if (gameData.score >= 100) {
        currentState = GameState.GAME_OVER; // Pausa o jogo
        showVictoryScreen();
    }
};

const showVictoryScreen = () => {
    const victoryScreen = document.createElement("div");
    victoryScreen.className = "victory-screen";
    victoryScreen.textContent = "Obrigado por ser incrivel amor! TE AMO!!!";
    document.body.append(victoryScreen);

    // Estilo da tela de vitória
    victoryScreen.style.position = "absolute";
    victoryScreen.style.top = "50%";
    victoryScreen.style.left = "50%";
    victoryScreen.style.transform = "translate(-50%, -50%)";
    victoryScreen.style.backgroundColor = "white";
    victoryScreen.style.padding = "20px";
    victoryScreen.style.border = "2px solid black";
    victoryScreen.style.borderRadius = "10px";
    victoryScreen.style.textAlign = "center";
    victoryScreen.style.fontSize = "24px";
    victoryScreen.style.fontWeight = "bold";

    // Função para criar os fogos de artifício infinitos
    createInfiniteFireworks();

    // Função para criar animação de chuva de corações
    function createInfiniteFireworks() {
        const colors = ["red"];

        // Criar fogos de artifício infinitamente
        setInterval(() => {
            let firework = document.createElement("div");
            firework.style.position = "absolute";
            firework.style.top = "-30px"; // Iniciar acima da tela
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.width = "30px";
            firework.style.height = "30px";
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.clipPath = "polygon(50% 100%, 0% 70%, 20% 40%, 50% 55%, 80% 40%, 100% 70%)"; // Forma de coração invertido
            firework.style.animation = "heart-fall 2s linear infinite"; // Animação contínua de queda
            firework.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.8)";
            document.body.appendChild(firework);

            // Remover o coração após a animação
            firework.addEventListener("animationend", () => {
                firework.remove();
            });
        }, 200); // Criar um novo coração a cada 200ms

=======
>>>>>>> 840baef4d6c2cc77a6aab0986d2368e2fcd3642d
        // Estilo da animação para a chuva de corações
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes heart-fall {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) scale(1.5); /* Faz o coração cair até o fundo da tela */
                    opacity: 0;
                }
<<<<<<< HEAD
            }
        `;
        document.head.appendChild(style);
    }
};


const incrementLevel = () => {
    gameData.level += 1;
};

const generateStars = () => {
    for (let i = 0; i < NUMBER_STARS; i += 1) {
        stars.push(new Star(canvas.width, canvas.height));
    }
};

const drawStars = () => {
    stars.forEach((star) => {
        star.draw(ctx);
        star.update();
    });
};

const drawProjectiles = () => {
    const projectiles = [...playerProjectiles, ...invadersProjectiles];

    projectiles.forEach((projectile) => {
        projectile.draw(ctx);
        projectile.update();
    });
};

const drawParticles = () => {
    particles.forEach((particle) => {
        particle.draw(ctx);
        particle.update();
    });
};

const drawObstacles = () => {
    obstacles.forEach((obstacle) => obstacle.draw(ctx));
};

const clearProjectiles = () => {
    playerProjectiles.forEach((projectile, i) => {
        if (projectile.position.y <= 0) {
            playerProjectiles.splice(i, 1);
        }
    });

    invadersProjectiles.forEach((projectile, i) => {
        if (projectile.position.y > canvas.height) {
            invadersProjectiles.splice(i, 1);
        }
    });
};

const clearParticles = () => {
    particles.forEach((particle, i) => {
        if (particle.opacity <= 0) {
            particles.splice(i, 1);
        }
    });
};

const createExplosion = (position, size, color) => {
    for (let i = 0; i < size; i += 1) {
        const particle = new Particle(
            {
                x: position.x,
                y: position.y,
            },
            {
                x: (Math.random() - 0.5) * 1.5,
                y: (Math.random() - 0.5) * 1.5,
            },
            2,
            color
        );

        particles.push(particle);
    }
};

const checkShootInvaders = () => {
    grid.invaders.forEach((invader, invaderIndex) => {
        playerProjectiles.some((projectile, projectileIndex) => {
            if (invader.hit(projectile)) {
                soundEffects.playHitSound();

                createExplosion(
                    {
                        x: invader.position.x + invader.width / 2,
                        y: invader.position.y + invader.height / 2,
                    },
                    10,
                    "#941CFF"
                );

                incrementScore(10);

                grid.invaders.splice(invaderIndex, 1);
                playerProjectiles.splice(projectileIndex, 1);

                return;
=======
>>>>>>> 840baef4d6c2cc77a6aab0986d2368e2fcd3642d
            }
        `;
        document.head.appendChild(style);
    }
};
<<<<<<< HEAD

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawStars();

    if (currentState === GameState.PLAYING) {
        showGameData();
        spawnGrid();

        drawProjectiles();
        drawParticles();
        drawObstacles();

        clearProjectiles();
        clearParticles();

        checkShootInvaders();
        checkShootPlayer();
        checkShootObstacles();
        checkInvadersCollidedObstacles();
        checkPlayerCollidedInvaders();

        grid.draw(ctx);
        grid.update(player.alive);

        ctx.save();

        ctx.translate(
            player.position.x + player.width / 2,
            player.position.y + player.height / 2
        );

        if (keys.shoot.pressed && keys.shoot.released) {
            soundEffects.playShootSound();
            player.shoot(playerProjectiles);
            keys.shoot.released = false;
        }

        if (keys.left && player.position.x >= 0) {
            player.moveLeft();
            ctx.rotate(-0.15);
        }

        if (keys.right && player.position.x <= canvas.width - player.width) {
            player.moveRight();
            ctx.rotate(0.15);
        }

        

        ctx.translate(
            -player.position.x - player.width / 2,
            -player.position.y - player.height / 2
        );

        player.draw(ctx);
        ctx.restore();
    }

    if (currentState === GameState.GAME_OVER) {
        checkShootObstacles();

        drawProjectiles();
        drawParticles();
        drawObstacles();

        clearProjectiles();
        clearParticles();

        grid.draw(ctx);
        grid.update(player.alive);
    }

    requestAnimationFrame(gameLoop);
};

const restartGame = () => {
    currentState = GameState.PLAYING;

    player.alive = true;

    grid.invaders.length = 0;
    grid.invadersVelocity = 1;

    invadersProjectiles.length = 0;
    gameData.score = 0;
    gameData.level = 0;

    gameOverScreen.remove();
};

addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "a") keys.left = true;
    if (key === "d") keys.right = true;
    if (key === "enter") keys.shoot.pressed = true;
});

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();

    if (key === "a") keys.left = false;
    if (key === "d") keys.right = false;
    if (key === "enter") {
        keys.shoot.pressed = false;
        keys.shoot.released = true;
    }
});

buttonPlay.addEventListener("click", () => {
    startScreen.remove();
    scoreUi.style.display = "block";
    currentState = GameState.PLAYING;

    setInterval(() => {
        const invader = grid.getRandomInvader();

        if (invader) {
            invader.shoot(invadersProjectiles);
        }
    }, 1000);
});

buttonRestart.addEventListener("click", restartGame);

generateStars();
gameLoop();
=======
>>>>>>> 840baef4d6c2cc77a6aab0986d2368e2fcd3642d
