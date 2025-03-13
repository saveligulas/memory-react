import { useState } from 'react';

interface GameControlsProps {
    onStart: (pairs: number) => void;
    onReset: () => void;
    defaultPairs: number;
}

function GameControls({ onStart, onReset, defaultPairs }: GameControlsProps) {
    const [pairs, setPairs] = useState(defaultPairs);

    const handleStart = () => {
        onStart(pairs);
    };

    return (
        <div className="game-controls">
            <div className="flex items-center gap-2">
                <label className="text-sm font-bold">Pairs:</label>
                <input
                    type="number"
                    min="2"
                    max="15"
                    value={pairs}
                    onChange={(e) => setPairs(parseInt(e.target.value) || 2)}
                    className="w-16 px-2 py-1 border rounded text-center"
                />
            </div>
            <button
                onClick={handleStart}
                className="px-4 py-1"
            >
                Start Game
            </button>
            <button
                onClick={onReset}
                className="px-4 py-1"
            >
                Reset
            </button>
        </div>
    );
}

export default GameControls;