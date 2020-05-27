import React from 'react';
import Score from '../Score/Score';

const Student = (props) => (
    <div class='students'>
        <h3>{props.name}</h3>
        <p>{props.bio}</p>

        {props.scores.map(score => (
            <Score
                date={score.date}
                score={score.score}
            />
        ))}
        <br></br>
    </div>
)

export default Student;