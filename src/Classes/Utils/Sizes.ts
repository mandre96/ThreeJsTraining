import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {

    //todo estudar https://www.devmedia.com.br/modificadores-de-acesso-estrutura-da-linguagem/18697
    private _width: number;
    
    public get width(): number {
        return this._width;
    }

    private _height: number;
    
    public get height(): number {
        return this._height;
    }
 
    private _pixelRatio: number; //TODO tentar modificar fora da classe o pixelRatio e checa se o encapsulamento está funcionando
    
    
    public get pixelRatio(): number {
        return this._pixelRatio;
    }
   
    

    constructor() {
        super();
        // init
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._pixelRatio = Math.min(window.devicePixelRatio, 2);


        window.addEventListener('resize', () => {
            this._width = window.innerWidth;
            this._height = window.innerHeight;
            this._pixelRatio = Math.min(window.devicePixelRatio, 2);

            this.trigger('resize', []);
        });

    }




}