import React from "react";
import Square from "./Square";

interface GameProps {
    gameState:GameState;
    handler:(pos:number)=>void;
}

const Game: React.FC<GameProps> = ({
    gameState,
    handler,
}) => {
    return <div className="grid">
        <Square state={gameState} pos={0} handler={handler} />
        <Square state={gameState} pos={1} handler={handler} />
        <Square state={gameState} pos={2} handler={handler} />
        <Square state={gameState} pos={3} handler={handler} />
        <Square state={gameState} pos={4} handler={handler} />
        <Square state={gameState} pos={5} handler={handler} />
        <Square state={gameState} pos={6} handler={handler} />
        <Square state={gameState} pos={7} handler={handler} />
        <Square state={gameState} pos={8} handler={handler} />
    </div>
}

export default Game;