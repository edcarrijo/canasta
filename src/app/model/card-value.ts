export class CardValue
{
    public label: string;
    public importance: number;
    public styleClass: string;

    protected constructor() { }

    public static JOKER = <CardValue> { label: 'JOKER', importance: 0, styleClass: 'card-joker' };
    public static ACE = <CardValue> { label:  'A', importance: 1, styleClass: 'card-ace' };
    public static TWO = <CardValue> { label: '2', importance: 2, styleClass: 'card-two' };
    public static THREE = <CardValue> { label: '3', importance: 3, styleClass: 'card-three' };
    public static FOUR = <CardValue> { label: '4', importance: 4, styleClass: 'card-four' };
    public static FIVE = <CardValue> { label: '5', importance: 5, styleClass: 'card-five' };
    public static SIX = <CardValue> { label: '6', importance: 6, styleClass: 'card-six' };
    public static SEVEN = <CardValue> { label: '7', importance: 7, styleClass: 'card-seven' };
    public static EIGHT = <CardValue> { label: '8', importance: 8, styleClass: 'card-eight' };
    public static NINE = <CardValue> { label: '9', importance: 9, styleClass: 'card-nine' };
    public static TEN = <CardValue> { label: '10', importance: 10, styleClass: 'card-ten' };
    public static JACK = <CardValue> { label: 'J', importance: 11, styleClass: 'card-jack' };
    public static QUEEN = <CardValue> { label: 'Q', importance: 12, styleClass: 'card-queen' };
    public static KING = <CardValue> { label: 'K', importance: 13, styleClass: 'card-king' };

    static getAll():CardValue[]{
        return [
            this.JOKER, this.ACE, this.TWO, this.THREE, this.FOUR, this.FIVE, this.SIX,
            this.SEVEN, this.EIGHT, this.NINE, this.TEN, this.JACK, this.QUEEN, this.KING
        ];
    }
}