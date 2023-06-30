import React, { FC, ReactElement } from 'react';

type SquareProps = {
    value: string | null,
    onSquareClick: Function
}

const Square: FC<SquareProps> = ({...SquareProps}): ReactElement => {
    return (
        <button className="square" onClick={() => SquareProps.onSquareClick()}>
            {SquareProps.value}
        </button>
    );
}

export default Square;