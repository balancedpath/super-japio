import '../css/style.css'
import { Actor, Axis, DisplayMode, Engine, Physics, Vector } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Background } from './actors/Background.ts'
import { Pear } from './actors/Pear.ts'
import { Scoring } from './actors/Scoring.ts'
import { Platform } from './actors/Platform.ts'
import { Hero } from './actors/Hero.ts'
import { MainMenu } from './scenes/MainMenu.ts'

// https://github.com/HR-CMGT/PRG04-2022-2023/tree/main
// https://opengameart.org/

export class Game extends Engine {
    private scoring: Scoring

    constructor() {
        super({ 
            width: 600, 
            height: 400,
            displayMode: DisplayMode.FitScreen,
        })
        
        Physics.useArcadePhysics()
        Physics.acc = new Vector(0, 100)

        this.start(ResourceLoader).then(() => this.startGame())
    }
    
    startGame() {

        const mainMenu = new MainMenu(this)
        this.add('mainmenu', mainMenu)

        this.goToScene('mainmenu')
        
        // const bg = new Background(this)
        
        // const platform = new Platform(this)
        // const hero = new Hero(this)
        
        // this.scoring = new Scoring(this)
        // const pear = new Pear(this)
        
        // this.currentScene.camera.strategy.lockToActorAxis(hero, Axis.X)
            
            // this.currentScene.camera.shake(10, 5, 1000)

    }

    increaseScore(deltaScore: number) {
        this.scoring.increaseScore(deltaScore)
    }
}

new Game()
