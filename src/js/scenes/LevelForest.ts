import { Actor, CollisionType, Color, Engine, Vector } from "excalibur";
import { Background } from "../actors/Background";
import { Hero } from "../actors/Hero";
import { Platform } from "../actors/Platform";
import { MusicPlayer } from "../actors/MusicPlayer";
import { Level } from "./Level";
import { Game } from "../game";
import { Wingate } from "../actors/Wingate";

export class LevelForest extends Level {
    
    game: Game;
    UI: Actor;
    bg: Background;
    hero: Hero;
    music: MusicPlayer;

    constructor(game: Game) {
        super()
        this.game = game
    }

    onInitialize(_engine: Engine): void {
        this.hero = new Hero(this.game)
        // set location

        this.game.currentScene.camera.strategy.lockToActor(this.hero)

        this.bg = new Background(this.game)

        const platform = new Platform(this.game)

        const winGate = new Wingate(new Vector(300, -25))

        platform.addChild(winGate)
    }

    finishLevel(): Event {
        throw new Error("Method not implemented.");
    }

}