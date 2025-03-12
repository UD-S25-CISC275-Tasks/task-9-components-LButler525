import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [LVal, setL] = useState<number>(1);
    const [RVal, setR] = useState<number>(6);

    function rollL(): void {
        setL(d6());
    }
    function rollR(): void {
        setR(d6());
    }

    return (
        <div>
            <Button onClick={rollL}>Roll Left</Button>
            <Button onClick={rollR}>Roll Right</Button>
            <span data-testid="left-die">Left Die: {LVal}</span>
            <span data-testid="right-die">Right Die: {RVal}</span>
            {LVal === RVal && LVal === 1 && <span>You Lose</span>}
            {LVal === RVal && LVal !== 1 && <span>You Win</span>}
        </div>
    );
}
