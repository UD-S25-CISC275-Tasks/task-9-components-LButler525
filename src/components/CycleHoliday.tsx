import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("❤️");

    function nextA(holi: string): void {
        if (holi === "🎆") {
            setHoliday("🎃");
        } else if (holi === "🎃") {
            setHoliday("🥂");
        } else if (holi === "🥂") {
            setHoliday("🍀");
        } else if (holi === "🍀") {
            setHoliday("❤️");
        } else if (holi === "❤️") {
            setHoliday("🎆");
        }
    }

    function nextY(holi: string): void {
        if (holi === "❤️") {
            setHoliday("🍀");
        } else if (holi === "🍀") {
            setHoliday("🎆");
        } else if (holi === "🎆") {
            setHoliday("🎃");
        } else if (holi === "🎃") {
            setHoliday("🥂");
        } else if (holi === "🥂") {
            setHoliday("❤️");
        }
    }

    return (
        <div>
            <Button
                onClick={() => {
                    nextA(holiday);
                }}
            >
                Cycle Holiday by Alphabet
            </Button>
            <Button
                onClick={() => {
                    nextY(holiday);
                }}
            >
                Cycle Holiday by Year
            </Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
