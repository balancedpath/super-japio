import { ImageSource, Sound, Resource, Loader, SpriteSheet } from 'excalibur'
import pearImage from '../images/pear.png'
import treesImage from '../images/trees.png'
import mapSound from '../music/Map.wav'
import blingSound from '../sounds/bling.ogg'
import heroIdle from '../images/hero idle.png'


const Resources = {
    Pear: new ImageSource(pearImage),
    Trees: new ImageSource(treesImage),
    // HeroIdle: new ImageSource(heroIdle),

    LevelMusicMap: new Sound(mapSound),

    BlingSound: new Sound(blingSound),
}

// const spriteSheet = SpriteSheet.fromImageSource({
//     image: HeroIdle,
//     grid: {
//         rows: 1,
//         columns: 4,
//         spriteWidth: 16,
//         spriteHeight: 19,
//     },
//     spacing: {
//         // Optionally specify the offset from the top left of sheet to start parsing
//         originOffset: { x: 3, y: 3 },
//         // Optionally specify the margin between each sprite
//         margin: { x: 3, y: 3}
//     }
// })

const ResourceLoader = new Loader([
    Resources.Pear,
    Resources.Trees,

    Resources.LevelMusicMap,
    
    Resources.BlingSound,
])

export { Resources, ResourceLoader }