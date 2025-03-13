import { Card } from '../types';
import MemoryCard from './MemoryCard';

interface GameBoardProps {
    cards: Card[];
    onCardClick: (card: Card) => void;
}

function GameBoard({ cards, onCardClick }: GameBoardProps) {
    // Determine grid columns based on number of cards
    const getGridClass = () => {
        const totalCards = cards.length;
        if (totalCards <= 8) return 'grid-cols-3';
        if (totalCards <= 16) return 'grid-cols-4';
        if (totalCards <= 24) return 'grid-cols-5';
        return 'grid-cols-6';
    };

    return (
        <div className={`card-grid ${getGridClass()}`}>
            {cards.map(card => (
                <MemoryCard
                    key={card.id}
                    card={card}
                    onClick={() => onCardClick(card)}
                />
            ))}
        </div>
    );
}

export default GameBoard;
