import Phaser from 'phaser'
import { Boot } from './scenes/Boot'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game-container',
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0,
                x: 0,
            },
            debug: true,
        },
    },
    scene: [Boot],
}

const StartGame = () => {
    return new Phaser.Game(config)
}

export default StartGame
