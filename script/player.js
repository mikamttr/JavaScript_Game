export class Player {
    constructor(game) {
        this.game = game;
        this.width = 107;
        this.height = 37;
        this.x = 100;
        this.y = 160;
        this.speed = 6;
        this.lives = 3;
        this.image = document.getElementById('player');
        this.scoreDisplay = document.getElementById('score');
        this.heartsDisplay = document.getElementById('hearts');
        this.heartIcon = '<i class="fa-solid fa-heart"></i>';
    }
    update() {
        if (keys.up.pressed && lastKey === 'up') this.y = this.y - this.speed;
        else if (keys.down.pressed && lastKey === 'down') this.y = this.y + this.speed;

        if (this.y < 0) this.y = 0;
        if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;
    }
    draw(context) {
        // context.strokeRect(this.x, this.y, this.width, this.height); // hitbox player
        context.drawImage(this.image, this.x, this.y);
    }
    updatePlayerInfo() {
        // score display
        this.scoreDisplay.textContent = 'Score : ' + ((this.game.score / 60).toFixed(0));
        // lives display
        switch (this.lives) {
            case 0 :
                this.heartsDisplay.innerHTML = '';
                return
            case 1 :
                this.heartsDisplay.innerHTML = this.heartIcon;
                return
            case 2 :
                this.heartsDisplay.innerHTML = this.heartIcon + this.heartIcon;
                return
            case 3 :
                this.heartsDisplay.innerHTML = this.heartIcon + this.heartIcon + this.heartIcon;
                return
        }
    }
}

// key input handler
const keys = {
    up: {pressed: false},
    down: {pressed: false},
}

let lastKey = ''
$(document).on('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            keys.up.pressed = true
            lastKey = 'up'
            break

        case 'ArrowDown':
            keys.down.pressed = true
            lastKey = 'down'
            break
    }
})
$(document).on('keyup', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            keys.up.pressed = false
            break

        case 'ArrowDown':
            keys.down.pressed = false
            break
    }
})
