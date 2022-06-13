import React from 'react';

function SimpsonsQuote({simpsons}) {
    return (
        simpsons && (<div>
            <div>Name:{simpsons.character}</div>
            <img src={simpsons.image} alt={simpsons.character} />
            <div>Direction: {simpsons.characterDirection}</div>
            <div>Quote:{simpsons.quote}</div>
        </div>)
    )
}

export default SimpsonsQuote;