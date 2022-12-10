
//TODO Retirar o cube texture 
export interface SourceObject
{
name:string;
type:string;
path:string | string[];

}


let enviromentSource: SourceObject = { name: 'environmentMapTexture',
                            type:'cubeTexture',
                            path:[
                            'textures/environmentMap/px.jpg',
                            'textures/environmentMap/nx.jpg',
                            'textures/environmentMap/py.jpg',
                            'textures/environmentMap/ny.jpg',
                            'textures/environmentMap/pz.jpg',
                            'textures/environmentMap/nz.jpg'
                        ]

};

let objSource: SourceObject = {name: 'colonModel',
                            type: 'objModel',
                            path: '../models/mesh/colon_e022.obj',
                        

};


export let sourceArray: SourceObject[] = [enviromentSource, objSource ];