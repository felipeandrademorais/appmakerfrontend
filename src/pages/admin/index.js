import React, { Component } from 'react';
import Chart from '../../component/chart/';
import './styles.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class administrations extends Component {
  render() {
    return (
      <div>
         <AppBar position="absolute">
              <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Painel Administrativo
              </Typography>
            </Toolbar>
        </AppBar>
        <div className="chart-container">
          <Chart route="makerof1"/>
          <Chart route="makerof2"/>
          <Chart route="makerof3"/>
          <Chart route="makerof4"/>
        </div>
      </div>
    );
  }
}
