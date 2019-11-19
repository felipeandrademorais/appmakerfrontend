/* eslint-disable default-case */
import React, { Component } from 'react';
import './styles.css';
import Initial from './initial';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Send from './send';

export default class QuestionForm extends Component {
state = {
    step: 1
}

nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

initStep = () =>{
    this.setState({
        step: 1
    });
}

  render() {
    const { step } = this.state;
    
    switch(step){
        case 1:
            return (
                <Initial
                    nextStep={this.nextStep}
                />
            )
        case 2:
            return (
                <Page1 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                />
            )
        case 3:
            return (
                <Page2 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    printState={this.printState}
                />
            )
        case 4:
            return (
                <Page3 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                />
            )
        case 5:
            return (
                <Page4 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                />
            )
        case 6: 
            return (
                <Send 
                    initStep={this.initStep}
                />
            )

    }

  }
}
