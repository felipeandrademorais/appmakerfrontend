import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton  from 'material-ui/RaisedButton';
import { saveStorage } from '../services/store';

// import { Container } from './styles';

export default class Question2 extends Component {
    continue = (value) => {
        saveStorage('question2',value);
        this.props.nextStep();
    }

  render() {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Pergunta 2" />
                    <RaisedButton 
                        label="Oficina 1"
                        primary={true}
                        onClick={(value) => this.continue("Oficina 1", value)}                   
                    />
                    <RaisedButton 
                        label="Oficina 2"
                        primary={true}
                        onClick={(value) => this.continue("Oficina 2", value)}                       
                    />
                    <RaisedButton 
                        label="Oficina 3"
                        primary={true}
                        onClick={(value) => this.continue("Oficina 3", value)}                   
                    />
                    <RaisedButton 
                        label="Oficina 4"
                        primary={true}
                        onClick={(value) => this.continue("Oficina 4", value)}                       
                    />
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
