'use strict'

let config = 
{
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: { autoCenter: Phaser.Scale.CENTER_BOTH},
    physics: 
    { 
        default: 'arcade', 
        arcade: 
        {
            debug: true
        }
    },
    scene: [ Play ]
}

let game = new Phaser.Game(config)

let { width, height } = game.config