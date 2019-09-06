import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import api from '../services/api';
import TextField from 'material-ui/TextField';
import RaisedButton  from 'material-ui/RaisedButton';

// import { Container } from './styles';

export default class Final extends Component {
    state ={
        question1: '',
        question2: '',
        question3: '',
        error: ''
    }

    async componentDidMount(){
        try{
            const question1 = localStorage.getItem('question1');
            const question2 = localStorage.getItem('question2');
            const question3 = localStorage.getItem('question3');

            await api.post("/answers", {
                "response1": question1,
                "response2": question2,
                "response3": question3
              });
           
        } catch (err){
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao recuperar as respostas." });
        }
    }

    continue = e => {
        e.preventDefault();
        this.props.initStep();
    }

  render() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Final" />
                    {this.state.error ? <h1>Error ao Enviar solicitação</h1> : <h1>Enviado com sucesso!</h1>}
                    <RaisedButton 
                        label="Recomeçar"
                        primary={true}
                        onClick={this.continue}
                    />
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
