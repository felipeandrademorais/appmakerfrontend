import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { saveStorage } from '../../services/store';
import api from '../../services/api'; 
import Loading from '../../assets/spinner-solid.svg';
import Logo from '../../assets/logo_fiesc_branco.png';
import './styles.css';

export default class login extends Component {

  state = {
    email: "",
    password: "",
    error: '',
    loading: false
  }
 
  handleSubmit = async e =>{
    e.preventDefault();
    try{
      this.setState({ loading: true });
      const response = await api.post("/session", this.state);
      saveStorage('@token', response.data.token);
    }catch(err){
      console.log(err);
    } finally {
      this.props.history.push("/dashboard");
      this.setState({loading: false});
    } 
  }

  render() {
    return (
      <div className="content">
        
        <div className="login-container">
        <img src={Logo} alt="logo" />
          <div className="after-logo">
            <div className="left-container">
              
              <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <input type="email" placeholder="Digite seu E-mail" onChange={(e) => this.setState({email: e.target.value})}/>
                <input type="password" placeholder="Digite sua senha" onChange={(e) => this.setState({password: e.target.value})}/>
                <button type="submit">{this.state.loading ? <img className="loading" src={Loading} alt="Loading"/> : 'Logar'}</button>
              </form>
            </div>
            <div className="rigth-container">
                <h3>Acesso as perguntas</h3>
                <button><Link to="/questions" className="link-button">Questões</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
