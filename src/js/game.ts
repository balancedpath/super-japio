import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './Background.ts'
import { Pear } from './Pear.ts'
import { Scoring } from './Scoring.ts'

export class Game extends Engine {
    private scoring: Scoring

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }
    
    startGame() {
        const bg = new Background(this)
        
        this.scoring = new Scoring(this)
        const pear = new Pear(this)

    }

    increaseScore(deltaScore: number) {
        this.scoring.increaseScore(deltaScore)
    }
}

new Game()
