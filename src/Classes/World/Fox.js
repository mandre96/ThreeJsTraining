import * as THREE from 'three'
import Classes from '../Classes.js'

export default class Fox
{
    constructor()
    {
        this.classes = new Classes()
        this.scene = this.classes.scene
        this.resources = this.classes.resources

         // Setup
         this.colonModel = this.resources.items.colonModel //Esse atributo é a malha
        
         //TODO implementar o MeshPhongMaterial
         // Retirar do código tudo o que não está sendo utilizado!
         console.log(this.colonModel)

         this.setModel()
    }
    setModel()
    {
        //this.model = this.resource.scene
        //console.log(model)
        ///TODO Track
        this.colonModel.scale.set(0.02, 0.02, 0.02)
        this.scene.add(this.colonModel)

    
    }
}