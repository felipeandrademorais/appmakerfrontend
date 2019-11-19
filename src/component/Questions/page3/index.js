import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles.css';
import Button  from '@material-ui/core/Button';
import { saveStorage } from '../../../services/store';
import { ReactComponent as Sad } from '../../../assets/frown-regular.svg';
import { ReactComponent as Normal } from '../../../assets/meh-regular.svg';
import { ReactComponent as Smile } from '../../../assets/smile-regular.svg';

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
                        <h1>O que achou da qualidade dos nossos protótipos?</h1>
                    </div>
                    
                    <div className="containerButton">
                        <Button
                            className="botao" 
                            style={{height: 120, width: 120 }}
                            primary={true}
                            onClick={(value) => this.continue(10, value)}               
                        >
                            <Smile style={{margin:10, width:90, color: "#55efc4"}} />
                        </Button>
                        <Button
                            className="botao" 
                            style={{height: 120, width: 120}} 
                            primary={true}
                            onClick={(value) => this.continue(6, value)}               
                        >
                            <Normal style={{margin:10, width:90, color: "#ffeaa7"}} />
                        </Button>
                        <Button
                            className="botao" 
                            style={{height: 120, width: 120}} 
                            primary={true}
                            onClick={(value) => this.continue(2, value)}               
                        >
                            <Sad style={{margin:10, width:90, color: "#ff7675"}} />
                        </Button>
                    </ div>    
                </ div>
            </React.Fragment>
        </MuiThemeProvider>    
    );
  }
}
