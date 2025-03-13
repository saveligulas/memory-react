import { Card } from '../types';

interface MemoryCardProps {
    card: Card;
    onClick: () => void;
}

function MemoryCard({ card, onClick }: MemoryCardProps) {
    return (
        <div
            className={`memory-card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
            onClick={() => !card.flipped && !card.matched && onClick()}
        >
            <div className="card-face card-back">
                <span>?</span>
            </div>
            <div className="card-face card-front">
                <span className="card-symbol">{card.symbol}</span>
            </div>
        </div>
    );
}

export default MemoryCard;