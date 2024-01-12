import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import pearImage from '../images/pear.png'
import treesImage from '../images/trees.png'
import mapSound from '../music/Map.wav'
import blingSound from '../sounds/bling.ogg'

const Resources = {
    Fish: new ImageSource(fishImage),
    Pear: new ImageSource(pearImage),
    Trees: new ImageSource(treesImage),
    LevelMusicMap: new Sound(mapSound),
    BlingSound: new Sound(blingSound),
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Pear,
    Resources.Trees,
    Resources.LevelMusicMap,
    Resources.BlingSound,
])

export { Resources, ResourceLoader }