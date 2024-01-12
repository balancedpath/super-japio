import { Actor, CollisionType, Engine, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./Game";

export class Pear extends Actor {
    enableCapturePointer: boolean;
    private game: Game;

    constructor(game: Game){
        super({
            width: Resources.Pear.width,
            height: Resources.Pear.height,
        })
        this.game = game
        this.graphics.use(Resources.Pear.toSprite())

        this.pos = this.getRandomVector()

        this.body.collisionType = CollisionType.Active;
        this.on('collisionstart', this.bounce)

        // this.enableCapturePointer = true
        // this.pointer.useGraphicsBounds = true
        // this.on("pointerup", (event) => this.pearClicked())
        // this.on("exitviewport", (event) => this.resetPosition())

        this.game.add(this)
    }

    private bounce(){
        console.log('bounce');
        
        this.vel = new Vector(0, -4000)
    }

    private getRandomVector(){
        return new Vector(
            Math.random() * this.game.drawWidth,
            Math.random() * this.game.drawHeight,
        )
    }

    pearClicked() {
        Resources.BlingSound.play()
        this.game.increaseScore(100)
        this.resetPosition()
    }

    resetPosition(){
        this.pos = this.getRandomVector()
    }
}