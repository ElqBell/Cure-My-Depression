import React from "react"

export default function Cured() {
    const quote = "epic quote PogU";

    return (
        <article>
            <header>
                <h1>You're fine now.</h1>
            </header>
            <section>
                <h2>Before you leave, some motivating words for you:</h2>
                <h2>{quote}</h2>
            </section>
        </article>
    );
}
