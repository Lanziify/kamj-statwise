import React from 'react'
import Phaser from 'phaser'
import StartGame from './main'
import { Stack } from '@chakra-ui/react'

export interface PhaserGameRef {
    game: Phaser.Game | null
    scene: Phaser.Scene | null
}

interface PhaserGameProps {
    currentActiveScene?: (scene: Phaser.Scene) => void
}

const EventBus = new Phaser.Events.EventEmitter()

const PhaserGame = React.forwardRef<PhaserGameRef, PhaserGameProps>(
    ({ currentActiveScene }, ref) => {
        const game = React.useRef<Phaser.Game | null>(null)

        React.useLayoutEffect(() => {
            if (game.current === null) {
                game.current = StartGame()

                if (typeof ref === 'function') {
                    ref({ game: game.current, scene: null })
                } else if (ref) {
                    ref.current = { game: game.current, scene: null }
                }
            }

            return () => {
                if (game.current) {
                    game.current.destroy(true)
                    if (game.current !== null) {
                        game.current = null
                    }
                }
            }
        }, [ref])

        // React.useEffect(() => {
        //     EventBus.on(
        //         'current-scene-ready',
        //         (scene_instance: Phaser.Scene) => {
        //             if (
        //                 currentActiveScene &&
        //                 typeof currentActiveScene === 'function'
        //             ) {
        //                 currentActiveScene(scene_instance)
        //             }

        //             if (typeof ref === 'function') {
        //                 ref({ game: game.current, scene: scene_instance })
        //             } else if (ref) {
        //                 ref.current = {
        //                     game: game.current,
        //                     scene: scene_instance,
        //                 }
        //             }
        //         }
        //     )
        //     return () => {
        //         EventBus.removeListener('current-scene-ready')
        //     }
        // }, [currentActiveScene, ref])
        return (
            <Stack
                id='game-container'
                maxWidth='lg'
                margin='auto'
                maxHeight='3xl'
            ></Stack>
        )
    }
)

export default PhaserGame
