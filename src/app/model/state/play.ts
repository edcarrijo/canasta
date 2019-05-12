import { Player } from './player';
import { Table } from './table';


export class Play{
    public me: Player;
    public partner: Player;
    public opponent1: Player;
    public opponent2: Player;
    public table: Table;

    constructor(){
        this.me = new Player();
        this.partner = new Player();
        this.opponent1 = new Player();
        this.opponent2 = new Player();
        this.table = new Table();
    }
}