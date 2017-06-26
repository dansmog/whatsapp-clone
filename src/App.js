import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
      
          <div className="chatlist">
            
            <div className="chatlist--header">
              <div className="chatlist--header__image">
                <img src="http://www.joshfinnie.com/assets/images/josh-tm.jpeg" />
              </div>
              <div className="chatlist--header__icons">
                <i className="material-icons">&#xE85A;</i>
                <i className="material-icons">&#xE5D4;</i>
              </div>
            </div>
            <div className="chatlist--search" style={{"position": "relative"}}>
              <input type="" placeholder="search or start a new chat"/>
              <img src={require('./images/searchicon.png')} alt={'user profile picture'} style={{"width": "15px", "position":"absolute","bottom":"18px","left":"20px","fontSize":"15px"}} />
  
            </div>
            
            <div className="list">
              
              <div className="list--item">
                <div className="list--item__image">
                  <img src="http://www.joshfinnie.com/assets/images/josh-tm.jpeg" alt={'user profile picture'}/>
                </div>
                <div className="list--item__details">
                  <h3>Fellowship</h3>
                  <p>Bro smart: what i think this should be...</p>
                </div>
              </div>
              
              <div className="list--item">
                <div className="list--item__image">
                  <img src="http://www.joshfinnie.com/assets/images/josh-tm.jpeg" alt={'user profile picture'}/>
                </div>
                <div className="list--item__details">
                  <h3>Fellowship</h3>
                  <p>Bro smart: what i think this should be...</p>
                </div>
              </div>
              <div className="list--item">
                <div className="list--item__image">
                  <img src="http://www.joshfinnie.com/assets/images/josh-tm.jpeg" alt={'user profile picture'}/>
                </div>
                <div className="list--item__details">
                  <h3>Fellowship</h3>
                  <p>Bro smart: what i think this should be...</p>
                </div>
              </div>
              
            </div>
            
          </div>
          
          <div className="view">
            <div className="view--whatsapp">
                <img src={require('./images/whatsapp.png')} alt={"whatsapp key point"} />
                <h2>keep you phone connected</h2>
                <p>whatsapp connects to your phone to sync messages. To reduce data usage, connect your phone to wifi</p>
            </div>
            <div className="view--chats"></div>
          </div>
    
      </div>
    );
  }
}

export default App;
