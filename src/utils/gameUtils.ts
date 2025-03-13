import { Card } from '../types';

// Curated selection of distinctive hieroglyphs
const hieroglyphs = [
    '𓀀', '𓁹', '𓃒', '𓃠', '𓃱', '𓄿', '𓅓', '𓅷', '𓆣', '𓆭',
    '𓇯', '𓈗', '𓉔', '𓊖', '𓊽', '𓋴', '𓌂', '𓍯', '𓎛', '𓏲',
    '𓀯', '𓁆', '𓂝', '𓃵', '𓅿', '𓆉', '𓆧', '𓇋', '𓉐', '𓊪'
];

export function generateCards(pairs: number): Card[] {
    // Get random hieroglyphs for the number of pairs
    const selectedSymbols = [...hieroglyphs]
        .sort(() => 0.5 - Math.random())
        .slice(0, pairs);

    // Create pairs of cards with these symbols
    const cards: Card[] = [];
    let id = 1;

    selectedSymbols.forEach(symbol => {
        // Create two cards with the same symbol
        cards.push({ id: id++, symbol, flipped: false, matched: false });
        cards.push({ id: id++, symbol, flipped: false, matched: false });
    });

    // Shuffle all cards
    return cards.sort(() => 0.5 - Math.random());
}