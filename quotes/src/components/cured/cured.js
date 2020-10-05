import React from "react"
import quotes from "../../../static/quotes";

export default function Cured() {
    const quote = quotes[Math.floor((Math.random() * quotes.length))];

    console.log("quote: ", quote);
    return (
        <article>
            <header>
                <h1>You're fine now.</h1>
            </header>
            <section>
                <h2>Before you leave, some words from fellow human beings for you:</h2>
                <h2>{quote.quoteText}</h2>
                <h2>-{quote.quoteAuthor}</h2>
            </section>
        </article>
    );
}
