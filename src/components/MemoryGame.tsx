import {useState} from "react";
import MemoryCard from "./MemoryCard";
import {Card} from "../types";

interface GameProps {
    cards: Card[]; // Accept dynamic array of cards as a prop
}

function Game({ cards }: GameProps) {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);
    const [isFlipping, setIsFlipping] = useState<boolean>(false);

    const handleCardClick = (id: number, value: string) => {
        if (flippedCards.includes(id) || matchedCards.includes(id) || isFlipping) {
            return;
        }

        const newFlippedCards = [...flippedCards, id];
        setIsFlipping(true);

        if (newFlippedCards.length === 2) {
            const firstCard = cards.find((c) => c.id === newFlippedCards[0]);
            const secondCard = cards.find((c) => c.id === newFlippedCards[1]);

            const firstCardNum = newFlippedCards[0];
            const secondCardNum = newFlippedCards[1];

            console.log(`${firstCardNum} is ${secondCardNum}`);

            if (firstCard.value === secondCard.value) {
                setMatchedCards([...matchedCards, ...newFlippedCards]);
                setFlippedCards([]);
                setIsFlipping(false);
            } else {
                setFlippedCards(newFlippedCards);
                setTimeout(() => {
                    setFlippedCards([]);
                    setIsFlipping(false);
                }, 1533)
            }
        } else {
            setFlippedCards(newFlippedCards);
            setIsFlipping(false);
        }
    }


    return (
        <>
            {cards.map((card) => (
                <MemoryCard
                    key={card.id}
                    id={card.id}
                    value={card.value}
                    isFlipped={flippedCards.includes(card.id)}
                    isMatched={matchedCards.includes(card.id)}
                    onClick={() => handleCardClick(card.id, card.value)}
                />
            ))}
        </>
    );
}

export default Game;