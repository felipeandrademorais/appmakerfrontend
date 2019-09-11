import React, { Component } from 'react';
import './styles.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import api from '../../services/api';

export default class Chart extends Component {
  state = {
    data: []
  }

  async componentDidMount(){
    const prop = this.props.route;
    try{
      const response = await api.get(prop);
      this.setState({ data: [response.data] });
    } catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <div className="chart">
        <BarChart width={300} height={150} data={this.state.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Feliz" fill="#55efc4" />
          <Bar dataKey="Medio" fill="#ffeaa7" />
          <Bar dataKey="Triste" fill="#ff7675" />
        </BarChart>
      </div>
      
    );
  }
}
