import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources";
import { Game } from "./game";

export class Background extends Actor {
    constructor(game: Game) {
        super({
            width: game.drawWidth,
            height: game.drawHeight,
        })
        this.pos = new Vector(game.drawWidth/2 ,game.drawHeight/2)
        this.scale = new Vector(2.5,2.5)
    }

    onInitialize(_engine: Engine): void {
        this.graphics.use(Resources.Trees.toSprite())
    }
}
