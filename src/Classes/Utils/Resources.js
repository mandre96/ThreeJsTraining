import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import EventEmitter from './EventEmitter.js'

const path = '../../static/models/mesh/colon_e022.obj'

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super()

        // Options
        this.sources = sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0
        
         this.setLoaders()
         this.startLoading()
    }
    setLoaders()
    {
        this.loaders = {}
        this.loaders.objLoader = new OBJLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }
    startLoading()
    {
        // Load each source
        for(const source of this.sources)
        {
            if(source.type === 'objModel')
            {
                this.loaders.objLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'cubeTexture')
            {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }
    sourceLoaded(source, file)
    {
        this.items[source.name] = file

        this.loaded++

        if(this.loaded === this.toLoad)
        {
            this.trigger('ready')
        }
    }

}