import { CardModel } from './card.model';

export class GameModel{
    public redThrees: CardModel[];
    public sequences: Sequence[];
}

export class Sequence{
    public cards: CardModel[];
}