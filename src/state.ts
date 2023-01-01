export class State {
  public id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export class GameState extends State {
  public update: Function;
  public render: Function;
  
  constructor(id: string) {
    super(id);
  }
  initializer(f: Function) {
    f.bind(this)();
  }
  setUpdateFunction(f: Function) {
    this.update = f.bind(this);
  }
  setRenderFunction(f: Function) {
    this.render = f.bind(this);
  }
}





export class StateMachine<StateType> {
  private _states: Array<StateType>;
  private _current: StateType;

  constructor() {
    this._states = [];
    this._current = null;
  }
  hasCurrent(): boolean {
    return this._current!== null;
  }
  getCurrent(): StateType {
    return this._current;
  }
  setCurrent(id: string) {
    const state = this._states.find(s => s.id === id);
    if (state) this._current = state;
  }
  add(state: StateType) {
    this._states.push(state);
  }
}