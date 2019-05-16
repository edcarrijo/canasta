import { Card } from '../card';

export class Player{
    static HAND_COUNT = 11;

    constructor(){ 
        this.handCount = Player.HAND_COUNT;
    }
    public hand: Card[] = [];
    public handCount: number;
    public isActive: boolean;
}