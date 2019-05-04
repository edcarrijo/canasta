
export class CardSuit{
    public id: string;
    public symbol: string;
    public styleClass: string;
    public imageFaces: ImageFace[]

    protected constructor(){ }

    public static DIAMOND = <CardSuit>{ 
        id: 'D',
        symbol: '♦',
        styleClass: 'diamond',
        imageFaces: [
            <ImageFace>{ value: 11, image: 'face-jack-diamond.png'},
            <ImageFace>{ value: 12, image: 'face-queen-diamond.png'},
            <ImageFace>{ value: 13, image: 'face-king-diamond.png'}
        ]
    }

    public static CLUB = <CardSuit>{ 
        id: 'C',
        symbol: '♣',
        styleClass: 'club',
        imageFaces: [
            <ImageFace>{ value: 11, image: 'face-jack-club.png'},
            <ImageFace>{ value: 12, image: 'face-queen-club.png'},
            <ImageFace>{ value: 13, image: 'face-king-club.png'}
        ]
    }

    public static HEART = <CardSuit>{ 
        id: 'H',
        symbol: '♥',
        styleClass: 'heart',
        imageFaces: [
            <ImageFace>{ value: 11, image: 'face-jack-heart.png'},
            <ImageFace>{ value: 12, image: 'face-queen-heart.png'},
            <ImageFace>{ value: 13, image: 'face-king-heart.png'}
        ]
    }

    public static SPADE = <CardSuit>{ 
        id: 'S',
        symbol: '♠',
        styleClass: 'spade',
        imageFaces: [
            <ImageFace>{ value: 11, image: 'face-jack-spade.png'},
            <ImageFace>{ value: 12, image: 'face-queen-spade.png'},
            <ImageFace>{ value: 13, image: 'face-king-spade.png'}
        ]
    }

    static getAll(): CardSuit[]{
        return [this.DIAMOND, this.CLUB, this.HEART, this.SPADE];
    }
}

export class ImageFace{
    public image: string;
    public value: number;
}