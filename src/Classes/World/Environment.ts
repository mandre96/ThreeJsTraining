import * as THREE from 'three'
import Application from '../Application.js'
import Resources from '../Utils/Resources.js';

export default class Environment
{
	public Application: any;
	private _scene: THREE.Scene;
	private _resources:Resources;
	private _sunLight:THREE.DirectionalLight;
	public environmentMap: any;

    constructor()
    {
        //this.classes = new Classes()
        this._scene = this.Application.scene
        this._resources = this.Application.resources
        this._sunLight = new THREE.DirectionalLight('#ffffff', 4)
        // Setup
        this.setSunLight()
        this.setEnvironmentMap()
    }
    setSunLight()
    {  
        this._sunLight.castShadow = true
        this._sunLight.shadow.camera.far = 15
        this._sunLight.shadow.mapSize.set(1024, 1024)
        this._sunLight.shadow.normalBias = 0.05
        this._sunLight.position.set(3, 3, - 2.25)
        this._scene.add(this._sunLight)
    }
    setEnvironmentMap()
    {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = this._resources.items.environmentMapTexture
        this.environmentMap.texture.encoding = THREE.sRGBEncoding
        
        this._scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () =>
        {
            this._scene.traverse((child) =>
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()
    }
    
}