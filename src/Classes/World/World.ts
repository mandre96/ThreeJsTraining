import Application from '../Application.js'
import Environment from './Environment.js'
import Colon from './Colon.js'
import Resources from '../Utils/Resources.js';

export default class World
{
	public Application: any;
	private _scene: THREE.Scene;
	private _resources:Resources;
	public colon: any;
	public environment: any;

    constructor()
    {
        //this.classes = new Classes()
        this._scene = this.Application.scene
        this._resources = this.Application.resources

        

        // Wait for resources
        this._resources.on('ready', () =>
        {
            // Setup
            this.colon = new Colon()
            this.environment = new Environment()
        })
    }
}