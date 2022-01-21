import React, { useState } from 'react'
import Data from './Data'

const Main = () => {
    console.log(Data.length)

    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const paragraph = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        setText(Data.slice(0, amount));
    }

    return (
        <section className='sectionCenter'>
            <h3>tired of boring lorem ipsum?</h3>
            <form className='textForm' onSubmit={paragraph} >
                <label htmlFor='amount'>paragraphs:</label>
                <input type='number' id='amount' min='1' max='9' value={count} onChange={(e) => setCount(e.target.value)} />
                <button className='btn'>generate</button>
            </form>
            <article className='text'>
                {text.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    );
                })}               
            </article>
        </section>
    )
}

export default Main
