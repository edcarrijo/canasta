import { Card } from '../card';
import { Board } from './board';

export class Player{
    constructor(){ }
    public hand: Card[] = [];
    public handCount: number = Board.HAND_COUNT;
}