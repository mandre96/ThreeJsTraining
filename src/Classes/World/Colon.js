import * as THREE from 'three'
import Classes from '../Classes.js'


export default class Colon
{
    constructor()
    {
        this.classes = new Classes()
        this.scene = this.classes.scene
        this.resources = this.classes.resources
        

        // Setup
        this.colonModel = this.resources.items.colonModel //Esse atributo é a malha

        var createcolonMaterial = function() {
            var colonTexture = new THREE.TextureLoader().load('../../../static/models/mesh/color.jpg');
            var colonMaterial = new THREE.MeshPhongMaterial();
        
            colonMaterial.map = colonTexture;
        
            return colonMaterial;
        
        }   
        //TODO implementar o MeshPhongMaterial
        // Retirar do código tudo o que não está sendo utilizado!
        console.log(this.colonModel)

        this.setModel()
        // this.setTextures()
        // this.setMaterial()
        // this.setMesh()
    }
    setModel()
    {
        //this.model = this.resource.scene
        //console.log(model)
        ///TODO Track
        this.colonModel.scale.set(0.02, 0.02, 0.02)
        this.scene.add(this.colonModel)

    
    }
    // setTextures()
    // {
    //     this.textures = {}

    //     this.textures.color = this.resources.items.grassColorTexture
    //     this.textures.color.encoding = THREE.sRGBEncoding
    //     this.textures.color.repeat.set(1.5, 1.5)
    //     this.textures.color.wrapS = THREE.RepeatWrapping
    //     this.textures.color.wrapT = THREE.RepeatWrapping

    //     this.textures.normal = this.resources.items.grassNormalTexture
    //     this.textures.normal.repeat.set(1.5, 1.5)
    //     this.textures.normal.wrapS = THREE.RepeatWrapping
    //     this.textures.normal.wrapT = THREE.RepeatWrapping
    // }

    // setMaterial()
    // {
    //     this.material = new THREE.MeshStandardMaterial({
    //         map: this.textures.color,
    //         normalMap: this.textures.normal
    //     })
    // }

    // setMesh()
    // {
    //     this.mesh = new THREE.Mesh(this.colonModel, this.material)
    //     this.scene.add(this.mesh)
    // }
}