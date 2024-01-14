import { Engine, Scene, Vector } from "excalibur";
import { Game } from "../game";
import { Background } from "../actors/Background";
import { Button } from "../actors/Button";

export class MainMenu extends Scene {
    private game: Game

    constructor(game: Game) {
        super()
        this.game = game
    }

    onInitialize(_engine: Engine): void {

        const bg = new Background(this.game)
        this.add(bg)

        const xMiddle = this.game.drawWidth / 2

        const startButton = new Button(this.startGame, "Start Game", new Vector(xMiddle, 100))
        const scoreButton = new Button(this.displayScores, "Scores", new Vector(xMiddle, 200))
        const settingsButton = new Button(this.displaySettings, "Settings", new Vector(xMiddle, 300))

        this.add(startButton)
        this.add(scoreButton)
        this.add(settingsButton)

    }

    private startGame() {
        // set scene level1
        console.log('load level 1');
        
    }

    private displayScores() {
        console.error('not implemented');
        
    }

    private displaySettings(){
        console.error('not implemented');

    }
}