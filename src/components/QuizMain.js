import React, {Component} from 'react';



import Question from './question/Question';
import Answer from './answer/Answer';


import './QuizMain.css';
import {Link} from 'react-router-dom';







export default class Quiz extends Component {


    // initiating the local state
    state = {
        quiestions: {
            1: 'Where is sagarmatha located?',
            2: 'What is the capital of nepal?',
            3: 'Which is the fist planet of solar system?',
            4: 'What is my first name?',
            5: 'Who is most richest person in nepal?'

        },
        answers: {
            1: {
                1: 'China',
                2: 'Nepal',
                3: 'India'
            },
            2: {
                1: 'Thimpu',
                2: 'New dheli',
                3: 'Berlin',
                4: 'None of above'
            },
            3: {
                1: 'Mercury',
                2: 'Mars',
                3: 'Saturn'
            },
            4:{
                1:'Saroj',
                2:'Raj',
                3:'Tiwari'
            },
            5:{
                1:'Saroj',
                2: 'Binod chaudhary',
                3:'Sakchham',
                4:'None of above'
            }
        },
        correctAnswers: {
            1: '2',
            2: '4',
            3: '1',
            4: '1',
            5: '2'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    


    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <div>
                            <span className="mdi mdi-cube-outline Cube"></span>
                               </div>
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you! </p>

                            
    

                         <div className="auth-c">
                         <Link to ="/" className="auth-b" id="login-b">PLAY AGAIN</Link>

                         </div>
             
                            


               
                        </div>



                    )
                }
            </div>


        );
    }
}

