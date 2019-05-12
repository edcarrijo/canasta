export class CardValue
{
    public label: string;
    public rank: number;
    public styleClass: string;

    protected constructor() { }

    public static JOKER = <CardValue> { label: 'JOKER', rank: 0, styleClass: 'card-joker' };
    public static ACE = <CardValue> { label:  'A', rank: 1, styleClass: 'card-ace' };
    public static TWO = <CardValue> { label: '2', rank: 2, styleClass: 'card-two' };
    public static THREE = <CardValue> { label: '3', rank: 3, styleClass: 'card-three' };
    public static FOUR = <CardValue> { label: '4', rank: 4, styleClass: 'card-four' };
    public static FIVE = <CardValue> { label: '5', rank: 5, styleClass: 'card-five' };
    public static SIX = <CardValue> { label: '6', rank: 6, styleClass: 'card-six' };
    public static SEVEN = <CardValue> { label: '7', rank: 7, styleClass: 'card-seven' };
    public static EIGHT = <CardValue> { label: '8', rank: 8, styleClass: 'card-eight' };
    public static NINE = <CardValue> { label: '9', rank: 9, styleClass: 'card-nine' };
    public static TEN = <CardValue> { label: '10', rank: 10, styleClass: 'card-ten' };
    public static JACK = <CardValue> { label: 'J', rank: 11, styleClass: 'card-jack' };
    public static QUEEN = <CardValue> { label: 'Q', rank: 12, styleClass: 'card-queen' };
    public static KING = <CardValue> { label: 'K', rank: 13, styleClass: 'card-king' };

    static getAll():CardValue[]{
        return [
            this.JOKER, this.ACE, this.TWO, this.THREE, this.FOUR, this.FIVE, this.SIX,
            this.SEVEN, this.EIGHT, this.NINE, this.TEN, this.JACK, this.QUEEN, this.KING
        ];
    }
}