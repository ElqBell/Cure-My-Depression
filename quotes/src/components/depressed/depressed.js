import React from "react"
import SadWords from "../sadwords/sad-words";

export default function Depressed({ setIsCured }) {
    return (
        <main>
            <article>   
                <header>
                    <h1>Get rid of your</h1>
                    <SadWords/>
                </header>
                <section>
                    <button type="button" onClick={() => setIsCured(true)}>CURE ME</button>
                </section>
            </article>
        </main>
    );
}
