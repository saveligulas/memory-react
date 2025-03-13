// types.ts
// Define our core type definitions

export interface Card {
    id: number;
    symbol: string;
    flipped: boolean;
    matched: boolean;
}

export interface GameState {
    cards: Card[];
    flippedCards: Card[];
    turns: number;
    matchedPairs: number;
    totalPairs: number;
    gameOver: boolean;
}