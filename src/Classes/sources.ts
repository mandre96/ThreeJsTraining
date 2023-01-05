
//TODO Retirar o cube texture 
export interface SourceObject
{
name:string;
type:string;
path:string | string[];

}

let objSource: SourceObject = {name: 'colonModel',
                            type: 'objModel',
                            path: '../models/mesh/colon_e022.obj',
                        

};


export let sourceArray: SourceObject[] = [objSource];