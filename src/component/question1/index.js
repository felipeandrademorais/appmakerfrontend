import React, { Component } from 'react';
import '../styles.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton  from 'material-ui/RaisedButton';
import { saveStorage } from '../../services/store';

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
                <div className="container" >
                    <div className="containerText">
                        <h1>Que tal contribuir com a sua opinião?</h1>
                    </div>
                    
                    <div className="containerButton">
                        <RaisedButton
                            className="botao"
                            style={{height: 120, width: 120}} 
                            label="EJA"
                            primary={true}
                            onClick={(value) => this.continue("EJA", value)}              
                        />
                        <RaisedButton 
                            style={{height: 120, width: 120}}
                            className="botao"
                            label="Maker"
                            primary={true}
                            onClick={(value) => this.continue("MAKER", value)}                       
                        />
                    </div>
                </div>  
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
