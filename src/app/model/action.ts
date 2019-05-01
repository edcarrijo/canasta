export class Action{
    static DRAW = 'Draw';
    static ADD_RED_THREE = 'Add red three';
    static DISCARD = 'Discard';
    static DRAW_DISCARD = 'Draw discard';
    static SEQUENCE = 'Begin sequence';
    protected constructor(){ }

    static getAll(): string[]{
        return [this.DRAW, this.ADD_RED_THREE, this.DISCARD, this.DRAW_DISCARD, this.SEQUENCE];
    }
}