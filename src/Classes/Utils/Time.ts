import EventEmitter from './EventEmitter'

export default class Time extends EventEmitter {
    
    private _start: number;
    private _current: number;
    private _elapsed: number;
    private _delta: number;

    constructor() {

        super();

        //setup
        this._start = Date.now();
        this._current = this._start;
        this._elapsed = 0;
        this._delta = 16;

        window.requestAnimationFrame(() => {
            this.tick();
        });
    }


    tick(): void {
        const currentTime: number = Date.now();
        this._delta = currentTime - this._current;
        this._current = currentTime;
        this._elapsed = this._current - this._start;

        this.trigger('tick', '');

        window.requestAnimationFrame(() => {
            this.tick();
        });
    }
}