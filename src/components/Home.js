import React ,{Fragment} from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>QUIZ-APP-HOME</title></Helmet>
    <div id="home">
        <section>
            <div style={{textAlign:'center'}}>
                <span className="mdi mdi-cube-outline Cube"></span>
            </div>
            <h1>QUIZ APP</h1>

            <div className="play-button-container">
                <ul>
                    <Link className="play-button" to="/components/QuizMain">PLAY</Link> 
                </ul>
            </div>
    
    <div className="auth-container">
        <Link to ="/login" className="auth-button" id="login-button">LOGIN</Link>
        <Link to ="/Register" className="auth-button" id="login-b">REGISTER</Link>
    </div>
        </section>
    
        </div>
    

    </Fragment>
        
    );

export default Home;