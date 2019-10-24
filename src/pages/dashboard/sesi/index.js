import React, { Component } from 'react';

import Header from '../../../component/Header';
import api from '../../../services/api';
import Chart from '../../../component/chart/sesi';

import './styles.css';

export default class sesi extends Component {

  state = {
    data: [],
    dataInfo: {},
    page: 1,
    dataChart: []
  }

  componentDidMount(){
    this.loadQuestions();
 }

 loadQuestions = async (page = 1) => {

  try {

    const response = await api.get(`/table?page=${page}`);
    const { docs, ...dataInfo } = response.data;
    this.setState({ data: docs, dataInfo, page});

  } catch(err) {
    console.log(err);
  }
}

 prevPage = () => {
  const { page, dataInfo } = this.state;

  if(page === 1) return;

  const pageNumber = page -1;

  this.loadQuestions(pageNumber);

 };

 nextPage = () => {
   const { page, dataInfo } = this.state;

   if(page === dataInfo.pages) return;

   const pageNumber = page + 1;

   this.loadQuestions(pageNumber);
 }
  

  render() {
    return (
      <>
      <Header />
        <div className="sesi-container">
          <h1>Sesi</h1>
          <div className="content-sesi-container">
            <div className="table-area">
              <h3>Total de Votações: {this.state.dataInfo.total}</h3>
                <table>
                  <thead>
                    <tr><th>Evento</th><th>Voto</th><th>Data</th></tr>
                  </thead>
                  <tbody>
                    {this.state.data.map(r => (
                       <tr key={r._id}><td>{r.response2}</td><td>{r.response3}</td><td>{r.createdAt}</td></tr>
                    ))}
                  </tbody>
                </table>
              <div className="action">
                <button onClick={this.prevPage}>Anterior</button>
                <span>Página: {this.state.page}</span>
                <button onClick={this.nextPage}>Próximo</button>
              </div>

            </div>
            <div className="sesi-chart">
              <h3>Gráfico de Desenpenho</h3>
              <Chart dataChart={this.state.dataChart}/>
            </div>
          </div> 
        </div>
        
      </>
    );
  }
}
