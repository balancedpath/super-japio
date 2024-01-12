import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor {
    constructor(game: Engine) {
        super()
        this.pos = new Vector(game.drawWidth/2, game.drawHeight/2)
        this.graphics.use(Resources.Trees.toSprite())
        this.scale= new Vector( 3,  3)
        

        game.add(this)
    }
}
