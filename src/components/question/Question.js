//import React from 'react';
import React ,{Fragment} from 'react';
import './Question.css';

const Question = (props) => {
    return (
        <Fragment>
        <section>
        <div>
            <span className="mdi mdi-cube-outline Cube"></span>
        </div>
        <h2>QUIZ APP</h2>
        <h1>{props.question}</h1>
        </section>
        </Fragment>
    
    
    );
}

export default Question;