import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import GameStats from './components/GameStats';
import { Card, GameState } from './types';
import { generateCards } from './utils/gameUtils';
import './styles/MemoryGame.css';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    flippedCards: [],
    turns: 0,
    matchedPairs: 0,
    totalPairs: 6, // Default to 6 pairs
    gameOver: false
  });

  // Initialize the game on first render
  useEffect(() => {
    startGame(gameState.totalPairs);
  }, []);

  const startGame = (pairs: number) => {
    const cards = generateCards(pairs);
    setGameState({
      cards,
      flippedCards: [],
      turns: 0,
      matchedPairs: 0,
      totalPairs: pairs,
      gameOver: false
    });
  };

  const flipCard = (selectedCard: Card) => {
    // If already two cards are flipped, don't allow another flip
    if (gameState.flippedCards.length === 2) return;

    // Don't allow flipping already matched cards
    if (selectedCard.matched) return;

    // Don't allow flipping the same card twice
    if (gameState.flippedCards.some(card => card.id === selectedCard.id)) return;

    // Flip the selected card
    const updatedCards = gameState.cards.map(card =>
        card.id === selectedCard.id ? { ...card, flipped: true } : card
    );

    // Add card to flipped cards array
    const updatedFlippedCards = [...gameState.flippedCards, selectedCard];

    // Update the game state with the flipped card
    setGameState({
      ...gameState,
      cards: updatedCards,
      flippedCards: updatedFlippedCards,
    });

    // If this is the second card flipped, check for a match
    if (updatedFlippedCards.length === 2) {
      const [firstCard, secondCard] = updatedFlippedCards;

      // Increment turn counter
      const updatedTurns = gameState.turns + 1;

      // Check if cards match
      if (firstCard.symbol === secondCard.symbol) {
        // Cards match - mark them as matched
        const cardsWithMatches = updatedCards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, matched: true }
                : card
        );

        const updatedMatchedPairs = gameState.matchedPairs + 1;
        const gameOver = updatedMatchedPairs === gameState.totalPairs;

        // Update the game state
        setTimeout(() => {
          setGameState({
            ...gameState,
            cards: cardsWithMatches,
            flippedCards: [],
            turns: updatedTurns,
            matchedPairs: updatedMatchedPairs,
            gameOver
          });
        }, 800); // Slightly longer delay to see the match and animation
      } else {
        // Cards don't match - flip them back
        setTimeout(() => {
          const resetFlippedCards = updatedCards.map(card =>
              (card.id === firstCard.id || card.id === secondCard.id) && !card.matched
                  ? { ...card, flipped: false }
                  : card
          );

          setGameState({
            ...gameState,
            cards: resetFlippedCards,
            flippedCards: [],
            turns: updatedTurns
          });
        }, 1200); // Longer delay before flipping cards back
      }
    }
  };

  const resetGame = () => {
    startGame(gameState.totalPairs);
  };

  return (
      <div className="classic-mac p-4">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Hieroglyphic Memory Game</div>
          </div>
          <div className="window-body p-4">
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
              <GameControls
                  onStart={startGame}
                  onReset={resetGame}
                  defaultPairs={gameState.totalPairs}
              />
              <GameStats
                  turns={gameState.turns}
                  matchedPairs={gameState.matchedPairs}
                  totalPairs={gameState.totalPairs}
              />
            </div>

            {gameState.gameOver && (
                <div className="game-over-message">
                  Game Over! You completed the game in {gameState.turns} turns.
                </div>
            )}
            <GameBoard
                cards={gameState.cards}
                onCardClick={flipCard}
            />
          </div>
        </div>
      </div>
  );
}

export default App;

