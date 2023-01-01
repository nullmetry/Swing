import { StateMachine, GameState } from './state';
import { WebGLRenderer } from 'three';

export class Game {
  private _running: boolean;
  private _renderer: WebGLRenderer;
  private _gameStates: StateMachine<GameState>;
  private _lastTime: number;
  
  constructor(canvas: any) {
    this._running = false;
    this._gameStates = new StateMachine();
    this._renderer = new WebGLRenderer({ canvas });
    this._initialize();
  }
  
  _initialize() {
    const renderer = this._renderer;
    renderer.setSize(innerWidth, innerHeight);
  }

  start() {
    if (!this._gameStates.hasCurrent()) return;
    this._running = true;
    this._lastTime = Date.now();
    this._tick();
  }

  stop() {
    this._running = false;
    this._lastTime = null;
  }

  _getDeltaTime() {
    const now = Date.now();
    const delta = (now - this._lastTime)/1000;
    this._lastTime = now;
    return delta;
  }
  

  _tick() {
    if (!this._running) return;

    const currentState = this._gameStates.getCurrent();

    const dt = this._getDeltaTime();
    currentState.update(dt);
    currentState.render(this._renderer);
    


    const callback = (() => this._tick()).bind(this);
    requestAnimationFrame(callback);
                          
  }

  addState(state: GameState) {
    this._gameStates.add(state);
  }
  setState(id: string) {
    this._gameStates.setCurrent(id);
  }

  _handleResize() {}
}