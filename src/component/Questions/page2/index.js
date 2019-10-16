import React, { Component } from 'react';
import '../styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton  from 'material-ui/RaisedButton';
import { saveStorage } from '../../../services/store';

export default class Question2 extends Component {
    continue = (value) => {
        saveStorage('question2',value);
        this.props.nextStep();
    }

  render() {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <div className="container" >
                    <div className="containerText">
                        <h1>Qual oficina você participou hoje?</h1>
                    </div>
                    
                    <div className="containerButton">
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}}
                            label="Oficina 1"
                            primary={true}
                            onClick={(value) => this.continue("Oficina 1", value)}                   
                        />
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}}
                            label="Oficina 2"
                            primary={true}
                            onClick={(value) => this.continue("Oficina 2", value)}                       
                        />
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}}
                            label="Oficina 3"
                            primary={true}
                            onClick={(value) => this.continue("Oficina 3", value)}                   
                        />
                        <RaisedButton
                            className="botao" 
                            style={{height: 120, width: 120}}
                            label="Oficina 4"
                            primary={true}
                            onClick={(value) => this.continue("Oficina 4", value)}                       
                        />
                    </ div>
                </ div>    
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
