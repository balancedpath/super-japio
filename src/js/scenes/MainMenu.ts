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

        const startButton = new Button(this.startGamePressed.bind(this), "Start Game", new Vector(xMiddle, 100))
        const scoreButton = new Button(this.displayScoresPressed.bind(this), "Scores", new Vector(xMiddle, 200))
        const settingsButton = new Button(this.displaySettingsPressed.bind(this), "Settings", new Vector(xMiddle, 300))

        this.add(startButton)
        this.add(scoreButton)
        this.add(settingsButton)

    }

    private startGamePressed() {
        // set scene level1
        console.log("Loading level 1");
        
        this.game.goToScene('levelForest')
        
    }

    private displayScoresPressed() {
        console.error('not implemented');
        
    }

    private displaySettingsPressed(){
        console.error('not implemented');

    }
}