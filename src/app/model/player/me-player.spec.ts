import { MePlayer } from "./me-player";
import { Board } from '../board';
import { Game } from '../game';
import { Card } from '../card';
import { Cardvalue } from '../card-value';
import { CardSuite } from '../card-suite';

describe('MePlayer draw a card', () => {
    let me: MePlayer;
    let board: Board;
    let cardAction =  <Card>{ value: Cardvalue.ACE, suite: CardSuite.SPADE }
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
            <Card>{ value: Cardvalue.ACE, suite: CardSuite.SPADE },
            <Card>{ value: Cardvalue.TWO, suite: CardSuite.HEART }
        ];
    });

    it('should throw an error if selected card is not in my hand', () => {
        expect(() => me.discard(<Card>{ value: Cardvalue.TWO, suite: CardSuite.SPADE }))
        .toThrow();
    });

    it('should remove selected card from my hand', () => {
        let cardToRemove = <Card>{ value: Cardvalue.TWO, suite: CardSuite.HEART }; 
        me.discard(cardToRemove);
        expect(me.hand.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suite.id == cardToRemove.suite.id))
            .toBeFalsy();
    });

    it('should  put selected card in the discard', () => {
        let cardToRemove = <Card>{ value: Cardvalue.TWO, suite: CardSuite.HEART }; 
        me.discard(cardToRemove);
        expect(board.discardStack.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suite.id == cardToRemove.suite.id))
            .toBeTruthy();
    });
});