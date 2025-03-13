interface GameStatsProps {
    turns: number;
    matchedPairs: number;
    totalPairs: number;
}

function GameStats({ turns, matchedPairs, totalPairs }: GameStatsProps) {
    return (
        <div className="game-stats flex gap-8 mb-4 p-2 border rounded bg-white">
            <div className="stat">
                <span className="font-bold">Turns:</span> {turns}
            </div>
            <div className="stat">
                <span className="font-bold">Matches:</span> {matchedPairs}/{totalPairs}
            </div>
        </div>
    );
}

export default GameStats;