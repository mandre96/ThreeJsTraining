import Classes from '../Classes.js'
import Environment from './Environment.js'
import Fox from './Fox.js'

export default class World
{
    constructor()
    {
        this.classes = new Classes()
        this.scene = this.classes.scene
        this.resources = this.classes.resources

        

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.fox = new Fox()
            this.environment = new Environment()
        })
    }
}