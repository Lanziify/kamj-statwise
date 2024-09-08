import { Scene } from 'phaser'
import { Button } from './Button'

export class Boot extends Scene {
    private road!: Phaser.GameObjects.TileSprite
    private car!: Phaser.Physics.Arcade.Sprite
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    private leftBoundary!: Phaser.GameObjects.Rectangle
    private rightBoundary!: Phaser.GameObjects.Rectangle

    constructor() {
        super('Boot')
    }
    preload() {
        this.load.image('background', 'assets/background.webp')
        this.load.image('defaultButton', 'assets/buttons/defaultButton.png')
        this.load.image('hoverButton', 'assets/buttons/hoverButton.png')
        this.load.image('road', 'assets/roads/Desert_road (64 x 64).png')
        this.load.spritesheet('car', 'assets/cars/Player_red (16 x 16).png', {
            frameWidth: 16,
            frameHeight: 16,
        })
    }
    create() {
        this.road = this.add.tileSprite(
            this.game.scale.width / 2,
            this.game.scale.height / 2,
            64,
            400,
            'road'
        )

        this.road.setScale(2)

        this.car = this.physics.add.sprite(0, 0, 'car')

        // this.car.setPosition(this.road.x + 24, 500)

        this.car.setScale(2)

        this.car.setBounce(0.2)

        this.car.setCollideWorldBounds(true)


        // this.car.setFrame(0)

        // Define road boundaries (left and right edges)

        // Create left and right boundary objects
        // this.leftBoundary = this.add.rectangle(
        //     roadCenterX - roadWidth + 10,
        //     500,
        //     18,
        //     1000,
        //     0x000000,
        //     0
        // )

        // this.rightBoundary = this.add.rectangle(
        //     roadCenterX + roadWidth - 10,
        //     300,
        //     18,
        //     600,
        //     0x000000,
        //     0
        // )

        // Enable physics for the boundary objects
        // this.physics.add.existing(this.leftBoundary, true) // true for static bodies
        // this.physics.add.existing(this.rightBoundary, true)

        // // Add collision between the car and the road boundaries
        // this.physics.add.collider(this.car, this.leftBoundary)
        // this.physics.add.collider(this.car, this.rightBoundary)

        // Enable keyboard input
        this.cursors = (
            this.input.keyboard as Phaser.Input.Keyboard.KeyboardPlugin
        ).createCursorKeys()

        // new Button(
        //     this,
        //     this.scale.width / 2,
        //     this.scale.height / 2,
        //     120,
        //     120,
        //     'defaultButton',
        //     'hoverButton',
        //     'Hello World',
        //     'white',
        //     48,
        //     48,
        //     () => {}
        // )
    }

    update() {
        // Scroll the road to simulate movement
        this.road.tilePositionY -= 5

        // Handle car movement
        if (this.cursors.left.isDown) {
            this.car.setVelocityX(-200)
            this.car.anims.play('left', true)
        } else if (this.cursors.right.isDown) {
            this.car.setVelocityX(200)
        } else {
            this.car.setVelocityX(0)
        }

        if (this.cursors.up.isDown) {
            this.car.setVelocityY(-200)
        } else if (this.cursors.down.isDown) {
            this.car.setVelocityY(200)
        } else {
            this.car.setVelocityY(0)
        }
    }
}
