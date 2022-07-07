import {useCallback, useState} from "react";

function initGame(): GameState {
    return Array(9).fill(0);
}

function isGameOver(state: GameState): {won:boolean, winner:Winner} {
    // check horizontal lines
    if ([state[0], state[1], state[2]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[0], state[1], state[2]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    if ([state[3], state[4], state[5]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[3], state[4], state[5]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    if ([state[6], state[7], state[8]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[6], state[7], state[8]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    // check vertical lines
    if ([state[0], state[3], state[6]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[0], state[3], state[6]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    if ([state[1], state[4], state[7]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[1], state[4], state[7]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    if ([state[2], state[5], state[8]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[2], state[5], state[8]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    // check diagonals
    if ([state[0], state[4], state[8]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[0], state[4], state[8]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    if ([state[2], state[4], state[6]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
    if ([state[2], state[4], state[6]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
    // check full grid
    if (state.filter(v => v !== 0).length === 9) {
        return {won: true, winner: null};
    }
    return {won:false, winner:null};
}

type UseTicTacToeHook = [GameState, (pos:number)=>void, Winner|undefined, ()=>void];

export default function useTicTacToe(initialTurn:1|2 = 1): UseTicTacToeHook {
    const [gameState, setGameState] = useState<GameState>(initGame());
    const [turn, setTurn] = useState<1|2>(initialTurn); // 1 for X, 2 for O
    const [winner, setWinner] = useState<Winner>();

    const resetGame = useCallback(() => {
        setGameState(initGame())
        setWinner(undefined);
        setTurn(initialTurn);
    }, [initialTurn]);

    const handler = useCallback((pos:number) => {
        if (winner !== undefined) {
            return;
        }
        setGameState((currentState) => {
            // The user clicked on a cell that is not empty.
            if (currentState[pos] !== 0) {
                return currentState;
            }
            currentState[pos] = turn;
            const {won, winner} = isGameOver(currentState);
            if (won) {
                setWinner(winner);
            }
            setTurn(v => v === 1 ? 2 : 1);
            return currentState;
        });
    }, [turn, winner]);

    return [gameState, handler, winner, resetGame];
}