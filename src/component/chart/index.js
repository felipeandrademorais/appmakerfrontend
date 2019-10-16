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
      column[0] += parseInt(d.response[0]);
      column[1] += parseInt(d.response[1]);
      column[2] += parseInt(d.response[2]);
      column[3] += parseInt(d.response[3]);
    });

    console.log(column);
    this.setState({dataChart: column });
  }

  render() {
    return (
      <div className="chart-container">
          <>
            <div className="bar" id="bar1" style={{ height: this.state.dataChart[0]*4 }}><span>{`${this.state.dataChart[0]/this.state.data.length}%`}</span></div>
            <div className="bar" id="bar2" style={{ height: this.state.dataChart[1]*4 }}><span>{`${this.state.dataChart[1]/this.state.data.length}%`}</span></div>
            <div className="bar" id="bar3" style={{ height: this.state.dataChart[2]*4 }}><span>{`${this.state.dataChart[2]/this.state.data.length}%`}</span></div>
            <div className="bar" id="bar4" style={{ height: this.state.dataChart[3]*4 }}><span>{`${this.state.dataChart[3]/this.state.data.length}%`}</span></div>
          </>
      </div>
        
     
    );
  }
}
