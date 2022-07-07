import React, {useEffect} from 'react';
import './App.css';
import Game from "./components/Game";
import useTicTacToe from "./hooks/useTicTacToe";

function App() {
    const [gameState, handler, winner, resetGame] = useTicTacToe();

    useEffect(() => {
        if (winner !== undefined) {
            console.log("winner is", winner);
        }
    }, [winner]);

    return <div className="container">
        <Game
            gameState={gameState}
            handler={handler}
        />
        <button onClick={resetGame}>Reset game</button>
    </div>
}

export default App;
