import React, { Component } from 'react';

import Header from '../../../component/Header';
import api from '../../../services/api';
import Chart from '../../../component/chart';

import './styles.css';

export default class senai extends Component {

  state = {
    data: [],
    dataInfo: {},
    page: 1,
    param: 'Mundo Senai'
  }

 componentDidMount(){
    this.loadQuestions();
 }

  loadQuestions = async (page = 1) => {

    try{

      const param = this.state.param;
      const response = await api.get(`/answers?page=${page}`, { params: { filter: param }});
      const { docs, ...dataInfo } = response.data;
      this.setState({ data: docs, dataInfo, page});
      
    }catch(err){
      console.log("Um erro foi encontrado:" + err);
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
                <div className="action">
                  <button onClick={this.prevPage}>Anterior</button>
                  <span>Página: {this.state.page}</span>
                  <button onClick={this.nextPage}>Próximo</button>
              </div>
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
