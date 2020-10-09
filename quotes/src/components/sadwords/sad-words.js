import React, { useState, useEffect } from "react"

export default function SadWords() {
    const words = ['Depression', 'Anxiety', 'Powerlessness', 'Sadness', 'Helplessness'];
    const [count, setCount] = useState(0);

    // on component mount start displaying words with a timeout and loop over the array
    useEffect(() => {
        const wordsTimeout = setTimeout(() => {
            if(count === words.length - 1) {
                setCount(0);
            } else {
                setCount(count + 1);
            }
        }, 3000);
        return () => { clearTimeout(wordsTimeout) };
    }, [count, words]);

    return <h1 className="depressed-article__header__sad-words" >{ words[count] }</h1>;
}
