import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from '@material-ui/core/Paper';
import RaisedButton  from 'material-ui/RaisedButton';
import { saveStorage } from '../services/store';

// import { Container } from './styles';

export default class Question1 extends Component {
    continue = (value) => {
        saveStorage('question1',value);
        this.props.nextStep();
    }

  render() {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <Paper>
                    <RaisedButton 
                        label="EJA"
                        primary={true}
                        onClick={(value) => this.continue("EJA", value)}                   
                    />
                    <RaisedButton 
                        label="Maker"
                        primary={true}
                        onClick={(value) => this.continue("MAKER", value)}                       
                    />
                </Paper>    
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
