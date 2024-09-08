import Phaser from 'phaser'

export class Button extends Phaser.GameObjects.Container {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        width: number,
        height: number,
        up: string,
        over: string,
        text: string,
        color: string,
        left: number,
        right: number,
        cb: () => void
    ) {
        super(scene)
        this.scene = scene

        const buttonText = this.scene.add.text(0, 0, text, {
            fontSize: '16px',
            fontFamily: 'Arial',
            color: color,
            fontStyle: 'bold',
        })

        buttonText.setOrigin(0.5)

        width = buttonText.displayWidth + left + right

        var defaultBtn = this.scene.add.nineslice(
            0,
            0,
            up,
            '',
            width,
            height,
            left,
            right
        )

        var hoveredBtn = this.scene.add.nineslice(
            0,
            0,
            over,
            '',
            width,
            height,
            left,
            right
        )

        defaultBtn.setOrigin(0.5)
        hoveredBtn.setOrigin(0.5)

        const container = this.scene.add.container(x, y, [
            hoveredBtn,
            defaultBtn,
            buttonText,
        ])

        container.setInteractive(
            new Phaser.Geom.Rectangle(
                -hoveredBtn.width / 2,
                -hoveredBtn.height / 2,
                hoveredBtn.width,
                hoveredBtn.height
            ),
            Phaser.Geom.Rectangle.Contains
        )

        container.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            defaultBtn.visible = false
        })

        container.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            defaultBtn.visible = true
            buttonText.setScale(1)
            hoveredBtn.setScale(1)
        })

        container.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            buttonText.setScale(0.95)
            hoveredBtn.setScale(0.95)
        })


        container.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            buttonText.setScale(1)
            hoveredBtn.setScale(1)
            cb()
        })

        this.scene.add.existing(this)
    }
}
