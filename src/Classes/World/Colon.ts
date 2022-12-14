import * as THREE from 'three'
import Application from '../Application.js'
import Resources from '../Utils/Resources.js';


export default class Colon
{

    private _Application:Application;
    private _scene: THREE.Scene;
    private _resources:Resources;
    

    private _colonModel:THREE.Mesh;

    constructor()
    {
        this._Application = Application.singleton(); //utilizar o singleton! 
        this._scene = this._Application.scene!; //Corrigir o acesso
        this._resources = this._Application.resources!;
        

        // Setup
        this._colonModel = this._resources.items['colonModel'] as THREE.Mesh //
                                                //TODO testa se funciona com .colonModel
                                                // Fiquei em dúvida com esse tipo de acesso
       
        this._colonModel.material = new THREE.MeshPhongMaterial();                                          



        this.setModel()
       
    }
    private setModel()
    {
       
        this._colonModel.scale.set(0.02, 0.02, 0.02)
        this._scene.add(this._colonModel)

    
    }
  
}