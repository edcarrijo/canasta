import { Card } from '../card';

export class Player{
    static HAND_COUNT = 11;

    constructor(){ }
    public hand: Card[] = [];
    public handCount: number = Player.HAND_COUNT;
}