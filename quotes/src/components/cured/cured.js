import React from "react"
import quotes from "../../../static/quotes";
import "../../style/cured-style.css";

export default function Cured() {
    const quote = quotes[Math.floor((Math.random() * quotes.length))];

    return (
        <article className="cured-article" >
            <header className="cured-article__header" >
                <h1 className="cured-article__header__title">You'll be fine now.</h1>
            </header>
            <section className="cured-article__section" >
                <h2 className="cured-article__section__title" >Before you leave, <br/> some words from fellow human beings for you:</h2>
                <div className="cured-article__section__quote flicker-in-3000">
                    <h2 className="cured-article__section__quote__text" >"{quote.quoteText}"</h2>
                    <h2 className="cured-article__section__quote__author" >
                        {
                            quote.quoteAuthor === "" ?
                            null :
                            "-" + quote.quoteAuthor
                        }
                    </h2>
                </div>
            </section>
        </article>
    );
}
