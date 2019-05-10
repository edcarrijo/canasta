

export class UndoHistory<T>{

    private history: T[];
    private currentState: T;

    constructor(initialState: T){
        this.history = [];
        this.do(initialState);
    }

    do(state: T){
        const stateClone = JSON.parse(JSON.stringify(state));
        if(this.currentState)
            this.history.push(this.currentState);
        this.currentState = stateClone;
    }

    undo():T{
        if(this.history.length > 1)
            return this.history.pop();
        else
            return this.history[0];
    }
}