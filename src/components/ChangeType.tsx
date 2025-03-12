import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        if (value == "short_answer_question") {
            setValue("multiple_choice_question");
        } else {
            setValue("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {value === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
