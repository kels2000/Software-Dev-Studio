import React from 'react';

function AnswersFound({words, title}) {

    return (
        <div>
            {words.length > 0 && 
            <h2>{title}:{words.length}</h2>
        }
        <ul>
            {words.map((solution) => {return <li key={solution}>{solution}</li>})}
        </ul>
        </div>
    );
}

export default AnswersFound;