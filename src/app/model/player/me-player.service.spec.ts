import { MePlayerService } from "./me-player.service";
import { GameService } from '../game.service';
import { Card } from '../card';
import { CardValue } from '../card-value';
import { CardSuit } from '../card-suit';
import { StateService } from '../state/state.service';
import { TableService } from '../table.service';


describe('MePlayer draw a card', () => {
    let meService: MePlayerService;
    let cardAction =  <Card>{ value: CardValue.ACE, suit: CardSuit.SPADE }
    let initialMaindDeckCount: number;
    let state: StateService;
    let tableService: TableService;

    beforeEach(() => {
        state = new StateService();
        let game = state.createMyGame();
        let gameService = new GameService(game);
        tableService = new TableService(state);
        let me = state.createMePlayer();
        
        meService = new MePlayerService(tableService, gameService, me);
        state.play.table.initializeDeck(4, 4);
        initialMaindDeckCount = state.play.table.maindDeckCount;
        meService.drawCard(cardAction);
    });

    it('put card in my hand', () => {
        expect(state.play.me.hand[0]).toBe(cardAction);
    });

    it('remove one card from main deck', () => {
        expect(state.play.table.maindDeckCount).toBe(initialMaindDeckCount-1);
    });

});

describe('MePlayer discard a card', () => {
    let meService: MePlayerService;
    let state: StateService;
     
    beforeEach(() => {
        
        state = new StateService();
        let game = state.createMyGame();
        let gameService = new GameService(game);
        let tableService = new TableService(state);
        let me = state.createMePlayer();
        meService = new MePlayerService(tableService, gameService, me);

        me.hand = [
            <Card>{ value: CardValue.ACE, suit: CardSuit.SPADE },
            <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }
        ];
    });

    it('should throw an error if selected card is not in my hand', () => {
        expect(() => meService.discard(<Card>{ value: CardValue.TWO, suit: CardSuit.SPADE }))
        .toThrow();
    });

    it('should remove selected card from my hand', () => {
        let cardToRemove = <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }; 
        meService.discard(cardToRemove);
        expect(state.play.me.hand.some(card => card.value.rank == cardToRemove.value.rank 
            && card.suit.id == cardToRemove.suit.id))
            .toBeFalsy();
    });

    it('should  put selected card in the discard', () => {
        let cardToRemove = <Card>{ value: CardValue.TWO, suit: CardSuit.HEART }; 
        meService.discard(cardToRemove);
        expect(state.play.table.discardPile.some(card => card.value.rank == cardToRemove.value.rank 
            && card.suit.id == cardToRemove.suit.id))
            .toBeTruthy();
    });
});