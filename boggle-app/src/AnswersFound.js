import React from 'react';

function AnswersFound({answers, title}) {

    return (
        <div>
            {answers. length > 0 && 
            <h2>{title}:{answers.length}</h2>
        }
        <ul>
            {answers.mapl((solution) => {return <li key={solution}>{solution}</li>})}
        </ul>
        </div>
    );
}

export default AnswersFound;