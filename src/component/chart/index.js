import React, { Component } from 'react';
import './styles.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import api from '../../services/api';

export default class Chart extends Component {
  state = {
    data: ''
  }

  async componentDidMount(){
    const response = await api.get('/makerof1');
    this.setState({ data: [response.data] });
  }

  render() {
    return (
      <BarChart width={730} height={250} data={this.state.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Feliz" fill="#3498db" />
        <Bar dataKey="Medio" fill="#2ecc71" />
        <Bar dataKey="Triste" fill="#f1c40f" />
      </BarChart>
    );
  }
}
