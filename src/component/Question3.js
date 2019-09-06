import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton  from 'material-ui/RaisedButton';
import { saveStorage } from '../services/store';

// import { Container } from './styles';

export default class Question3 extends Component {
    continue = (value) => {
        saveStorage('question3',value);
        this.props.nextStep();
    }

  render() {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Pergunta 3" />
                    <RaisedButton 
                        label="Triste"
                        primary={true}
                        onClick={(value) => this.continue("Triste", value)}                   
                    />
                    <RaisedButton 
                        label="Medio"
                        primary={true}
                        onClick={(value) => this.continue("Medio", value)}                       
                    />
                    <RaisedButton 
                        label="Feliz"
                        primary={true}
                        onClick={(value) => this.continue("Feliz", value)}                   
                    />
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
