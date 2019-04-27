export class Action{
    static DRAW = 'Draw';
    static DISCARD = 'Discard';
    static DRAW_DISCARD = 'Draw discard';
    static SEQUENCE = 'Begin sequence';
    protected constructor(){ }

    static getAll(): string[]{
        return [this.DRAW, this.DISCARD, this.DRAW_DISCARD, this.SEQUENCE];
    }
}