export class Rocket {
    constructor(game) {
        this.game = game;
        this.width = 122;
        this.height = 20;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height - this.height);
        this.speed = 10;
        this.image = document.getElementById('rocket');
        this.markedForDeletion = false;
    }
    update() {
        this.x -= this.speed;
        if (this.x + this.width < 0) this.markedForDeletion = true;
    }
    draw(context) {
        // context.strokeRect(this.x, this.y, this.width, this.height); // hitbox rocket
        context.drawImage(this.image, this.x, this.y);
    }
}