import { Card, Meld } from '..';

export class Game{
    constructor(){}
    public redThrees: Card[] = [];
    public melds: Meld[] = [];
    public currentScore: number = 0;
}