import { MePlayer } from "./me-player";
import { Board } from '../board';
import { Game } from '../game';
import { Card } from '../card';
import { Cardvalue } from '../card-value';
import { CardSuit } from '../card-suit';

describe('MePlayer draw a card', () => {
    let me: MePlayer;
    let board: Board;
    let cardAction =  <Card>{ value: Cardvalue.ACE, suit: CardSuit.SPADE }
    let initialMaindDeckCount: number;

    beforeEach(() => {
        board = new Board();
        let game = new Game();
        me = new MePlayer(board, game);
        initialMaindDeckCount = board.maindDeckCount;
        me.drawCard(cardAction);
    });

    it('put card in my hand', () => {
        expect(me.hand[0]).toBe(cardAction);
    });

    it('remove one card from main deck', () => {
        expect(board.maindDeckCount).toBe(initialMaindDeckCount-1);
    });

});

describe('MePlayer discard a card', () => {
    let me: MePlayer;
    let board: Board;
     
    beforeEach(() => {
        board = new Board;
        let game = new Game();
        me = new MePlayer(board, game);
        me.hand = [
            <Card>{ value: Cardvalue.ACE, suit: CardSuit.SPADE },
            <Card>{ value: Cardvalue.TWO, suit: CardSuit.HEART }
        ];
    });

    it('should throw an error if selected card is not in my hand', () => {
        expect(() => me.discard(<Card>{ value: Cardvalue.TWO, suit: CardSuit.SPADE }))
        .toThrow();
    });

    it('should remove selected card from my hand', () => {
        let cardToRemove = <Card>{ value: Cardvalue.TWO, suit: CardSuit.HEART }; 
        me.discard(cardToRemove);
        expect(me.hand.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suit.id == cardToRemove.suit.id))
            .toBeFalsy();
    });

    it('should  put selected card in the discard', () => {
        let cardToRemove = <Card>{ value: Cardvalue.TWO, suit: CardSuit.HEART }; 
        me.discard(cardToRemove);
        expect(board.discardStack.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suit.id == cardToRemove.suit.id))
            .toBeTruthy();
    });
});