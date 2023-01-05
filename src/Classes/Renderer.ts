import * as THREE from 'three'
import Application from './Application.js'
import Camera from './Camera.js'
import Sizes from './Utils/Sizes.js';

export default class Renderer
{
	private _Application: any;
	private _canvas:HTMLCanvasElement;
    private _sizes:Sizes;
	private _scene: THREE.Scene;
    private _camera:Camera;
	public instance:any;

    constructor()
    {
        //this.classes = new Classes()
        this._canvas = this._Application.canvas
        this._sizes = this._Application.sizes
        this._scene = this._Application.scene
        this._camera = this._Application.camera

        this.setInstance()
    }

    private setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: this._canvas,
            antialias: true
        })
       
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this._sizes.width, this._sizes.height)
        this.instance.setPixelRatio(Math.min(this._sizes.pixelRatio, 2))
    }

    resize()
    {
        this.instance.setSize(this._sizes.width, this._sizes.height)
        this.instance.setPixelRatio(Math.min(this._sizes.pixelRatio, 2))
    }

    update()
    {
        this.instance.render(this._scene, this._camera.instance)
    }
}