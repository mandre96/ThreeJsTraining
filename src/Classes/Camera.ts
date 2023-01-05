import * as THREE from 'three'
import Application from './Application.js'
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls"
import Sizes from './Utils/Sizes.js';
// mudar
export default class Camera
{
	public Application: any;
	private _sizes:Sizes;
	private _scene: THREE.Scene;
	private _canvas: HTMLCanvasElement;
	private _controls:TrackballControls;
	public instance:any;

    constructor()
    {
        //this.classes = new Classes()
        this._sizes = this.Application.sizes
        this._scene = this.Application.scene
        this._canvas = this.Application.canvas
       
        this.setInstance()
        
        this._controls = new TrackballControls(this.instance, this._canvas)
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this._sizes.width / this._sizes.height, 0.1, 100)
        this.instance.position.set(6, 4, 8)
        this._scene.add(this.instance)
    }

    setControls()
    {
        
        this._controls.rotateSpeed = 2.0;
        this._controls.zoomSpeed = 2.2;
        this._controls.panSpeed = 0.1;
        this._controls.noZoom = false;
        this._controls.noPan = false;
        this._controls.staticMoving = true;
        this._controls.dynamicDampingFactor = 0.2;
        this._controls.keys = [ 'KeyA', 'KeyS', 'KeyD' ];
        this._controls.minDistance = 0.01;
        this._controls.maxDistance = 5000;
        
    }

    resize()
    {
        this.instance.aspect = this._sizes.width / this._sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this._controls.update()
    }
}