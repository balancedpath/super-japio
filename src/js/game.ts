import '../css/style.css'
import { Actor, DisplayMode, Engine, Physics, Vector } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Background } from './Background.ts'
import { Pear } from './Pear.ts'
import { Scoring } from './Scoring.ts'
import { Platform } from './Platform.ts'
import { Hero } from './Hero.ts'

export class Game extends Engine {
    private scoring: Scoring

    constructor() {
        super({ 
            width: 800, 
            height: 600,
            displayMode: DisplayMode.FitScreen,
        })
        this.start(ResourceLoader).then(() => this.startGame())

        Physics.useArcadePhysics()
        Physics.acc = new Vector(0, 100)
    }
    
    startGame() {
        const bg = new Background(this)
        
        const platform = new Platform(this)
        const hero = new Hero(this)

        this.scoring = new Scoring(this)
        const pear = new Pear(this)

    }

    increaseScore(deltaScore: number) {
        this.scoring.increaseScore(deltaScore)
    }
}

new Game()
