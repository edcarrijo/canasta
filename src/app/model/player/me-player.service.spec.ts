import { MePlayerService } from "./me-player.service";
import { BoardService } from '../board.service';
import { GameService } from '../game.service';
import { Card } from '../card';
import { CardValue } from '../card-value';
import { CardSuit } from '../card-suit';

describe('MePlayer draw a card', () => {
    let me: MePlayerService;
    let board: BoardService;
    let cardAction =  <Card>{ value: CardValue.ACE, suit: CardSuit.SPADE }
    let initialMaindDeckCount: number;

    beforeEach(() => {
        board = new BoardService();
        let game = new GameService();
        me = new MePlayerService(board, game);
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
    let me: MePlayerService;
    let board: BoardService;
     
    beforeEach(() => {
        board = new BoardService;
        let game = new GameService();
        me = new MePlayerService(board, game);
        me.hand = [
            <Card>{ value: CardValue.ACE, suit: CardSuit.SPADE },
            <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }
        ];
    });

    it('should throw an error if selected card is not in my hand', () => {
        expect(() => me.discard(<Card>{ value: CardValue.TWO, suit: CardSuit.SPADE }))
        .toThrow();
    });

    it('should remove selected card from my hand', () => {
        let cardToRemove = <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }; 
        me.discard(cardToRemove);
        expect(me.hand.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suit.id == cardToRemove.suit.id))
            .toBeFalsy();
    });

    it('should  put selected card in the discard', () => {
        let cardToRemove = <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }; 
        me.discard(cardToRemove);
        expect(board.discardStack.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suit.id == cardToRemove.suit.id))
            .toBeTruthy();
    });
});