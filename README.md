# Tic Tac Toe with React

A Tic Tac Toe game with `React`, written with `TypeScript`.

## How does it work?

The logic is behind the hook `useTicTacToe`.
For the turns:

- `1` is for the turn of `X`
- `2` is for the turn of `O`

The grid is defined like an array of `1`, `2` or `0` (for empty cells). Each cell has a position from 0 to 8.

The hook can be used like so:

```typescript jsx
function App() {
    // gameState: (0|1|2)[]; (the grid itself)
    // handler: (pos:number) => void; (how to behave when the user clicks)
    // winner: {won:boolean, winner:'X'|'O'|null};
    // resetGame: () => void;
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
```

At each click the game checks whether the user has won by doing like this:

```typescript
// We combine the first three horizontal cells into one array,
// we filter this array in a way that if it is only made of 1 it will be of length 3 (so a line of three ones, three X's).
// If this is the case, then 'X' won.
if ([state[0], state[1], state[2]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
// Same, but if it's only twos, then 'O' won.
if ([state[0], state[1], state[2]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};

// For vertical lines, it's the same principle:
if ([state[0], state[3], state[6]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
if ([state[0], state[3], state[6]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};

// We test every combination one by one.
// Obviously it could be a diagonal, so it adds 2 more possibilites:
if ([state[0], state[4], state[8]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
if ([state[0], state[4], state[8]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
if ([state[2], state[4], state[6]].filter(v => v === 1).length === 3) return {won:true, winner:'X'};
if ([state[2], state[4], state[6]].filter(v => v === 2).length === 3) return {won:true, winner:'O'};
```

## Date

7th July 2022, 16:18, Paris.