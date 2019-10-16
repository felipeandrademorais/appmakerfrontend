import React, { Component } from 'react';
import api from '../../services/api';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import './styles.css';
import { CSVLink} from "react-csv";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class administrations extends Component {

  state = {
    data: [],
    csv: ''
  }  

 async componentDidMount(){

    try{
           
      const response = await api.get('/gera');
      this.setState({ data: [response.data] });

      const csv = await api.get('/answers');
      this.setState({ csv: csv.data });

    } catch(err){
      console.log(err);
    }
  }


  render() {
    return (
      <div className="main-container">
         <AppBar position="absolute">
              <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Painel Administrativo
              </Typography>
            </Toolbar>
        </AppBar>
        <div className="chart-container">
          <BarChart width={780} height={540} data={this.state.data}>
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="MuitoFeliz" fill="#3ae374" />
            <Bar dataKey="Feliz" fill="#18dcff" />
            <Bar dataKey="Medio" fill="#fffa65" />
            <Bar dataKey="Triste" fill="#ffaf40" />
            <Bar dataKey="MuitoTriste" fill="#ff3838" />
          </BarChart>
        </div>
        <div>
          <CSVLink data={this.state.data}>Download dos dados</CSVLink>
        </div>
      </div>
    );
  }
}
