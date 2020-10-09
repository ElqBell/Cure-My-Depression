import React from "react"
import SadWords from "../sadwords/sad-words";
import "../../style/depressed-style.css";

export default function Depressed({ setIsCured }) {
    return (
        <article className="depressed-article" >   
            <header className="depressed-article__header" >
                <h1 className="depressed-article__header__title" >Get rid of your</h1>
                <SadWords/>
            </header>
            <section className="depressed-article__section">
                <button className="depressed-article__section__button flicker-in-1500" type="button" onClick={() => setIsCured(true)}>CURE ME</button>
            </section>
        </article>
    );
}
