class Projectil {
    constructor(position, velocity = 1) { // Velocidade padrão mais lenta
        this.position = position;
        this.size = 10; // Tamanho ajustável do coração
        this.velocity = velocity; // Velocidade ajustável
    }

    draw(ctx) {
        ctx.fillStyle = "red"; // Cor do coração
        ctx.beginPath();

        // Coordenadas base do coração
        const x = this.position.x;
        const y = this.position.y;

        // Desenhando o coração
        ctx.moveTo(x, y + this.size / 4);
        ctx.bezierCurveTo(
            x - this.size / 2, y - this.size / 2, // Ponto esquerdo
            x - this.size, y + this.size / 2, // Topo esquerdo
            x, y + this.size // Inferior do coração
        );
        ctx.bezierCurveTo(
            x + this.size, y + this.size / 2, // Topo direito
            x + this.size / 2, y - this.size / 2, // Ponto direito
            x, y + this.size / 4 // Voltar ao ponto inicial
        );

        ctx.fill();
    }

    update() {
        this.position.y += this.velocity * 0.3; // Reduzindo a velocidade pela metade
    }
}

export default Projectil;
