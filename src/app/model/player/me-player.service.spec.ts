import { MePlayerService } from "./me-player.service";
import { GameService } from '../game.service';
import { Card } from '../card';
import { CardValue } from '../card-value';
import { CardSuit } from '../card-suit';
import { StateService } from '../state/state.service';


describe('MePlayer draw a card', () => {
    let me: MePlayerService;
    let cardAction =  <Card>{ value: CardValue.ACE, suit: CardSuit.SPADE }
    let initialMaindDeckCount: number;
    let state: StateService;

    beforeEach(() => {
        state = new StateService();
        let game = new GameService(state.board.myGame);
        me = new MePlayerService(game, state.board.me, state.board);
        initialMaindDeckCount = state.board.maindDeckCount;
        me.drawCard(cardAction);
    });

    it('put card in my hand', () => {
        expect(state.board.me.hand[0]).toBe(cardAction);
    });

    it('remove one card from main deck', () => {
        expect(state.board.maindDeckCount).toBe(initialMaindDeckCount-1);
    });

});

describe('MePlayer discard a card', () => {
    let me: MePlayerService;
    let state: StateService;
     
    beforeEach(() => {
        
        state = new StateService();
        let game = new GameService(state.board.myGame);
        me = new MePlayerService(game, state.board.me, state.board);

        state.board.me.hand = [
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
        expect(state.board.me.hand.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suit.id == cardToRemove.suit.id))
            .toBeFalsy();
    });

    it('should  put selected card in the discard', () => {
        let cardToRemove = <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }; 
        me.discard(cardToRemove);
        expect(state.board.discardStack.some(card => card.value.importance == cardToRemove.value.importance 
            && card.suit.id == cardToRemove.suit.id))
            .toBeTruthy();
    });
});