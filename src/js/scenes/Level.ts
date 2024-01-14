import { Actor, Scene } from "excalibur";
import { Background } from "../actors/Background";
import { Hero } from "../actors/Hero";
import { MusicPlayer } from "../actors/MusicPlayer";
import { Game } from "../game";

export abstract class Level extends Scene {
    
    // Every level needs to implement this, but a "level blueprint" isn't a level implementation
    // Hence.. abstract class
    /**
     * background animation
     * UI + scoring + time?
     * HERO
     * togglable menu
     * music
     * reference to menu scene?
     * event that level is complete, call on level complete? (whatever that might be)
     */

    CameraS
    
    abstract game: Game
    abstract UI: Actor;
    abstract bg: Background;
    abstract hero: Hero
    abstract music: MusicPlayer

    constructor() {
        super()
    }

    abstract finishLevel(): Event
}