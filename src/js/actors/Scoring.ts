import { Actor, Font, FontUnit, Label, Vector } from "excalibur";
import { Resources } from "../resources";
import { Game } from "../game";

export class Scoring extends Actor {

    points: number;
    game: Game;
    label: Label;

    constructor(game: Game) {
        super()
        this.game = game;
        this.points = 0;

        this.label = new Label({
            text: this.points.toString(),
            pos: new Vector(100, 100),
            font: new Font({
                family: 'monospace',
                size: 24,
                unit: FontUnit.Px,
            })
        })

        this.game.add(this.label)
    }

    public increaseScore(deltaScore: number) {
        this.points += deltaScore
        this.label.text = this.points.toString()
        console.log('score', this.points);
        
    }

    public getScore() {
        return this.points
    }
}