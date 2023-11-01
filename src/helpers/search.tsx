import { Fragment } from "react";

export function getHighlightedText(text: string, highlight: string) {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    if (highlight.length < 2) {
        return <>{text}</>;
    }

    return (
        <>
            {parts.map((part, i) => {
                if (part.toLowerCase() === highlight.toLowerCase()) {
                    return (
                        <span key={i} style={{ backgroundColor: "yellow" }}>
                            {part}
                        </span>
                    );
                }

                return <Fragment key={i}>{part}</Fragment>;
            })}
        </>
    );
}
