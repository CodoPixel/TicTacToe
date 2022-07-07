import type React from "react";
import {useCallback} from "react";

interface SquareProps {
    state:number[];
    pos:number;
    handler:(pos:number)=>void;
}

const Square: React.FC<SquareProps> = ({
    state,
    pos,
    handler,
}) => {
    const handleClick = useCallback(() => handler(pos), [handler]);
    return <button type="button" className="square" onClick={handleClick}>
        {state[pos] === 1 ? 'X' : (state[pos] === 2 ? 'O' : '')}
    </button>
};

export default Square;