import React, { Component } from 'react';
import '../styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import api from '../../../services/api';
import RaisedButton  from 'material-ui/RaisedButton';

export default class Final extends Component {
    state ={
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        error: ''
    }

    async componentDidMount(){
        try{
            const q1 = localStorage.getItem('question1');
            const q2 = localStorage.getItem('question2');
            const q3 = localStorage.getItem('question3');
            const q4 = localStorage.getItem('question4');

            let response = q1+","+q2+","+q3+","+q4; 

            await api.post("/answers", {
               "name":"Mundo Senai",
                "response": response
              });
           
        } catch (err){
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao enviar as respostas." });
        }

        setTimeout(() => {this.props.initStep()}, 5000);
    }



    continue() {
        
    }

  render() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <div className="container" >
                    {this.state.error ? <h1>Error ao enviar a resposta</h1> : <h1>Obrigado pela sua participação.</h1>}
                    <br />
                </ div>    
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
