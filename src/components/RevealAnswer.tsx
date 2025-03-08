import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [value, setValue] = useState<boolean>(false);
    function flipValue(): void {
        setValue(!value);
    }
    return (
        <div>
            <Button onClick={flipValue}> Reveal Answer</Button>
            {value && <div>42</div>}
        </div>
    );
}
