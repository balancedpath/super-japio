import { Actor, CollisionType, Color, Engine, Vector } from "excalibur";

export class Wingate extends Actor {
    constructor(pos: Vector) {
        super({
            width:50,
            height:50,
            pos: pos,
            color: Color.Yellow,
        })
    }

    onInitialize(_engine: Engine): void {
        this.body.collisionType = CollisionType.Passive
        this.on('collisionstart', (event) => {
            console.log('win next level');
        })
    }
}