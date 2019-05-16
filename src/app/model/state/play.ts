import { Player } from './player';
import { Table } from './table';


export class Play{
    public me: Player;
    public partner: Player;
    public opponent1: Player;
    public opponent2: Player;
    public table: Table;

    constructor(){

    }

    initialize(numberOfJokers: number, numberOfPlayers: number){
        this.table.initializeDeck(numberOfJokers, numberOfPlayers);
        this.me.isActive = true;
        this.opponent1.isActive = true;
        if(numberOfPlayers == 4){
            this.partner.isActive = true;
            this.opponent2.isActive = true;
        }
    }
}