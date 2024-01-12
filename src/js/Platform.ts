import { Actor, CollisionType, Color, Vector } from "excalibur";
import { Game } from "./Game";

export class Platform extends Actor {
    
    platformHeight: number

    constructor(game: Game, platformHeight: number = 50) {
        super({
            width: game.drawWidth,
            height: platformHeight,
            color: Color.Chartreuse,
            anchor: new Vector(0, 0)
        })

        this.platformHeight = platformHeight
        this.pos = new Vector(0, game.drawHeight - platformHeight)

        this.body.collisionType = CollisionType.Fixed

        game.add(this)
        
    }
}