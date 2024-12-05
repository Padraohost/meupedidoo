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
            }
        `;
        document.head.appendChild(style);
    }
};
