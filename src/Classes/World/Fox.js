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
         this.resource = this.resources.items.colonModel

         this.setModel()
    }
    setModel()
    {
        this.model = this.resource.scene
        ///TODO Track
        this.model.scale.set(0.02, 0.02, 0.02)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
}