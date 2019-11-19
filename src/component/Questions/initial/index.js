import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';
import Button  from '@material-ui/core/Button';

export default class Initial extends Component {
    continue = () => {
        this.props.nextStep();
    }

  render() {

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <div className="container" >
                    <div className="containerText">
                        <h1>Que tal nos dar a sua opinião?</h1>
                    </div>
                    
                    <div className="buttonFlat">
                        <Button
                            className="botao" 
                            style={{height: 100, width: 200 }}
                            primary={true}
                            onClick={() => this.continue()}               
                        >
                            <h1>Começar</h1>
                        </Button>
                    </ div>    
                </ div>
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
