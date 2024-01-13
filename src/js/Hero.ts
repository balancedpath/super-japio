import { Actor, CollisionType, Color, Engine, Input, Vector } from "excalibur"
import { Game } from "./game";

export class Hero extends Actor {

    public onGround = true;
    public jumped = false;

    private healthPoints: number
    private speedMulitplier: number
    private hasArmor: boolean
    private startPos: Vector
    private game: Game

    constructor(game: Game, startHeight: number = 200) {
        super({
            width: 15,
            height: 25,
            color: Color.Red
        })
        this.game = game

        // draw hero 100 picels from the botom
        this.startPos = new Vector(200, game.drawHeight - startHeight)
        this.pos = this.startPos

        this.healthPoints = 100
        this.speedMulitplier = 1

        this.body.collisionType = CollisionType.Active;

        this.game.add(this)

        this.on('collisionstart', () => {
            console.log('colission');
            
        })
    }

    onPreUpdate(){
        // Reset x velocity
        this.vel.x = 0;

        // Player input
        if(this.game.input.keyboard.isHeld(Input.Keys.Left)) {
            this.vel.x = -150;
        }

        if(this.game.input.keyboard.isHeld(Input.Keys.Right)) {
            this.vel.x = 150;
        }

        if(this.game.input.keyboard.isHeld(Input.Keys.Up) && this.onGround) {
            this.vel.y = -100;
            this.onGround = false;
            // Resources.jump.play(.1);
        }
    }

    receiveDamage(damPoints: number) {
        this.healthPoints -= damPoints
        // TODO: play OOF sound or something
        // add physics
    }

    jump() {
        // change sprite
        // change vector
    }

}