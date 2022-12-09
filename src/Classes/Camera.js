import * as THREE from 'three'
import Classes from './Classes.js'
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls"

// mudar
export default class Camera
{
    
    constructor()
    {
        this.classes = new Classes()
        this.sizes = this.classes.sizes
        this.scene = this.classes.scene
        this.canvas = this.classes.canvas
       
        this.setInstance()
        
        this._controls = new TrackballControls(this.instance, this.canvas)
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
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
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this._controls.update()
    }
}