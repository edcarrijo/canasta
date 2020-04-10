import { CardSuit, CardValue } from '.';


export class Card{
    public suit: CardSuit;
    public value: CardValue;
    v: CardValue;

    constructor(suit: CardSuit, value: CardValue) {
        this.suit = suit;
        this.value = value;
    }
}