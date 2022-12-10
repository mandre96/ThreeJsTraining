import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { SourceObject } from '../sources.js';
import EventEmitter from './EventEmitter.js'


const path = '../../static/models/mesh/colon_e022.obj'

export default class Resources extends EventEmitter
{


    
    private _sources: SourceObject[];
    private _items: { [key: string]: THREE.Object3D; };
    
    public get items(): { [key: string]: THREE.Object3D; } {
        return this._items;
    }
    
    
    //Polimorfismo!
    //const colon_mesh:THREE.Mesh = items["colon"] as THREE.Mesh;

    //[ colon_mesh:string --> THREE.Object3D, colon_cloud --> THREE.Points ]



    private _toLoad:number;
    private _loaded:number;


    private  _loaders:any;




    constructor(sources:SourceObject[])
    {
        super()

        // Options
        
        this._sources = sources;

        // Setup
        this._items = {}
        this._toLoad = this._sources.length
        this._loaded = 0
        
         this.setLoaders()
         this.startLoading()
    }

    private setLoaders()
    {
        this._loaders = {}
        this._loaders.objLoader = new OBJLoader()
     
    }
    private startLoading()
    {
        // Load each source
        for(const source of this._sources)
        {
            if(source.type === 'objModel')
            {
                this._loaders.objLoader.load(
                    source.path,
                    (file:THREE.Mesh) =>
                    {
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }
    sourceLoaded(source:SourceObject, file:THREE.Mesh /*Esse tipo pode mudar caso existam outros arquivos de Source*/ )
    {
        this._items[source.name] = file

        this._loaded++

        if(this._loaded === this._toLoad)
        {
            this.trigger('ready');
        }
    }

}