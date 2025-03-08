import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [started, setStarted] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setStarted(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setStarted(false);
    }

    function mull(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <button onClick={startQuiz} disabled={started || attempts === 0}>
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!started}>
                Stop Quiz
            </button>
            <button onClick={mull} disabled={started}>
                Mulligan
            </button>
            <span>Atempts left: {attempts}</span>
        </div>
    );
}
