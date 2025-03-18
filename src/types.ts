let cardIdCounter: number = 0;

function getCardId(): number {
    return cardIdCounter++;
}

export class Card {
    public id: number;
    public value: string;

    constructor(value: string) {
        this.id = getCardId();
        this.value = value;
    }
}

class Game {
    public pairs: number;
    public cards: Card[];

    constructor(cards: Card[]) {
        this.pairs = cards.length / 2;
        this.cards = cards;
    }
}