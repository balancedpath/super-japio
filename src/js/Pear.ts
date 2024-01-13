import { Actor, CollisionType, Engine, ImageSource, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./game";

export class Pear extends Actor {
    enableCapturePointer: boolean;
    private game: Game;

    constructor(game: Game){
        super({
            width: Resources.Pear.width,
            height: Resources.Pear.height,
        })
        this.game = game
        this.game.add(this)

    }

    onInitialize(_engine: Engine): void {
        this.graphics.use(Resources.Pear.toSprite())

        this.pos = this.getRandomVector()

        this.body.collisionType = CollisionType.Active;
        this.on('collisionstart', (event) => this.bounce())

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => this.pearClicked())
        this.on("exitviewport", (event) => this.resetPosition())

    }

    onPreUpdate(_engine: Engine, _delta: number): void {
        
    }

    private bounce(){
        console.log('bounce');
        this.game.increaseScore(-100)
        this.resetPosition
    }

    private getRandomVector(){
        return new Vector(
            Math.random() * this.game.drawWidth,
            Math.random() * this.game.drawHeight,
        )
    }

    private pearClicked() {
        Resources.BlingSound.play()
        this.game.increaseScore(100)
        this.resetPosition()
    }

    resetPosition(){
        this.pos = this.getRandomVector()
    }
}