import * as THREE from 'three'

import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import {sourceArray,SourceObject} from './sources.js'


let instance = null

export default class Application 
{      
    private static _instance: Application;

   
    private _canvas: HTMLCanvasElement;
    private _sizes: Sizes;
    private _time: Time;
    private _scene: THREE.Scene;
    private _camera: Camera;
    private _renderer: Renderer;
    private _world:World;
    private _resources:Resources;
    

    private constructor(canvas:HTMLCanvasElement) //Como Acessar esta classe? Classes.singleton(); //Estudar Singleton!
    {
        Application._instance = this;
        
        // Global access
        //window.classes = this

        // Options
        this._canvas = canvas

        // Setup
        this._sizes = new Sizes();
        this._time = new Time();
        this._scene = new THREE.Scene()
        this._resources = new Resources(sourceArray)
        this._camera = new Camera()
        this._renderer = new Renderer()
        this._world = new World()
        

        // Resize event
        this._sizes.on('resize', () =>
        {
            this.resize();
        })

        // Time tick event
        this._time.on('tick', () =>
        {
            this.update()
        })
    }


    public static singleton(canvas: any = document.querySelector('canvas.webgl')) //default parameter
    {

        return this._instance || (this._instance = new this(canvas));
    }
  

    public resize()
    {
        this._camera.resize()
        this._renderer.resize()
    }

    public update()
    {
        this._camera.update()
        this._renderer.update()
    }

    
}
