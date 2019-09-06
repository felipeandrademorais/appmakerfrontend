import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import '../styles.css';
import RaisedButton  from 'material-ui/RaisedButton';
import { saveStorage } from '../../services/store';

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
                <div className="container" >
                    <div className="containerText">
                        <h1>Que tal contribuir com a sua opinião?</h1>
                    </div>
                    
                    <div className="containerButton">
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}} 
                            label="Triste"
                            primary={true}
                            onClick={(value) => this.continue("Triste", value)}                   
                        />
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}} 
                            label="Medio"
                            primary={true}
                            onClick={(value) => this.continue("Medio", value)}                       
                        />
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}} 
                            label="Feliz"
                            primary={true}
                            onClick={(value) => this.continue("Feliz", value)}                   
                        />
                    </ div>    
                </ div>
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
