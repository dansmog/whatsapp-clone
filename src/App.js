import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3 chatlist no-padding">
                <div className="header" style={{"padding": "10px 15px", "backgroundColor": "#eee"}}>
                  <div className="row">
                    <div className="col-xs-12 col-sm-2 col-md-2 pull-left">
                      <img src={require('./images/profile.jpg')} style={{"width": "40px","height": "40px", "borderRadius": "50%", "overflow": "hidden", "verticalAlign": "baseline"}}/>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 pull-right">
                        <div className="row" style={{"marginTop": "7px"}}>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                              <i className="icons icon-speech" style={{"fontSize": "20px", "fontWeight": "bold"}}></i>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6">
                              <i className="icons icon-options-vertical" style={{"fontSize": "20px", "fontWeight": "bold"}}></i>
                          </div>
                        </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-9 col-md-9" style={{"backgroundColor": "rgb(248, 249, 251)", "minHeight": "700px", "height": "100vh"}}>
                  <img src={require('./images/whatsapp.png')} className="img-responsive" style={{"margin": "100px auto"}}/>                    
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
