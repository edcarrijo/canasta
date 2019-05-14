export class Action{
    static DRAW = 'canasta.player-action.draw';
    static ADD_RED_THREE = 'canasta.player-action.addRedThree';
    static DISCARD = 'canasta.player-action.discard';
    static PICK_UP_DISCARD = 'canasta.player-action.pickUpDiscard';
    static MELD = 'canasta.player-action.addMeld';
    static GOOUT = 'canasta.player-action.goOut'
    protected constructor(){ }

    static getAll(): string[]{
        return [this.DRAW, this.ADD_RED_THREE, this.DISCARD, this.PICK_UP_DISCARD, this.MELD, this.GOOUT];
    }
}