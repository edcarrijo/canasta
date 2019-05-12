export class Action{
    static DRAW = 'Draw';
    static ADD_RED_THREE = 'Add red three';
    static DISCARD = 'Discard';
    static PICK_UP_DISCARD = 'Pick up discard';
    static MELD = 'Add meld';
    protected constructor(){ }

    static getAll(): string[]{
        return [this.DRAW, this.ADD_RED_THREE, this.DISCARD, this.PICK_UP_DISCARD, this.MELD];
    }
}