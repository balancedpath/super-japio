import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./game";

export class Pear extends Actor {
    enableCapturePointer: boolean;
    private game: Game;

    constructor(game: Game){
        super()
        this.game = game
        this.graphics.use(Resources.Pear.toSprite())

        this.pos = this.getRandomVector()
        this.vel = new Vector(0,100)

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => this.pearClicked())
        this.on("exitviewport", (event) => this.resetPosition())

        this.game.add(this)
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