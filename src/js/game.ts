import '../css/style.css'
import { DisplayMode, Engine, Physics, Vector } from "excalibur"
import { ResourceLoader } from './resources.js'
import { MainMenu } from './scenes/MainMenu.ts'
import { Scores } from './scenes/Scores.ts'
import { Settings } from './scenes/Settings.ts'
import { LevelForest } from './scenes/LevelForest.ts'

// https://github.com/HR-CMGT/PRG04-2022-2023/tree/main
// https://opengameart.org/

export class Game extends Engine {
    // TODO: change to UI class

    constructor() {
        super({ 
            width: 600, 
            height: 400,
            displayMode: DisplayMode.FitScreen,
        })
        
        Physics.useArcadePhysics()
        Physics.acc = new Vector(0, 1000)
        console.warn("maybe change accelator vector? might be too slogish?");

        this.start(ResourceLoader).then(() => this.startGame())
    }
    
    startGame() {

        const mainMenuScene = new MainMenu(this)
        // const scoringScene = new Scores() 
        // const settingsScene = new Settings() 
        
        const levelForest = new LevelForest(this)


        // Initialize and add all scenes
        this.add('mainmenu', mainMenuScene)
        // this.add('scores', scoringScene)
        // this.add('settings', settingsScene)

        this.add('levelForest', levelForest)
        // this.add('levelSnow', levelSnow)
        // this.add('levelCastle', levelCastle)
        

        this.goToScene('mainmenu')
        
    }
}

new Game()
