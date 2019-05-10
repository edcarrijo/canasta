

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
        let previousState: T;
        if(this.history.length > 1)
            previousState = this.history.pop();
        else
            previousState =  this.history[0];

        this.currentState = JSON.parse(JSON.stringify(previousState));;
        return previousState;
    }
}