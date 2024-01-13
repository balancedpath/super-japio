import { Engine, Scene, Vector } from "excalibur";
import { Game } from "./game";
import { Background } from "./Background";
import { Button } from "./Button";

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
        const scoreButton = new Button(this.displayScores, "Scores", new Vector(xMiddle, 400))
        const settingsButton = new Button(this.displaySettings, "Settings", new Vector(xMiddle, 600))

        this.add(startButton)
        this.add(scoreButton)
        this.add(settingsButton)

    }

    private startGame() {
        // set scene level1
    }

    private displayScores() {

    }

    private displaySettings(){

    }
}