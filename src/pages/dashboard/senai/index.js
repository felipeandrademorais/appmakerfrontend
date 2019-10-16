import React, { Component } from 'react';

import Header from '../../../component/Header';
import api from '../../../services/api';
import Chart from '../../../component/chart';

import './styles.css';

export default class senai extends Component {

  state = {
    data: [],
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
    }
  }

  render() {
    return (
      <>
      <Header />
        <div className="senai-container">
          <h1>Mundo Senai</h1>
          <div className="content-senai-container">
            <div className="table-area">
              <h3>Total de Votações: {this.state.data.length}</h3>
                <table>
                  <thead>
                    <tr><th>Evento</th><th>Voto</th><th>Data</th></tr>
                  </thead>

                  <tbody>
                    {this.state.data.map(r => (
                      <tr key={r._id}><td>{r.name}</td><td>{r.response}</td><td>{r.createdAt}</td></tr>
                    ))}
                  </tbody>
                </table>
            </div>
            <div className="senai-chart">
              <h3>Gráfico de Desenpenho</h3>
              <Chart filter="Mundo Senai"/>
            </div>
          </div> 
        </div>
        
      </>
    );
  }
}
