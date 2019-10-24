import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class chart extends Component {

  state = {
    data: [],
    dataChart: [],
    param: 'Mundo Senai'
  }

 componentDidMount(){
    this.loadQuestions();
 }

 loadQuestions = async () => {
    try{
      const param = this.state.param;
      const response = await api.get('/answers', { params: { filter: param }});
      this.setState({ data: response.data});
    }catch(err){
      console.log(err);
    }finally{
      this.loadChart();
    }
  }

  loadChart() {
    const data = this.state.data;
    let column = [0,0,0,0];

    data.map(d => {
      d.response = d.response.split(',');

      for(let i=0; i < d.response.length; i++ ){
        if(d.response[i] === '10'){
          column[0] += 1;
        }else if(d.response[i] === '8'){
          column[1] += 1;
        }else if(d.response[i] === '6'){
          column[2] += 1;
        }else if(d.response[i] === '4'){
          column[3] += 1;
        }
      }
    });

    console.log(column);
    this.setState({dataChart: column });
  }

  render() {
    return (
      <div className="chart-container">
          <>
            <div className="bar" id="bar1" style={{ height: this.state.dataChart[0]*this.state.data.length }}><span>{`${this.state.dataChart[0]}`}</span></div>
            <div className="bar" id="bar2" style={{ height: this.state.dataChart[1]*this.state.data.length }}><span>{`${this.state.dataChart[1]}`}</span></div>
            <div className="bar" id="bar3" style={{ height: this.state.dataChart[2]*this.state.data.length }}><span>{`${this.state.dataChart[2]}`}</span></div>
            <div className="bar" id="bar4" style={{ height: this.state.dataChart[3]*this.state.data.length }}><span>{`${this.state.dataChart[3]}`}</span></div>
          </>
      </div>
        
     
    );
  }
}
